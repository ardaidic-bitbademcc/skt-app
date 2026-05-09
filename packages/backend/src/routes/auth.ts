import { Router, Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { signToken } from '../lib/jwt';
import { authenticate } from '../middleware/auth';

const router = Router();

const LoginSchema = z.object({
  email: z.string().email('Geçerli bir e-posta girin'),
  password: z.string().min(1, 'Şifre boş olamaz'),
});

/*
  POST /api/auth/login

  Request:
    { "email": "admin@skt.app", "password": "admin123" }

  Response 200:
    {
      "token": "eyJhbGci...",
      "user": { "id": "...", "email": "admin@skt.app", "name": "Admin",
                "role": "ADMIN", "branch": { "id": "...", "name": "Merkez Şube" } }
    }

  Response 401: { "error": "Şifre hatalı" }
  Response 422: { "error": "Validation hatası", "fields": [...] }
*/
router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = LoginSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { email },
      include: { branch: { select: { id: true, name: true } } },
    });

    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Kullanıcı bulunamadı' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Şifre hatalı' });
    }

    const token = signToken({
      id:       user.id,
      email:    user.email,
      role:     user.role,
      branchId: user.branchId,
    });

    res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role, branch: user.branch },
    });
  } catch (err) {
    next(err);
  }
});

/*
  GET /api/auth/me

  Headers: Authorization: Bearer <token>

  Response 200:
    { "id": "...", "email": "...", "name": "...", "role": "STAFF",
      "branch": { "id": "...", "name": "Merkez Şube" } }

  Response 401: { "error": "Authorization header eksik" }
*/
router.get('/me', authenticate, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true, email: true, name: true, role: true, branchId: true, createdAt: true,
        branch: { select: { id: true, name: true } },
      },
    });

    if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });

    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;
