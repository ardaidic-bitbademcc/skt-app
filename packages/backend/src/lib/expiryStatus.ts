export type ExpiryStatus = 'SAFE' | 'WARNING' | 'CRITICAL' | 'EXPIRED';
export type Role         = 'ADMIN' | 'STAFF' | 'VIEWER';
export type MovementType = 'IN' | 'OUT' | 'ADJUSTMENT' | 'WASTE' | 'TRANSFER';

export function calcExpiryStatus(expiryDate: Date): ExpiryStatus {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const exp = new Date(expiryDate);
  exp.setHours(0, 0, 0, 0);

  const diffDays = Math.floor((exp.getTime() - today.getTime()) / 86_400_000);

  if (diffDays < 0)   return 'EXPIRED';
  if (diffDays <= 7)  return 'CRITICAL';
  if (diffDays <= 30) return 'WARNING';
  return 'SAFE';
}
