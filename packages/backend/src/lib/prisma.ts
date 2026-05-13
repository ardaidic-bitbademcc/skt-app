import { PrismaClient } from '../../generated/client';

// PostgreSQL — kalıcı veritabanı, serverless-safe.
// DATABASE_URL environment variable'dan okunur.
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

export default prisma;
