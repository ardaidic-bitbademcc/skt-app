import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { calcExpiryStatus } from '../lib/expiryStatus';
import { authenticate } from '../middleware/auth';

const router = Router();
router.use(authenticate);

// ─── Schema ──────────────────────────────────────────────────────────────────

const ReceiveSchema = z.object({
  productId:   z.string().min(1, 'Ürün ID zorunlu'),
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
});

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

    const [product, warehouse] = await Promise.all([
      prisma.product.findUnique({ where: { id: body.productId, isActive: true } }),
      prisma.warehouse.findUnique({ where: { id: body.warehouseId, isActive: true } }),
    ]);

    if (!product)   return res.status(400).json({ error: 'Ürün bulunamadı' });
    if (!warehouse) return res.status(400).json({ error: 'Depo bulunamadı' });

    const status = calcExpiryStatus(expiryDate);

    const existingLot = await prisma.stockLot.findFirst({
      where: { productId: body.productId, warehouseId: body.warehouseId, expiryDate },
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
          productId:   body.productId,
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

    res.status(isNew ? 201 : 200).json({ lot: { ...lot, isNew }, movement });
  } catch (err) {
    next(err);
  }
});

export default router;
