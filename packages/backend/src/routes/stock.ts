import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { calcExpiryStatus, calcExpiryStatusOptional } from '../lib/expiryStatus';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = Router();
router.use(authenticate);

// ─── Schema ──────────────────────────────────────────────────────────────────

const ReceiveSchema = z.object({
  // productId VEYA (productBarcode + productName) zorunlu.
  productId:      z.string().min(1).optional(),
  productBarcode: z.string().min(1).max(100).optional(),
  productName:    z.string().min(1).max(200).optional(),
  productUnit:    z.enum(['adet', 'kg', 'lt', 'kutu', 'paket', 'koli']).optional(),
  productType:    z.enum(['PERISHABLE', 'CONSUMABLE']).optional(),

  warehouseId: z.string().min(1, 'Depo ID zorunlu'),
  branchId:    z.string().min(1, 'Şube ID zorunlu'),
  supplierId:  z.string().min(1).optional(),
  // CONSUMABLE için expiryDate opsiyonel
  expiryDate:  z.string().refine(
    (v) => !isNaN(Date.parse(v)),
    { message: 'Geçerli bir tarih girin (YYYY-MM-DD)' }
  ).optional(),
  quantity:    z.number().int().positive('Adet 0\'dan büyük olmalı'),
  lotNumber:   z.string().max(50).optional(),
  notes:       z.string().max(300).optional(),
}).refine(
  (d) => d.productId || (d.productBarcode && d.productName),
  { message: 'productId veya productBarcode+productName zorunlu' },
);

