import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../lib/prisma';
import { authenticate } from '../middleware/auth';

const router = Router();
router.use(authenticate);

/*
  GET /api/alerts/summary
  Dashboard üst kartları için lot sayıları

  Response 200:
    { "total": 12, "warning": 3, "critical": 2, "expired": 1 }
*/
router.get('/summary', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Multi-tenancy: non-admin users see only their branch
    const branchFilter =
      req.user!.role !== 'ADMIN' && req.user!.branchId
        ? { branchId: req.user!.branchId }
        : {};

    const [total, warning, critical, expired] = await Promise.all([
      prisma.stockLot.count({ where: { quantity: { gt: 0 }, ...branchFilter } }),
      prisma.stockLot.count({ where: { status: 'WARNING',  quantity: { gt: 0 }, ...branchFilter } }),
      prisma.stockLot.count({ where: { status: 'CRITICAL', quantity: { gt: 0 }, ...branchFilter } }),
      prisma.stockLot.count({ where: { status: 'EXPIRED',  quantity: { gt: 0 }, ...branchFilter } }),
    ]);
    res.json({ total, warning, critical, expired });
  } catch (err) {
    next(err);
  }
});

/*
  GET /api/alerts?status=CRITICAL&limit=20
  SKT uyarı listesi — süresi yaklaşan ve geçen lotlar (FEFO sıralı)

  Query: status (opsiyonel — belirtilmezse WARNING+CRITICAL+EXPIRED döner)
         limit (varsayılan 20)

  Response 200:
    {
      "data": [
        {
          "id": "...",
          "expiryDate": "...",
          "quantity": 50,
          "status": "CRITICAL",
          "product": { "id": "...", "name": "Süt 1L", "unit": "adet", "barcodes": [...] },
          "warehouse": { "id": "...", "name": "Ana Depo" }
        }
      ],
      "total": 5
    }
*/
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = req.query.status as string | undefined;
    const limit  = Math.min(parseInt(req.query.limit as string || '20'), 100);
    const page   = Math.max(parseInt(req.query.page  as string || '1'), 1);
    const skip   = (page - 1) * limit;

    const where: Record<string, any> = { quantity: { gt: 0 } };

    // Multi-tenancy: non-admin users see only their branch
    if (req.user!.role !== 'ADMIN' && req.user!.branchId) {
      where.branchId = req.user!.branchId;
    }

    if (status) {
      where.status = status;
    } else {
      where.status = { in: ['EXPIRED', 'CRITICAL', 'WARNING'] };
    }

    const [data, total] = await Promise.all([
      prisma.stockLot.findMany({
        where,
        skip,
        take: limit,
        orderBy: { expiryDate: 'asc' }, // FEFO
        select: {
          id: true,
          productId: true,
          expiryDate: true,
          quantity: true,
          status: true,
          lotNumber: true,
          product: {
            select: {
              id: true, name: true, unit: true,
              barcodes: { where: { isPrimary: true }, select: { barcode: true } },
            },
          },
          warehouse: { select: { id: true, name: true } },
          supplier: { select: { id: true, name: true } },
        },
      }),
      prisma.stockLot.count({ where }),
    ]);

    res.json({ data, total, page, limit });
  } catch (err) {
    next(err);
  }
});

export default router;
