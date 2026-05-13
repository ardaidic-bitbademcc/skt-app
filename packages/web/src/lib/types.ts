import { ExpiryStatus } from './utils';
export type { ExpiryStatus };

export interface Category { id: string; name: string }
export interface Supplier  { id: string; name: string }
export interface Branch    { id: string; name: string }
export interface Warehouse { id: string; name: string; branchId: string; branch: Branch }

export interface ProductBarcode { id: string; barcode: string; isPrimary: boolean }

export interface Product {
  id: string;
  name: string;
  description: string | null;
  unit: string;
  minStock: number;
  isActive: boolean;
  createdAt: string;
  categoryId: string | null;
  category: Category | null;
  barcodes: ProductBarcode[];
  totalStock?: number;
}

export interface StockLot {
  id: string;
  expiryDate: string;
  quantity: number;
  status: ExpiryStatus;
  lotNumber: string | null;
  product: Product & { barcodes: ProductBarcode[] };
  warehouse: Warehouse;
  supplier: Supplier | null;
}

export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
