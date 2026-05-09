import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes    from './routes/auth';
import productRoutes from './routes/products';
import stockRoutes   from './routes/stock';
import alertRoutes     from './routes/alerts';
import warehouseRoutes from './routes/warehouses';
import supplierRoutes  from './routes/suppliers';
import excelRoutes     from './routes/excel';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use('/api/auth',     authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/stock',    stockRoutes);
app.use('/api/alerts',     alertRoutes);
app.use('/api/warehouses', warehouseRoutes);
app.use('/api/suppliers',  supplierRoutes);
app.use('/api/excel',      excelRoutes);

// Kayıt dışı route
app.use((_req, res) => res.status(404).json({ error: 'Endpoint bulunamadı' }));

app.use(errorHandler);

const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, () => {
  console.log(`Backend http://localhost:${PORT}`);
});
