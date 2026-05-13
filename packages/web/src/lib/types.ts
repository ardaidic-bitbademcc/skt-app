import { ExpiryStatus } from './utils';
export type { ExpiryStatus };

export type ProductType = 'PERISHABLE' | 'CONSUMABLE';

export interface Category { id: string; name: string }
export interface Supplier  { id: string; name: string }
export interface Branch    { id: string; name: string; address?: string; phone?: string }
export interface Warehouse { id: string; name: string; branchId: string; branch: Branch }

export interface ProductBarcode { id: string; barcode: string; isPrimary: boolean }

export interface Product {
  id: string;
  name: string;
  description: string | null;
  unit: string;
  minStock: number;
  productType: ProductType;
  isActive: boolean;
  createdAt: string;
  categoryId: string | null;
  category: Category | null;
  barcodes: ProductBarcode[];
  totalStock?: number;
}

export interface StockLot {
  id: string;
  expiryDate: string | null;
  quantity: number;
  status: ExpiryStatus | null;
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

export interface InventoryCountItem {
  id: string;
  productId: string;
  product: { id: string; name: string; unit: string; productType: ProductType };
  warehouseId: string;
  warehouse: { id: string; name: string };
  systemQuantity: number;
  countedQuantity: number | null;
  difference: number | null;
  notes: string | null;
}

export interface InventoryCount {
  id: string;
  period: string;
  status: 'DRAFT' | 'CONFIRMED';
  notes: string | null;
  branchId: string;
  branch: { id: string; name: string };
  createdAt: string;
  confirmedAt: string | null;
  creator: { id: string; name: string };
  confirmer: { id: string; name: string } | null;
  items: InventoryCountItem[];
  _count?: { items: number };
}
