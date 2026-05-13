import { Router } from 'express';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = Router();
router.use(authenticate, requireAdmin);
router.post('/import', (_req, res) => {
  res.status(501).json({ error: 'Excel import henüz uyarlanmamış' });
});

export default router;
