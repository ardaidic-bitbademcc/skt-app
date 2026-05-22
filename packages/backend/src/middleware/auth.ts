import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../lib/jwt';
import prisma from '../lib/prisma';

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header eksik' });
  }
  try {
    const payload = verifyToken(header.slice(7));
    // Her istekte DB'den taze yükle — token'daki role/branchId stale olabilir
    const user = await prisma.user.findUnique({
      where: { id: payload.id, isActive: true },
      select: { id: true, email: true, role: true, branchId: true },
    });
    if (!user) return res.status(401).json({ error: 'Kullanıcı bulunamadı veya pasif' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: 'Token geçersiz veya süresi dolmuş' });
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.user?.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Bu işlem için admin yetkisi gerekli' });
  }
  next();
}
