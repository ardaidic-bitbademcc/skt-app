import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    return res.status(422).json({
      error: 'Validation hatası',
      fields: err.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  // Prisma unique constraint
  if (err.code === 'P2002') {
    const field = err.meta?.target?.[0] ?? 'alan';
    return res.status(409).json({ error: `Bu ${field} zaten kayıtlı` });
  }

  // Prisma record not found
  if (err.code === 'P2025') {
    return res.status(404).json({ error: 'Kayıt bulunamadı' });
  }

  const status = err.status ?? 500;
  const message = status < 500 ? err.message : 'Sunucu hatası';
  res.status(status).json({ error: message });
}