// ─── POST /api/stock/receive ──────────────────────────────────────────────────
/*
  Stok teslim alma.

  İş kuralı:
    • Aynı productId + warehouseId + expiryDate (gün bazında) → mevcut lota ekle
    • Farklı SKT → yeni lot (FEFO)
    • Her iki durumda da StockMovement (IN) kaydı ve AuditLog yazılır

  Request (minimum):
    {
      "productId":   "product-8690000000001",
      "warehouseId": "warehouse-main",
      "branchId":    "branch-main",
      "expiryDate":  "2025-06-30",
      "quantity":    48
    }

  Request (tam):
    {
      "productId":   "product-8690000000001",
      "warehouseId": "warehouse-main",
      "branchId":    "branch-main",
      "supplierId":  "supplier-1",
      "expiryDate":  "2025-06-30",
      "quantity":    48,
      "lotNumber":   "LOT-2025-06",
      "notes":       "2. parti"
    }

  Response 201 — yeni lot:
    {
      "lot": {
        "id": "clx...", "productId": "...", "warehouseId": "...",
        "expiryDate": "2025-06-30T00:00:00.000Z",
        "quantity": 48, "status": "WARNING", "isNew": true
      },
      "movement": { "id": "...", "type": "IN", "quantity": 48, "createdAt": "..." }
    }

  Response 200 — mevcut lot güncellendi (aynı ürün+depo+SKT):
    {
      "lot": { "id": "...", "quantity": 96, "status": "WARNING", "isNew": false },
      "movement": { ... }
    }

  Response 400: { "error": "Ürün bulunamadı" }
  Response 400: { "error": "Depo bulunamadı" }
  Response 422: { "error": "Validation hatası", "fields": [...] }
*/
router.post('/receive', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = ReceiveSchema.parse(req.body);

    // expiryDate: PERISHABLE için zorunlu, CONSUMABLE için null
    let expiryDate: Date | null = null;
    if (body.expiryDate) {
      expiryDate = new Date(body.expiryDate);
      expiryDate.setUTCHours(0, 0, 0, 0);
    }

    // ─── Ürün çözümleme (atomic) ──────────────────────────────────────────────
    let resolvedProductId = body.productId;
    if (!resolvedProductId) {
      const existing = await prisma.productBarcode.findUnique({
        where: { barcode: body.productBarcode! },
        select: { productId: true },
      });
      if (existing) {
        resolvedProductId = existing.productId;
      } else {
        const created = await prisma.product.create({
          data: {
            name:        body.productName!,
            unit:        body.productUnit ?? 'adet',
            productType: body.productType ?? 'PERISHABLE',
            barcodes:    { create: { barcode: body.productBarcode!, isPrimary: true } },
          },
          select: { id: true },
        });
        resolvedProductId = created.id;
      }
    }

    const [product, warehouse] = await Promise.all([
      prisma.product.findUnique({ where: { id: resolvedProductId!, isActive: true } }),
      prisma.warehouse.findUnique({ where: { id: body.warehouseId, isActive: true } }),
    ]);

    if (!product)   return res.status(400).json({ error: 'Ürün bulunamadı' });
    if (!warehouse) return res.status(400).json({ error: 'Depo bulunamadı' });

    // PERISHABLE ise expiryDate zorunlu
    if (product.productType === 'PERISHABLE' && !expiryDate) {
      return res.status(400).json({ error: 'Bu ürün için son kullanma tarihi zorunludur' });
    }

    // Multi-tenancy: non-ADMIN sadece kendi şubesine stok ekleyebilir
    if (req.user!.role !== 'ADMIN' && req.user!.branchId) {
      if (warehouse.branchId !== req.user!.branchId) {
        return res.status(403).json({ error: 'Bu depoya erişim yetkiniz yok' });
      }
    }

    const status = calcExpiryStatusOptional(expiryDate);

    // Lot eşleştirme:
    //   PERISHABLE: aynı productId + warehouseId + expiryDate → birleştir
    //   CONSUMABLE: aynı productId + warehouseId (expiryDate null) → tek lot
    const existingLot = await prisma.stockLot.findFirst({
      where: {
        productId:   resolvedProductId!,
        warehouseId: body.warehouseId,
        expiryDate:  expiryDate ?? null,
      },
    });

    let lot;
    let isNew: boolean;

    if (existingLot) {
      lot = await prisma.stockLot.update({
        where: { id: existingLot.id },
        data: {
          quantity: { increment: body.quantity },
          ...(status !== null && { status }),
          ...(body.notes && { notes: body.notes }),
        },
      });
      isNew = false;
    } else {
      lot = await prisma.stockLot.create({
        data: {
          productId:   resolvedProductId!,
          warehouseId: body.warehouseId,
          branchId:    body.branchId,
          supplierId:  body.supplierId,
          expiryDate,
          quantity:    body.quantity,
          status,
          lotNumber:   body.lotNumber,
          notes:       body.notes,
        },
      });
      isNew = true;
    }

    const movement = await prisma.stockMovement.create({
      data: {
        stockLotId: lot.id,
        type:       'IN',
        quantity:   body.quantity,
        userId:     req.user!.id,
        notes:      body.notes,
      },
      select: { id: true, type: true, quantity: true, createdAt: true },
    });

    prisma.auditLog.create({
      data: {
        userId:   req.user!.id,
        action:   'STOCK_RECEIVE',
        entity:   'StockLot',
        entityId: lot.id,
        details:  JSON.stringify({ quantity: body.quantity, isNew }),
      },
    }).catch(() => {});

    res.status(isNew ? 201 : 200).json({ lot: { ...lot, isNew }, movement, productId: resolvedProductId });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/stock/counts ────────────────────────────────────────────────────
router.get('/counts', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = z.object({
      branchId: z.string().optional(),
      status:   z.enum(['DRAFT', 'CONFIRMED']).optional(),
    });
    const { branchId, status } = schema.parse(req.query);

    const where: Record<string, any> = {};
    if (status) where.status = status;
    if (branchId) {
      where.branchId = branchId;
    } else if (req.user!.role !== 'ADMIN' && req.user!.branchId) {
      where.branchId = req.user!.branchId;
    }

    const counts = await prisma.inventoryCount.findMany({
      where,
      orderBy: [{ period: 'desc' }, { createdAt: 'desc' }],
      select: {
        id: true, period: true, status: true, notes: true,
        branchId: true, branch: { select: { id: true, name: true } },
        createdAt: true, confirmedAt: true,
        creator:  { select: { id: true, name: true } },
        confirmer: { select: { id: true, name: true } },
        _count: { select: { items: true } },
      },
    });

    res.json(counts);
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/stock/counts ───────────────────────────────────────────────────
// Yeni sayım oturumu başlat; tüm aktif ürün+depo kombinasyonlarını snapshot al
router.post('/counts', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = z.object({
      branchId: z.string().min(1),
      period:   z.string().regex(/^\d{4}-\d{2}$/, 'Format YYYY-MM olmalı'),
      notes:    z.string().max(300).optional(),
    });
    const body = schema.parse(req.body);

    // Aynı şube + dönem için zaten açık sayım var mı?
    const existing = await prisma.inventoryCount.findUnique({
      where: { branchId_period: { branchId: body.branchId, period: body.period } },
    });
    if (existing) {
      return res.status(409).json({ error: `${body.period} dönemine ait sayım zaten mevcut`, id: existing.id });
    }

    // Şubeye ait tüm aktif stokları snapshot al
    const activeLots = await prisma.stockLot.findMany({
      where: { branchId: body.branchId, quantity: { gt: 0 } },
      select: {
        productId: true, warehouseId: true, quantity: true,
        product: { select: { productType: true } },
      },
    });

    // Ürün+depo başına toplam miktarı hesapla
    const aggregated = new Map<string, { productId: string; warehouseId: string; total: number }>();
    for (const lot of activeLots) {
      const key = `${lot.productId}::${lot.warehouseId}`;
      if (!aggregated.has(key)) {
        aggregated.set(key, { productId: lot.productId, warehouseId: lot.warehouseId, total: 0 });
      }
      aggregated.get(key)!.total += lot.quantity;
    }

    const count = await prisma.inventoryCount.create({
      data: {
        branchId:  body.branchId,
        period:    body.period,
        notes:     body.notes,
        createdBy: req.user!.id,
        items: {
          create: Array.from(aggregated.values()).map((r) => ({
            productId:      r.productId,
            warehouseId:    r.warehouseId,
            systemQuantity: r.total,
          })),
        },
      },
      select: {
        id: true, period: true, status: true, branchId: true,
        _count: { select: { items: true } },
      },
    });

    res.status(201).json(count);
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/stock/counts/:id ────────────────────────────────────────────────
router.get('/counts/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const count = await prisma.inventoryCount.findUnique({
      where: { id: req.params.id },
      select: {
        id: true, period: true, status: true, notes: true,
        branchId: true, branch: { select: { id: true, name: true } },
        createdAt: true, confirmedAt: true,
        creator:   { select: { id: true, name: true } },
        confirmer: { select: { id: true, name: true } },
        items: {
          select: {
            id: true,
            productId: true, product: { select: { id: true, name: true, unit: true, productType: true } },
            warehouseId: true, warehouse: { select: { id: true, name: true } },
            systemQuantity: true, countedQuantity: true, difference: true, notes: true,
          },
          orderBy: [
            { product: { name: 'asc' } },
            { warehouse: { name: 'asc' } },
          ],
        },
      },
    });

    if (!count) return res.status(404).json({ error: 'Sayım bulunamadı' });
    res.json(count);
  } catch (err) {
    next(err);
  }
});

