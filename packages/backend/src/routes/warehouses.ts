import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = Router();
router.use(authenticate);

const WarehouseSchema = z.object({
  name:     z.string().min(1).max(100),
  branchId: z.string().min(1),
});

/*
  GET /api/warehouses
  — ADMIN: tüm aktif depolar
  — STAFF/VIEWER: sadece kendi branchId'sine ait depolar
*/
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const where: Record<string, any> = { isActive: true };

    // Multi-tenancy: ADMIN olmayan kullanıcılar sadece kendi şubesini görür
    if (req.user!.role !== 'ADMIN' && req.user!.branchId) {
      where.branchId = req.user!.branchId;
    }

    const items = await prisma.warehouse.findMany({
      where,
      include: { branch: { select: { id: true, name: true } } },
      orderBy: { name: 'asc' },
    });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

/*
  POST /api/warehouses  (admin only)
*/
router.post('/', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = WarehouseSchema.parse(req.body);

    const branch = await prisma.branch.findUnique({ where: { id: body.branchId } });
    if (!branch) return res.status(400).json({ error: 'Şube bulunamadı' });

    const item = await prisma.warehouse.create({
      data: { name: body.name, branchId: body.branchId },
      include: { branch: { select: { id: true, name: true } } },
    });

    await prisma.auditLog.create({
      data: {
        userId:   req.user!.id,
        action:   'WAREHOUSE_CREATE',
        entity:   'Warehouse',
        entityId: item.id,
        details:  JSON.stringify({ name: body.name }),
      },
    });

    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
});

/*
  PUT /api/warehouses/:id  (admin only)
*/
router.put('/:id', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = WarehouseSchema.partial().parse(req.body);

    const existing = await prisma.warehouse.findUnique({ where: { id: req.params.id } });
    if (!existing || !existing.isActive) {
      return res.status(404).json({ error: 'Depo bulunamadı' });
    }

    if (body.branchId) {
      const branch = await prisma.branch.findUnique({ where: { id: body.branchId } });
      if (!branch) return res.status(400).json({ error: 'Şube bulunamadı' });
    }

    const item = await prisma.warehouse.update({
      where: { id: req.params.id },
      data:  body,
      include: { branch: { select: { id: true, name: true } } },
    });

    res.json(item);
  } catch (err) {
    next(err);
  }
});

/*
  DELETE /api/warehouses/:id  (admin only) — soft delete
*/
router.delete('/:id', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const existing = await prisma.warehouse.findUnique({ where: { id: req.params.id } });
    if (!existing || !existing.isActive) {
      return res.status(404).json({ error: 'Depo bulunamadı' });
    }

    await prisma.warehouse.update({
      where: { id: req.params.id },
      data:  { isActive: false },
    });

    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

export default router;
