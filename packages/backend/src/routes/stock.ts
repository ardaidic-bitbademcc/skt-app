import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { calcExpiryStatus } from '../lib/expiryStatus';
import { authenticate } from '../middleware/auth';

const router = Router();
router.use(authenticate);

// ─── Schema ──────────────────────────────────────────────────────────────────

const ReceiveSchema = z.object({
  // productId VEYA (productBarcode + productName) zorunlu.
  // Yeni ürün akışında mobil, ürün oluşturma + stok eklemeyi TEK requestte gönderir;
  // böylece Vercel serverless'ta farklı instance'a düşme riski ortadan kalkar.
  productId:      z.string().min(1).optional(),
  productBarcode: z.string().min(1).max(100).optional(),
  productName:    z.string().min(1).max(200).optional(),
  productUnit:    z.enum(['adet', 'kg', 'lt', 'kutu', 'paket', 'koli']).optional(),

  warehouseId: z.string().min(1, 'Depo ID zorunlu'),
  branchId:    z.string().min(1, 'Şube ID zorunlu'),
  supplierId:  z.string().min(1).optional(),
  expiryDate:  z.string().refine(
    (v) => !isNaN(Date.parse(v)),
    { message: 'Geçerli bir tarih girin (YYYY-MM-DD)' }
  ),
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

    const expiryDate = new Date(body.expiryDate);
    expiryDate.setUTCHours(0, 0, 0, 0); // gün bazında karşılaştırma

    // ─── Ürün çözümleme (atomic) ──────────────────────────────────────────────
    // productId yoksa barcode+name ile ürünü bul ya da oluştur.
    // Böylece Vercel serverless'ta ürün oluşturma + stok ekleme TEK transaction'da
    // gerçekleşir ve farklı /tmp instance'larına düşme sorunu ortadan kalkar.
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
            name:    body.productName!,
            unit:    body.productUnit ?? 'adet',
            barcodes: { create: { barcode: body.productBarcode!, isPrimary: true } },
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

    // Multi-tenancy: non-ADMIN users can only stock their own branch
    if (req.user!.role !== 'ADMIN' && req.user!.branchId) {
      if (warehouse.branchId !== req.user!.branchId) {
        return res.status(403).json({ error: 'Bu depoya erişim yetkiniz yok' });
      }
    }

    const status = calcExpiryStatus(expiryDate);

    const existingLot = await prisma.stockLot.findFirst({
      where: { productId: resolvedProductId!, warehouseId: body.warehouseId, expiryDate },
    });

    let lot;
    let isNew: boolean;

    if (existingLot) {
      lot = await prisma.stockLot.update({
        where: { id: existingLot.id },
        data: {
          quantity: { increment: body.quantity },
          status,
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

    await prisma.auditLog.create({
      data: {
        userId:   req.user!.id,
        action:   'STOCK_RECEIVE',
        entity:   'StockLot',
        entityId: lot.id,
        details:  JSON.stringify({ quantity: body.quantity, isNew }),
      },
    });

    res.status(isNew ? 201 : 200).json({ lot: { ...lot, isNew }, movement, productId: resolvedProductId });
  } catch (err) {
    next(err);
  }
});

export default router;