// ─── PATCH /api/stock/counts/:id/items/:itemId ────────────────────────────────
// Sayım kalemi güncelle (personel fiili miktarı girer)
router.patch('/counts/:id/items/:itemId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = z.object({
      countedQuantity: z.number().int().min(0),
      notes:           z.string().max(300).optional(),
    });
    const { countedQuantity, notes } = schema.parse(req.body);

    const count = await prisma.inventoryCount.findUnique({
      where: { id: req.params.id },
      select: { status: true },
    });
    if (!count) return res.status(404).json({ error: 'Sayım bulunamadı' });
    if (count.status === 'CONFIRMED') {
      return res.status(400).json({ error: 'Onaylanmış sayım düzenlenemez' });
    }

    const item = await prisma.inventoryCountItem.findFirst({
      where: { id: req.params.itemId, inventoryCountId: req.params.id },
      select: { systemQuantity: true },
    });
    if (!item) return res.status(404).json({ error: 'Sayım kalemi bulunamadı' });

    const updated = await prisma.inventoryCountItem.update({
      where: { id: req.params.itemId },
      data: {
        countedQuantity,
        difference: countedQuantity - item.systemQuantity,
        notes,
      },
    });

    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/stock/counts/:id/confirm ──────────────────────────────────────
// Sayımı onayla: fark olan kalemlere ADJUSTMENT hareketi yaz, stokları güncelle
router.post('/counts/:id/confirm', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const count = await prisma.inventoryCount.findUnique({
      where: { id: req.params.id },
      include: {
        items: {
          where: { countedQuantity: { not: null }, difference: { not: 0 } },
          include: {
            product: { select: { id: true, productType: true } },
          },
        },
      },
    });

    if (!count)                    return res.status(404).json({ error: 'Sayım bulunamadı' });
    if (count.status === 'CONFIRMED') return res.status(400).json({ error: 'Sayım zaten onaylandı' });

    // Her farklı kalem için stok güncelle (FEFO: en eski lot önce)
    for (const item of count.items) {
      if (item.countedQuantity === null || item.difference === null || item.difference === 0) continue;

      const lots = await prisma.stockLot.findMany({
        where: { productId: item.productId, warehouseId: item.warehouseId },
        orderBy: [
          { expiryDate: 'asc' }, // FEFO — null (CONSUMABLE) için en sona düşer
          { createdAt:  'asc' },
        ],
      });

      let remaining = Math.abs(item.difference);
      const isDecrease = item.difference < 0;

      if (isDecrease) {
        // Azalma: FEFO ile en eski lot'tan düş
        for (const lot of lots) {
          if (remaining <= 0) break;
          const deduct = Math.min(lot.quantity, remaining);
          await prisma.stockLot.update({
            where: { id: lot.id },
            data: { quantity: { decrement: deduct } },
          });
          await prisma.stockMovement.create({
            data: {
              stockLotId: lot.id,
              type:       'ADJUSTMENT',
              quantity:   -deduct,
              userId:     req.user!.id,
              notes:      `Sayım farkı: ${count.period}`,
            },
          });
          remaining -= deduct;
        }
      } else {
        // Artma: CONSUMABLE → tek lot'a ekle; PERISHABLE → SKT'si bilinmeyen yeni lot oluştur
        if (item.product.productType === 'CONSUMABLE') {
          const targetLot = lots[lots.length - 1];
          if (targetLot) {
            await prisma.stockLot.update({
              where: { id: targetLot.id },
              data: { quantity: { increment: item.difference! } },
            });
            await prisma.stockMovement.create({
              data: {
                stockLotId: targetLot.id,
                type:       'ADJUSTMENT',
                quantity:   item.difference!,
                userId:     req.user!.id,
                notes:      `Sayım fazlası: ${count.period}`,
              },
            });
          }
        } else {
          // PERISHABLE fazlası — SKT bilinmiyor, yeni lot (null expiryDate)
          const warehouseId = item.warehouseId;
          const newLot = await prisma.stockLot.create({
            data: {
              productId:   item.productId,
              warehouseId,
              branchId:    count.branchId,
              expiryDate:  null,
              quantity:    item.difference!,
              status:      null,
              notes:       `Sayım fazlası — SKT bilinmiyor (${count.period})`,
            },
          });
          await prisma.stockMovement.create({
            data: {
              stockLotId: newLot.id,
              type:       'ADJUSTMENT',
              quantity:   item.difference!,
              userId:     req.user!.id,
              notes:      `Sayım fazlası: ${count.period} — SKT bilinmiyor`,
            },
          });
        }
      }
    }

    const confirmed = await prisma.inventoryCount.update({
      where: { id: req.params.id },
      data: {
        status:      'CONFIRMED',
        confirmedBy: req.user!.id,
        confirmedAt: new Date(),
      },
      select: { id: true, period: true, status: true, confirmedAt: true },
    });

    prisma.auditLog.create({
      data: {
        userId:   req.user!.id,
        action:   'INVENTORY_CONFIRM',
        entity:   'InventoryCount',
        entityId: req.params.id,
        details:  JSON.stringify({ period: count.period, adjustedItems: count.items.length }),
      },
    }).catch(() => {});

    res.json(confirmed);
  } catch (err) {
    next(err);
  }
});

