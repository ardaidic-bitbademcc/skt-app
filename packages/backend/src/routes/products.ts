import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = Router();
router.use(authenticate);

// ─── Schemas ─────────────────────────────────────────────────────────────────

const CreateProductSchema = z.object({
  name:        z.string().min(1, 'Ürün adı boş olamaz').max(200),
  description: z.string().max(500).optional(),
  categoryId:  z.string().min(1).optional(),
  unit:        z.enum(['adet', 'kg', 'lt', 'kutu', 'paket', 'koli']).default('adet'),
  minStock:    z.number().int().min(0).default(0),
  productType: z.enum(['PERISHABLE', 'CONSUMABLE']).default('PERISHABLE'),
  barcode:     z.string().min(1).max(100).optional(),
});

const UpdateProductSchema = CreateProductSchema.partial().omit({ barcode: true });

const ListQuerySchema = z.object({
  search:     z.string().optional(),
  categoryId: z.string().optional(),
  page:       z.coerce.number().int().min(1).default(1),
  limit:      z.coerce.number().int().min(1).max(100).default(20),
});

// ─── Shared select ───────────────────────────────────────────────────────────

const productSelect = {
  id: true, name: true, description: true, unit: true,
  minStock: true, productType: true, isActive: true, createdAt: true,
  category: { select: { id: true, name: true } },
  barcodes: { select: { id: true, barcode: true, isPrimary: true } },
} as const;

// ─── GET /api/products ───────────────────────────────────────────────────────
/*
  Query: ?search=süt&categoryId=clx...&page=1&limit=20

  Response 200:
    {
      "data": [
        { "id": "...", "name": "Süt 1L", "unit": "adet", "totalStock": 50,
          "category": { "id": "...", "name": "İçecek" },
          "barcodes": [{ "barcode": "8690000000001", "isPrimary": true }] }
      ],
      "total": 1, "page": 1, "limit": 20
    }
*/
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = ListQuerySchema.parse(req.query);
    const skip  = (query.page - 1) * query.limit;

    const where: Record<string, any> = { isActive: true };
    if (query.search)     where.name       = { contains: query.search };
    if (query.categoryId) where.categoryId = query.categoryId;

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: query.limit,
        select: {
          ...productSelect,
          stockLots: { where: { quantity: { gt: 0 } }, select: { quantity: true } },
        },
        orderBy: { name: 'asc' },
      }),
      prisma.product.count({ where }),
    ]);

    const data = products.map(({ stockLots, ...p }) => ({
      ...p,
      totalStock: stockLots.reduce((sum, l) => sum + l.quantity, 0),
    }));

    res.json({ data, total, page: query.page, limit: query.limit });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/products/barcode/:code ─────────────────────────────────────────
/*
  Mobil barkod okutma akışında kullanılır.
  Bu route /api/products/:id'den ÖNCE tanımlanmalı — aksi hâlde "barcode"
  kelimesi :id parametresi olarak yakalanır.

  Response 200: ürün bulundu → form otomatik doldurulur
  Response 404: bilinmeyen barkod → "Yeni ürün oluştur" akışı başlar

  Örnek:
    GET /api/products/barcode/8690000000001
    200 → { "id": "...", "name": "Süt 1L", "unit": "adet", "barcodes": [...] }

    GET /api/products/barcode/9999999999999
    404 → { "error": "Bu barkoda ait ürün bulunamadı" }
*/
router.get('/barcode/:code', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pb = await prisma.productBarcode.findUnique({
      where: { barcode: req.params.code },
      select: { product: { select: productSelect } },
    });

    if (!pb || !pb.product.isActive) {
      return res.status(404).json({ error: 'Bu barkoda ait ürün bulunamadı' });
    }

    res.json(pb.product);
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/products/:id ────────────────────────────────────────────────────
/*
  Response 200:
    { ...product, "stockLots": [ { expiryDate, quantity, status, warehouse, supplier } ] }
  Response 404: { "error": "Ürün bulunamadı" }
*/
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id, isActive: true },
      select: {
        ...productSelect,
        stockLots: {
          select: {
            id: true, expiryDate: true, quantity: true, status: true,
            lotNumber: true, notes: true,
            warehouse: { select: { id: true, name: true } },
            supplier:  { select: { id: true, name: true } },
          },
          orderBy: { expiryDate: 'asc' }, // FEFO
        },
      },
    });

    if (!product) return res.status(404).json({ error: 'Ürün bulunamadı' });

    res.json(product);
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/products ───────────────────────────────────────────────────────
/*
  [ADMIN]
  Request: { "name": "Süt 1L", "unit": "adet", "barcode": "8690000000001" }

  Response 201: oluşturulan ürün
  Response 409: { "error": "Bu barcode zaten kayıtlı" }
  Response 422: { "error": "Validation hatası", "fields": [...] }
*/
router.post('/', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { barcode, ...data } = CreateProductSchema.parse(req.body);

    const product = await prisma.product.create({
      data: {
        ...data,
        barcodes: barcode ? { create: { barcode, isPrimary: true } } : undefined,
      },
      select: productSelect,
    });

    await prisma.auditLog.create({
      data: { userId: req.user!.id, action: 'CREATE', entity: 'Product', entityId: product.id },
    });

    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

// ─── PUT /api/products/:id ────────────────────────────────────────────────────
/*
  [ADMIN]
  Request (tüm alanlar opsiyonel): { "name": "Süt 2L", "minStock": 5 }

  Response 200: güncellenmiş ürün
  Response 404: { "error": "Kayıt bulunamadı" }
*/
router.put('/:id', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = UpdateProductSchema.parse(req.body);

    const product = await prisma.product.update({
      where: { id: req.params.id },
      data,
      select: productSelect,
    });

    prisma.auditLog.create({
      data: {
        userId: req.user!.id, action: 'UPDATE', entity: 'Product',
        entityId: product.id, details: JSON.stringify(data),
      },
    }).catch(() => {/* auditLog hatası ana işlemi engellemez */});

    res.json(product);
  } catch (err) {
    next(err);
  }
});

// ─── DELETE /api/products/:id ─────────────────────────────────────────────────
/*
  [ADMIN] Soft-delete — isActive: false yapılır, barkodlar korunur.

  Response 200: { "ok": true }
*/
router.delete('/:id', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.product.update({ where: { id: req.params.id }, data: { isActive: false } });

    prisma.auditLog.create({
      data: { userId: req.user!.id, action: 'DELETE', entity: 'Product', entityId: req.params.id },
    }).catch(() => {/* auditLog hatası ana işlemi engellemez */});

    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

// ─── POST /api/products/:id/barcodes ─────────────────────────────────────────
/*
  [ADMIN] Mevcut ürüne ek barkod ekle.

  Request: { "barcode": "8690000000099", "isPrimary": false }

  Response 201: { "id": "...", "barcode": "...", "isPrimary": false, "productId": "..." }
  Response 409: { "error": "Bu barcode zaten kayıtlı" }
*/
router.post('/:id/barcodes', requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = z.object({
      barcode:   z.string().min(1).max(50),
      isPrimary: z.boolean().default(false),
    });
    const data   = schema.parse(req.body);
    const record = await prisma.productBarcode.create({
      data: { productId: req.params.id, ...data },
    });

    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
});

export default router;
