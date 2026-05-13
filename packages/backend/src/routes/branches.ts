import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = Router();
router.use(authenticate);

const BranchSchema = z.object({
  name:    z.string().min(1).max(100),
  address: z.string().max(255).optional(),
  phone:   z.string().max(30).optional(),
});

/*
  GET /api/branches
  ADMIN → tüm aktif şubeler; diğerleri → sadece kendi şubesi
*/
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const where: Record<string, any> = { isActive: true };

    if (req.user!.role !== 'ADMIN' && req.user!.branchId) {
      where.id = req.user!.branchId;
    }

    const items = await prisma.branch.findMany({
      where,
      select: { id: true, name: true, address: true, phone: true },
      orderBy: { name: 'asc' },
    });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

/*
  POST /api/branches  (admin only)
*/
router.post('/', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = BranchSchema.parse(req.body);
    const branch = await prisma.branch.create({
      data: { name: body.name, address: body.address, phone: body.phone },
      select: { id: true, name: true, address: true, phone: true },
    });
    res.status(201).json(branch);
  } catch (err) {
    next(err);
  }
});

/*
  PUT /api/branches/:id  (admin only)
*/
router.put('/:id', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const branch = await prisma.branch.findUnique({ where: { id: req.params.id } });
    if (!branch || !branch.isActive) return res.status(404).json({ error: 'Şube bulunamadı' });

    const body = BranchSchema.parse(req.body);
    const updated = await prisma.branch.update({
      where: { id: req.params.id },
      data:  { name: body.name, address: body.address, phone: body.phone },
      select: { id: true, name: true, address: true, phone: true },
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

/*
  DELETE /api/branches/:id  (admin only) — soft delete
*/
router.delete('/:id', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const branch = await prisma.branch.findUnique({ where: { id: req.params.id } });
    if (!branch || !branch.isActive) return res.status(404).json({ error: 'Şube bulunamadı' });

    // Aktif depo/kullanıcı varsa silmeyi engelle
    const warehouseCount = await prisma.warehouse.count({
      where: { branchId: req.params.id, isActive: true },
    });
    if (warehouseCount > 0) {
      return res.status(400).json({ error: `Bu şubeye bağlı ${warehouseCount} aktif depo var. Önce depoları silin.` });
    }

    await prisma.branch.update({
      where: { id: req.params.id },
      data:  { isActive: false },
    });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
