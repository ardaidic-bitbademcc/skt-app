import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../lib/prisma';
import { authenticate } from '../middleware/auth';

const router = Router();
router.use(authenticate);

/*
  GET /api/branches
  Returns branches the authenticated user is allowed to see.
  ADMIN → all active branches; others → their own branch only.
*/
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const where: Record<string, any> = { isActive: true };

    if (req.user!.role !== 'ADMIN' && req.user!.branchId) {
      where.id = req.user!.branchId;
    }

    const items = await prisma.branch.findMany({
      where,
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

export default router;
