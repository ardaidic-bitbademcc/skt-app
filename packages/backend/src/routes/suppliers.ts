import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../lib/prisma';
import { authenticate } from '../middleware/auth';

const router = Router();
router.use(authenticate);

/*
  GET /api/suppliers

  Response 200:
    [ { "id": "supplier-1", "name": "ABC Tedarik A.Ş." }, ... ]
*/
router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await prisma.supplier.findMany({
      where:   { isActive: true },
      select:  { id: true, name: true },
      orderBy: { name: 'asc' },
    });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

export default router;
