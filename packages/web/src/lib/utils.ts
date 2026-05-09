export type ExpiryStatus = 'SAFE' | 'WARNING' | 'CRITICAL' | 'EXPIRED';

export function formatDate(iso: string | Date) {
  return new Date(iso).toLocaleDateString('tr-TR', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
}

export function daysLeft(iso: string | Date) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const exp   = new Date(iso); exp.setHours(0, 0, 0, 0);
  return Math.floor((exp.getTime() - today.getTime()) / 86_400_000);
}

export const STATUS_LABEL: Record<ExpiryStatus, string> = {
  SAFE:     'Güvenli',
  WARNING:  'Uyarı',
  CRITICAL: 'Kritik',
  EXPIRED:  'Süresi Geçmiş',
};

export const STATUS_CLASS: Record<ExpiryStatus, string> = {
  SAFE:     'bg-green-100 text-green-800',
  WARNING:  'bg-yellow-100 text-yellow-800',
  CRITICAL: 'bg-orange-100 text-orange-800',
  EXPIRED:  'bg-red-100 text-red-800',
};

export const STATUS_DOT: Record<ExpiryStatus, string> = {
  SAFE:     'bg-green-500',
  WARNING:  'bg-yellow-500',
  CRITICAL: 'bg-orange-500',
  EXPIRED:  'bg-red-500',
};

export function apiError(err: any): string {
  return (
    err?.response?.data?.error ??
    err?.response?.data?.fields?.map((f: any) => f.message).join(', ') ??
    'Bir hata oluştu'
  );
}
