import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../lib/prisma';
import { authenticate } from '../middleware/auth';

const router = Router();
router.use(authenticate);

/*
  GET /api/warehouses

  Response 200:
    [
      { "id": "warehouse-main", "name": "Ana Depo",
        "branchId": "branch-main", "branch": { "id": "...", "name": "Merkez Şube" } }
    ]
*/
router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await prisma.warehouse.findMany({
      where:   { isActive: true },
      include: { branch: { select: { id: true, name: true } } },
      orderBy: { name: 'asc' },
    });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

export default router;
