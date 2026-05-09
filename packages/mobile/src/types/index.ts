export type Role = 'ADMIN' | 'STAFF' | 'VIEWER';
export type ExpiryStatus = 'SAFE' | 'WARNING' | 'CRITICAL' | 'EXPIRED';
export type MovementType = 'IN' | 'OUT' | 'ADJUSTMENT' | 'WASTE' | 'TRANSFER';

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
  category: { id: string; name: string } | null;
  barcodes: { id: string; barcode: string; isPrimary: boolean }[];
}

export interface StockLot {
  id: string;
  productId: string;
  warehouseId: string;
  expiryDate: string;
  quantity: number;
  status: ExpiryStatus;
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
