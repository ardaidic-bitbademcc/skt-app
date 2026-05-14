import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = Router();
router.use(authenticate, requireAdmin);

// ─── GET /api/users ───────────────────────────────────────────────────────────
router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { name: 'asc' },
      select: {
        id: true, name: true, email: true, role: true,
        branchId: true, branch: { select: { id: true, name: true } },
        isActive: true, createdAt: true,
      },
    });
    res.json(users);
  } catch (err) { next(err); }
});

// ─── POST /api/users ──────────────────────────────────────────────────────────
const CreateSchema = z.object({
  name:     z.string().min(1).max(100),
  email:    z.string().email(),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalı'),
  role:     z.enum(['ADMIN', 'STAFF', 'VIEWER']).default('STAFF'),
  branchId: z.string().optional(),
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = CreateSchema.parse(req.body);
    const exists = await prisma.user.findUnique({ where: { email: body.email } });
    if (exists) return res.status(409).json({ error: 'Bu e-posta adresi zaten kayıtlı' });
    const hashed = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
      data: { ...body, password: hashed },
      select: { id: true, name: true, email: true, role: true, branchId: true, createdAt: true },
    });
    res.status(201).json(user);
  } catch (err) { next(err); }
});

// ─── PUT /api/users/:id ───────────────────────────────────────────────────────
const UpdateSchema = z.object({
  name:     z.string().min(1).max(100).optional(),
  email:    z.string().email().optional(),
  password: z.string().min(6).optional(),
  role:     z.enum(['ADMIN', 'STAFF', 'VIEWER']).optional(),
  branchId: z.string().nullable().optional(),
  isActive: z.boolean().optional(),
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = UpdateSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });

    if (body.email && body.email !== user.email) {
      const dup = await prisma.user.findUnique({ where: { email: body.email } });
      if (dup) return res.status(409).json({ error: 'Bu e-posta adresi zaten kullanımda' });
    }

    const data: Record<string, unknown> = { ...body };
    if (body.password) data.password = await bcrypt.hash(body.password, 10);
    else delete data.password;

    const updated = await prisma.user.update({
      where: { id: req.params.id },
      data,
      select: { id: true, name: true, email: true, role: true, branchId: true, isActive: true, updatedAt: true },
    });
    res.json(updated);
  } catch (err) { next(err); }
});

// ─── DELETE /api/users/:id (soft delete) ─────────────────────────────────────
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.id === req.user!.id) {
      return res.status(400).json({ error: 'Kendi hesabınızı silemezsiniz' });
    }
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    await prisma.user.update({ where: { id: req.params.id }, data: { isActive: false } });
    res.json({ ok: true });
  } catch (err) { next(err); }
});

export default router;
