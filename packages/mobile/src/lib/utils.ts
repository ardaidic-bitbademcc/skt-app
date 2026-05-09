import { ExpiryStatus } from '../types';

export function formatDate(iso: string | Date): string {
  const d = new Date(iso);
  return d.toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function daysLeft(iso: string | Date): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exp = new Date(iso);
  exp.setHours(0, 0, 0, 0);
  return Math.floor((exp.getTime() - today.getTime()) / 86_400_000);
}

export function daysLeftLabel(iso: string | Date): string {
  const d = daysLeft(iso);
  if (d < 0)  return `${Math.abs(d)} gün geçti`;
  if (d === 0) return 'Bugün sona eriyor';
  return `${d} gün kaldı`;
}

// Renk paletleri — status'e göre
export const STATUS_COLOR: Record<ExpiryStatus, string> = {
  SAFE:     '#16a34a',
  WARNING:  '#d97706',
  CRITICAL: '#ea580c',
  EXPIRED:  '#dc2626',
};

export const STATUS_BG: Record<ExpiryStatus, string> = {
  SAFE:     '#f0fdf4',
  WARNING:  '#fffbeb',
  CRITICAL: '#fff7ed',
  EXPIRED:  '#fef2f2',
};

export const STATUS_LABEL: Record<ExpiryStatus, string> = {
  SAFE:     'Güvenli',
  WARNING:  'Uyarı',
  CRITICAL: 'Kritik',
  EXPIRED:  'Süresi Geçmiş',
};
