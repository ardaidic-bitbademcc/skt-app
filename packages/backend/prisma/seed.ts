import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Şube & depo
  const branch = await prisma.branch.upsert({
    where: { id: 'branch-main' },
    update: {},
    create: { id: 'branch-main', name: 'Merkez Şube', address: 'İstanbul' },
  });

  const warehouse = await prisma.warehouse.upsert({
    where: { id: 'warehouse-main' },
    update: {},
    create: { id: 'warehouse-main', name: 'Ana Depo', branchId: branch.id },
  });

  // Kullanıcılar
  const adminPw = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@skt.app' },
    update: {},
    create: { email: 'admin@skt.app', password: adminPw, name: 'Admin', role: 'ADMIN' as string, branchId: branch.id },
  });

  const staffPw = await bcrypt.hash('staff123', 10);
  await prisma.user.upsert({
    where: { email: 'staff@skt.app' },
    update: {},
    create: { email: 'staff@skt.app', password: staffPw, name: 'Personel', role: 'STAFF', branchId: branch.id },
  });

  // Kategoriler
  const gida  = await prisma.category.upsert({ where: { name: 'Gıda' },    update: {}, create: { name: 'Gıda' } });
  const icecek = await prisma.category.upsert({ where: { name: 'İçecek' }, update: {}, create: { name: 'İçecek' } });

  // Tedarikçi
  const supplier = await prisma.supplier.upsert({
    where: { id: 'supplier-1' },
    update: {},
    create: { id: 'supplier-1', name: 'ABC Tedarik A.Ş.' },
  });

  // Ürünler: çeşitli SKT durumlarını temsil eder
  const products = [
    { name: 'Süt 1L',       barcode: '8690000000001', categoryId: icecek.id, daysOffset: 10 },
    { name: 'Yoğurt 500g',  barcode: '8690000000002', categoryId: gida.id,   daysOffset: 5 },
    { name: 'Ekmek',        barcode: '8690000000003', categoryId: gida.id,   daysOffset: 2 },
    { name: 'Meyve Suyu 1L',barcode: '8690000000004', categoryId: icecek.id, daysOffset: 25 },
    { name: 'Aspirin 20li', barcode: '8690000000005', categoryId: null,      daysOffset: -3 },
  ];

  for (const def of products) {
    const product = await prisma.product.upsert({
      where: { id: `product-${def.barcode}` },
      update: {},
      create: {
        id: `product-${def.barcode}`,
        name: def.name,
        categoryId: def.categoryId,
        barcodes: { create: { barcode: def.barcode, isPrimary: true } },
      },
    });

    const expiryDate = new Date();
    expiryDate.setUTCHours(0, 0, 0, 0);
    expiryDate.setDate(expiryDate.getDate() + def.daysOffset);

    const d = def.daysOffset;
    const status =
      d < 0    ? 'EXPIRED'  :
      d <= 7   ? 'CRITICAL' :
      d <= 30  ? 'WARNING'  : 'SAFE';

    const lot = await prisma.stockLot.create({
      data: {
        productId:   product.id,
        warehouseId: warehouse.id,
        branchId:    branch.id,
        supplierId:  supplier.id,
        expiryDate,
        quantity:    50,
        status:      status as any,
      },
    });

    await prisma.stockMovement.create({
      data: { stockLotId: lot.id, type: 'IN', quantity: 50, userId: admin.id, notes: 'Seed' },
    });
  }

  console.log('Seed tamamlandı');
  console.log('  admin@skt.app / admin123');
  console.log('  staff@skt.app / staff123');
  console.log(`  Şube: ${branch.id}`);
  console.log(`  Depo: ${warehouse.id}`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
