import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { authenticate } from '../middleware/auth';

const router = Router();

// ─── POST /api/notifications/register-token ───────────────────────────────────
// Authenticated — mobil uygulama login sonrasında Expo push token'ını kaydeder
router.post('/register-token', authenticate, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token, deviceId } = z.object({
      token:    z.string().min(1),
      deviceId: z.string().optional(),
    }).parse(req.body);

    await prisma.pushToken.upsert({
      where:  { token },
      update: { userId: req.user!.id, deviceId },
      create: { userId: req.user!.id, token, deviceId },
    });

    res.json({ ok: true });
  } catch (err) { next(err); }
});

// ─── POST /api/notifications/cron ─────────────────────────────────────────────
// cron-job.org tarafından her gün 09:00'da tetiklenir.
// x-cron-secret header ile korunur.
// SKT'si ≤10 gün olan, miktarı > 0 olan lotlar için şube kullanıcılarına push gönderir.
router.post('/cron', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const secret = process.env.CRON_SECRET;
    if (!secret || req.headers['x-cron-secret'] !== secret) {
      return res.status(401).json({ error: 'Yetkisiz' });
    }

    const now          = new Date();
    const tenDaysLater = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);

    // SKT ≤ 10 gün, miktar > 0, aktif ürün
    const expiringLots = await prisma.stockLot.findMany({
      where: {
        expiryDate: { gte: now, lte: tenDaysLater },
        quantity:   { gt: 0 },
        product:    { isActive: true },
        status:     { in: ['WARNING', 'CRITICAL'] },
      },
      select: {
        id: true, branchId: true, quantity: true, status: true,
        product: { select: { name: true } },
      },
    });

    if (expiringLots.length === 0) return res.json({ ok: true, sent: 0 });

    // Şubeye göre grupla
    const byBranch = new Map<string, typeof expiringLots>();
    for (const lot of expiringLots) {
      if (!byBranch.has(lot.branchId)) byBranch.set(lot.branchId, []);
      byBranch.get(lot.branchId)!.push(lot);
    }

    let totalSent = 0;

    for (const [branchId, lots] of byBranch.entries()) {
      // Şubedeki tüm aktif kullanıcıların push token'larını çek
      const tokens = await prisma.pushToken.findMany({
        where:  { user: { branchId, isActive: true } },
        select: { token: true },
      });
      if (tokens.length === 0) continue;

      const criticalCount = lots.filter((l) => l.status === 'CRITICAL').length;
      const names = lots.slice(0, 2).map((l) => l.product.name).join(', ');
      const extra = lots.length > 2 ? ` ve ${lots.length - 2} ürün daha` : '';

      const title = criticalCount > 0
        ? `⛔ ${criticalCount} kritik ürün dikkat gerektiyor!`
        : `⚠️ ${lots.length} ürün yakında sona eriyor`;

      const messages = tokens.map((t) => ({
        to:    t.token,
        title,
        body:  names + extra,
        data:  { branchId, type: 'EXPIRY_ALERT' },
        sound: 'default',
      }));

      // Expo max 100 mesaj/istek
      for (let i = 0; i < messages.length; i += 100) {
        const chunk = messages.slice(i, i + 100);
        await fetch('https://exp.host/api/v2/push/send', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body:    JSON.stringify(chunk),
        });
        totalSent += chunk.length;
      }
    }

    res.json({ ok: true, sent: totalSent, branchCount: byBranch.size });
  } catch (err) { next(err); }
});

export default router;
