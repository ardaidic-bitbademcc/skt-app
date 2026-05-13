import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as XLSX from 'xlsx';
import api from '../lib/api';
import { PageHeader } from '../components/PageHeader';
import { Table, Column } from '../components/Table';
import { Modal } from '../components/Modal';
import { StatusBadge } from '../components/StatusBadge';
import { formatDate, daysLeft, apiError } from '../lib/utils';
import { getUser } from '../lib/auth';
import type { StockLot, ExpiryStatus } from '../lib/types';

const STATUS_OPTIONS: { value: ExpiryStatus | 'ALL'; label: string }[] = [
  { value: 'ALL', label: 'Tümü' },
  { value: 'EXPIRED', label: 'Süresi Dolmuş' },
  { value: 'CRITICAL', label: 'Kritik' },
  { value: 'WARNING', label: 'Uyarı' },
  { value: 'SAFE', label: 'Güvenli' },
];

export default function SktReport() {
  const qc = useQueryClient();
  const user = getUser();
  const isAdmin = user?.role === 'ADMIN';

  const [status, setStatus] = useState<ExpiryStatus | 'ALL'>('ALL');
  const [page, setPage] = useState(1);

  // SKT düzenleme modal state
  const [editLot, setEditLot] = useState<(StockLot & { id: string }) | null>(null);
  const [editDate, setEditDate] = useState('');
  const [editErr,  setEditErr]  = useState('');

  const expiryMutation = useMutation({
    mutationFn: ({ id, expiryDate }: { id: string; expiryDate: string }) =>
      api.patch(`/stock/lots/${id}/expiry`, { expiryDate }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['alerts'] });
      qc.invalidateQueries({ queryKey: ['alerts-summary'] });
      setEditLot(null);
    },
    onError: (err) => setEditErr(apiError(err)),
  });

  const { data, isLoading } = useQuery({
    queryKey: ['alerts', status, page],
    queryFn: () =>
      api
        .get('/alerts', {
          params: {
            ...(status !== 'ALL' ? { status } : {}),
            page,
            limit: 50,
          },
        })
        .then((r) => r.data),
  });

  const { data: summary } = useQuery({
    queryKey: ['alerts-summary'],
    queryFn: () => api.get('/alerts/summary').then((r) => r.data),
  });

  function exportExcel() {
    if (!data?.data?.length) return;
    const rows = data.data.map((lot: StockLot) => ({
      'Ürün': lot.product?.name ?? '-',
      'Depo': lot.warehouse?.name ?? '-',
      'Miktar': lot.quantity,
      'Birim': lot.product?.unit ?? '-',
      'SKT': lot.expiryDate ? formatDate(lot.expiryDate) : '-',
      'Kalan Gün': lot.expiryDate ? daysLeft(lot.expiryDate) : '-',
      'Durum': lot.status ?? '-',
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SKT Raporu');
    XLSX.writeFile(wb, `skt_raporu_${new Date().toISOString().split('T')[0]}.xlsx`);
  }

  const columns: Column<StockLot & { id: string }>[] = [
    {
      key: 'product',
      header: 'Ürün',
      render: (r) => (
        <div>
          <p className="font-medium text-gray-900">{r.product?.name ?? '-'}</p>
        </div>
      ),
    },
    { key: 'warehouse', header: 'Depo', render: (r) => r.warehouse?.name ?? '-' },
    {
      key: 'quantity',
      header: 'Miktar',
      render: (r) => `${r.quantity} ${r.product?.unit ?? ''}`,
    },
    {
      key: 'expiryDate',
      header: 'SKT',
      render: (r) => (
        <div className="flex items-center gap-2">
          <span>{r.expiryDate ? formatDate(r.expiryDate) : '-'}</span>
          {isAdmin && r.expiryDate && (
            <button
              title="SKT'yi düzenle"
              onClick={() => {
                setEditLot(r);
                setEditDate(r.expiryDate!.split('T')[0]);
                setEditErr('');
              }}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              ✎
            </button>
          )}
        </div>
      ),
    },
    {
      key: 'daysLeft',
      header: 'Kalan Gün',
      render: (r) => {
        if (!r.expiryDate) return '-';
        const d = daysLeft(r.expiryDate);
        return (
          <span className={d <= 0 ? 'text-red-600 font-semibold' : d <= 7 ? 'text-orange-600 font-semibold' : 'text-gray-700'}>
            {d <= 0 ? 'Süresi doldu' : `${d} gün`}
          </span>
        );
      },
    },
    {
      key: 'status',
      header: 'Durum',
      render: (r) => r.status ? <StatusBadge status={r.status} /> : null,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title="SKT Raporu"
        subtitle="Son kullanma tarihi takibi"
        action={
          <button
            onClick={exportExcel}
            disabled={!data?.data?.length}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-40"
          >
            Excel İndir
          </button>
        }
      />

      <div className="p-6 space-y-5 flex-1 flex flex-col">
        {/* Summary Cards */}
        {summary && (
          <div className="grid grid-cols-4 gap-4">
            <SummaryCard label="Süresi Dolmuş" value={summary.expired} color="text-red-600" />
            <SummaryCard label="Kritik (≤7 gün)" value={summary.critical} color="text-orange-500" />
            <SummaryCard label="Uyarı (≤30 gün)" value={summary.warning} color="text-yellow-600" />
            <SummaryCard label="Güvenli" value={summary.total - summary.warning - summary.critical - summary.expired} color="text-green-600" />
          </div>
        )}

        {/* Filter */}
        <div className="flex gap-2">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setStatus(opt.value); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                status === opt.value
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 flex-1 overflow-hidden">
          <Table columns={columns} data={data?.data ?? []} loading={isLoading} />
        </div>

        {/* Pagination */}
        {data && Math.ceil(data.total / (data.limit ?? 50)) > 1 && (
          <div className="flex gap-2 justify-end">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg disabled:opacity-40 hover:bg-gray-50"
            >
              Önceki
            </button>
            <span className="px-3 py-1.5 text-sm text-gray-600">
              {page} / {Math.ceil(data.total / (data.limit ?? 50))}
            </span>
            <button
              disabled={page === Math.ceil(data.total / (data.limit ?? 50))}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg disabled:opacity-40 hover:bg-gray-50"
            >
              Sonraki
            </button>
          </div>
        )}
      </div>

      {/* SKT Düzenleme Modal */}
      <Modal open={!!editLot} onClose={() => setEditLot(null)} title="SKT Güncelle">
        {editLot && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditErr('');
              expiryMutation.mutate({ id: editLot.id, expiryDate: editDate });
            }}
            className="space-y-4"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{editLot.product?.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{editLot.warehouse?.name} · Mevcut: {editLot.expiryDate ? formatDate(editLot.expiryDate) : '-'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Yeni Son Kullanma Tarihi</label>
              <input
                required
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {editErr && <p className="text-sm text-red-600">{editErr}</p>}
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setEditLot(null)} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                İptal
              </button>
              <button type="submit" disabled={expiryMutation.isPending} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
                {expiryMutation.isPending ? 'Kaydediliyor...' : 'Kaydet'}
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

function SummaryCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value ?? 0}</p>
    </div>
  );
}
