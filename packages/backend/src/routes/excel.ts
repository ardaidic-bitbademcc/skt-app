import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { authenticate, requireAdmin } from '../middleware/auth';
import { calcExpiryStatus } from '../lib/expiryStatus';

const router = Router();
router.use(authenticate, requireAdmin);

const importRowSchema = z.object({
  name: z.string().min(1),
  sku: z.string().optional(),
  barcode: z.string().optional(),
  unit: z.string().default('adet'),
  expiryDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  quantity: z.number().positive(),
  warehouseId: z.string().min(1),
});

const importBodySchema = z.object({
  rows: z.array(importRowSchema).min(1).max(1000),
});

router.post('/import', async (req, res, next) => {
  try {
    const { rows } = importBodySchema.parse(req.body);
    let created = 0;
    let updated = 0;

    for (const row of rows) {
      const expiry = new Date(row.expiryDate);

      // Upsert product by barcode → sku → name
      let product = null as any;

      if (row.barcode) {
        const pb = await prisma.productBarcode.findFirst({
          where: { code: row.barcode },
          include: { product: true },
        });
        if (pb) product = pb.product;
      }

      if (!product && row.sku) {
        product = await prisma.product.findFirst({ where: { sku: row.sku, deletedAt: null } });
      }

      if (!product) {
        product = await prisma.product.create({
          data: {
            name: row.name,
            sku: row.sku ?? null,
            unit: row.unit,
            status: calcExpiryStatus(expiry),
          },
        });
        if (row.barcode) {
          await prisma.productBarcode.create({
            data: { productId: product.id, code: row.barcode },
          }).catch(() => {});
        }
        created++;
      }

      // Upsert stock lot
      const existing = await prisma.stockLot.findFirst({
        where: { productId: product.id, warehouseId: row.warehouseId, expiryDate: expiry },
      });

      const status = calcExpiryStatus(expiry);

      if (existing) {
        await prisma.stockLot.update({
          where: { id: existing.id },
          data: { quantity: { increment: row.quantity }, status },
        });
      } else {
        await prisma.stockLot.create({
          data: {
            productId: product.id,
            warehouseId: row.warehouseId,
            expiryDate: expiry,
            quantity: row.quantity,
            status,
          },
        });
      }
      updated++;
    }

    res.json({ created, updated });
  } catch (err) {
    next(err);
  }
});

export default router;
