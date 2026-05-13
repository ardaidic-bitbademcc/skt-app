export type Role = 'ADMIN' | 'STAFF' | 'VIEWER';
export type ExpiryStatus = 'SAFE' | 'WARNING' | 'CRITICAL' | 'EXPIRED';
export type MovementType = 'IN' | 'OUT' | 'ADJUSTMENT' | 'WASTE' | 'TRANSFER';
export type ProductType = 'PERISHABLE' | 'CONSUMABLE';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  branchId: string | null;
  branch: { id: string; name: string } | null;
}

export interface Product {
  id: string;
  name: string;
  unit: string;
  description: string | null;
  productType: ProductType;
  category: { id: string; name: string } | null;
  barcodes: { id: string; barcode: string; isPrimary: boolean }[];
}

export interface StockLot {
  id: string;
  productId: string;
  warehouseId: string;
  expiryDate: string | null;
  quantity: number;
  status: ExpiryStatus | null;
  lotNumber: string | null;
  product: Product & { totalStock?: number };
  warehouse: { id: string; name: string };
  supplier: { id: string; name: string } | null;
}

export interface Warehouse {
  id: string;
  name: string;
  branchId: string;
  branch: { id: string; name: string };
}

export interface Supplier {
  id: string;
  name: string;
}

export interface AlertSummary {
  total: number;
  warning: number;
  critical: number;
  expired: number;
}