// ─── PATCH /api/stock/lots/:id/sold-out ─────────────────────────────────────
// Tükendi: lot miktarını 0'a çeker (lot kaydı silinmez), StockMovement (OUT) yazar
router.patch('/lots/:id/sold-out', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const lot = await prisma.stockLot.findUnique({ where: { id: req.params.id } });
    if (!lot) return res.status(404).json({ error: 'Lot bulunamadı' });

    // Multi-tenancy: non-admin sadece kendi şubesinin lotlarını güncelleyebilir
    if (req.user!.role !== 'ADMIN' && req.user!.branchId && lot.branchId !== req.user!.branchId) {
      return res.status(403).json({ error: 'Bu lota erişim yetkiniz yok' });
    }

    if (lot.quantity === 0) {
      return res.status(400).json({ error: 'Bu lot zaten tükenmiş' });
    }

    const previousQuantity = lot.quantity;

    const updated = await prisma.stockLot.update({
      where: { id: lot.id },
      data:  { quantity: 0 },
    });

    await prisma.stockMovement.create({
      data: {
        stockLotId: lot.id,
        type:       'OUT',
        quantity:   -previousQuantity,
        userId:     req.user!.id,
        notes:      'Tükendi',
      },
    });

    prisma.auditLog.create({
      data: {
        userId:   req.user!.id,
        action:   'STOCK_SOLD_OUT',
        entity:   'StockLot',
        entityId: lot.id,
        details:  JSON.stringify({ previousQuantity }),
      },
    }).catch(() => {});

    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// ─── PATCH /api/stock/lots/:id/expiry ─────────────────────────────────────────
// Admin: stok lotunun SKT'sini düzelt ve durumu yeniden hesapla
router.patch('/lots/:id/expiry', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = z.object({
      expiryDate: z.string().refine((v) => !isNaN(Date.parse(v)), { message: 'Geçerli tarih girin (YYYY-MM-DD)' }),
    });
    const { expiryDate: rawDate } = schema.parse(req.body);

    const expiry = new Date(rawDate);
    expiry.setUTCHours(0, 0, 0, 0);

    const lot = await prisma.stockLot.findUnique({ where: { id: req.params.id } });
    if (!lot) return res.status(404).json({ error: 'Lot bulunamadı' });
    if (!lot.expiryDate) return res.status(400).json({ error: 'Sarf malzeme lotunun SKT\'si değiştirilemez' });

    const newStatus = calcExpiryStatus(expiry);

    const updated = await prisma.stockLot.update({
      where: { id: req.params.id },
      data: { expiryDate: expiry, status: newStatus },
      select: { id: true, expiryDate: true, status: true, productId: true, warehouseId: true },
    });

    prisma.auditLog.create({
      data: {
        userId:   req.user!.id,
        action:   'EXPIRY_UPDATE',
        entity:   'StockLot',
        entityId: lot.id,
        details:  JSON.stringify({ oldExpiry: lot.expiryDate, newExpiry: expiry, newStatus }),
      },
    }).catch(() => {});

    res.json(updated);
  } catch (err) {
    next(err);
  }
});

export default router;
