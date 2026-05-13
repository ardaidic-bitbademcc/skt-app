import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import { PageHeader } from '../components/PageHeader';
import { Modal } from '../components/Modal';
import { Spinner } from '../components/Spinner';
import { apiError } from '../lib/utils';
import { getUser } from '../lib/auth';
import type { InventoryCount, InventoryCountItem, Branch } from '../lib/types';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function periodLabel(period: string) {
  const [y, m] = period.split('-');
  const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
  return `${months[parseInt(m, 10) - 1]} ${y}`;
}

function currentPeriod() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

function DiffBadge({ diff }: { diff: number | null }) {
  if (diff === null) return <span className="text-gray-400 text-xs">—</span>;
  if (diff === 0)    return <span className="text-gray-500 text-xs">±0</span>;
  const cls = diff < 0 ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold';
  return <span className={`text-xs ${cls}`}>{diff > 0 ? `+${diff}` : diff}</span>;
}

export default function InventoryCount() {
  const qc   = useQueryClient();
  const user = getUser();
  const isAdmin = user?.role === 'ADMIN';

  const [view, setView] = useState<'list' | 'detail'>('list');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [newModal, setNewModal] = useState(false);
  const [newForm, setNewForm] = useState({ branchId: user?.branch?.id ?? '', period: currentPeriod(), notes: '' });
  const [formErr, setFormErr] = useState('');

  // ─── Queries ────────────────────────────────────────────────────────────────

  const { data: counts = [], isLoading: countsLoading } = useQuery<InventoryCount[]>({
    queryKey: ['inventory-counts'],
    queryFn: () => api.get('/stock/counts').then((r) => r.data),
    enabled: view === 'list',
  });

  const { data: branches = [] } = useQuery<Branch[]>({
    queryKey: ['branches'],
    queryFn: () => api.get('/branches').then((r) => r.data),
    enabled: isAdmin,
  });

  const { data: detail, isLoading: detailLoading } = useQuery<InventoryCount>({
    queryKey: ['inventory-count', selectedId],
    queryFn: () => api.get(`/stock/counts/${selectedId}`).then((r) => r.data),
    enabled: view === 'detail' && !!selectedId,
    staleTime: 0,
  });

  // ─── Mutations ───────────────────────────────────────────────────────────────

  const startMutation = useMutation({
    mutationFn: (body: typeof newForm) => api.post('/stock/counts', body),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ['inventory-counts'] });
      setNewModal(false);
      setFormErr('');
      setSelectedId(res.data.id);
      setView('detail');
    },
    onError: (err) => setFormErr(apiError(err)),
  });

  const patchItem = useMutation({
    mutationFn: ({ countId, itemId, countedQuantity, notes }: { countId: string; itemId: string; countedQuantity: number; notes?: string }) =>
      api.patch(`/stock/counts/${countId}/items/${itemId}`, { countedQuantity, notes }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['inventory-count', selectedId] });
    },
  });

  const confirmMutation = useMutation({
    mutationFn: (id: string) => api.post(`/stock/counts/${id}/confirm`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['inventory-counts'] });
      qc.invalidateQueries({ queryKey: ['inventory-count', selectedId] });
      qc.invalidateQueries({ queryKey: ['stock'] });
    },
    onError: (err) => alert(apiError(err)),
  });

  // ─── Item input state ───────────────────────────────────────────────────────
  const [inputs, setInputs] = useState<Record<string, string>>({});

  function handleInput(itemId: string, value: string) {
    setInputs((prev) => ({ ...prev, [itemId]: value }));
  }

  function handleBlur(item: InventoryCountItem) {
    const raw = inputs[item.id];
    if (raw === undefined || raw === '') return;
    const qty = parseInt(raw, 10);
    if (isNaN(qty) || qty < 0) return;
    if (!selectedId) return;
    patchItem.mutate({ countId: selectedId, itemId: item.id, countedQuantity: qty });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, item: InventoryCountItem) {
    if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
  }

  // ─── Render: List ───────────────────────────────────────────────────────────

  if (view === 'list') {
    return (
      <div className="flex flex-col h-full">
        <PageHeader
          title="Aylık Sayım"
          subtitle="Fiili stok sayımı ve fark düzeltme"
          action={
            <button
              onClick={() => { setFormErr(''); setNewForm({ branchId: user?.branch?.id ?? '', period: currentPeriod(), notes: '' }); setNewModal(true); }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              + Yeni Sayım Başlat
            </button>
          }
        />

        <div className="p-6 flex-1">
          {countsLoading ? (
            <div className="flex justify-center pt-20"><Spinner /></div>
          ) : counts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-3">📋</p>
              <p className="font-medium">Henüz sayım yapılmamış</p>
              <p className="text-sm mt-1">Yeni Sayım Başlat butonuna tıklayın</p>
            </div>
          ) : (
            <div className="space-y-3 max-w-3xl">
              {counts.map((c) => (
                <div
                  key={c.id}
                  onClick={() => { setSelectedId(c.id); setInputs({}); setView('detail'); }}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-base font-semibold text-gray-900">{periodLabel(c.period)}</span>
                      <StatusChip status={c.status} />
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {c.branch?.name ?? '-'} · {(c as any)._count?.items ?? '?'} kalem · {c.creator?.name ?? '-'} tarafından başlatıldı
                    </p>
                    {c.confirmedAt && (
                      <p className="text-xs text-gray-400 mt-0.5">
                        Onaylandı: {new Date(c.confirmedAt).toLocaleDateString('tr-TR')}
                      </p>
                    )}
                  </div>
                  <span className="text-gray-400 text-lg">›</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* New Count Modal */}
        <Modal open={newModal} onClose={() => setNewModal(false)} title="Yeni Sayım Başlat">
          <form
            onSubmit={(e) => { e.preventDefault(); setFormErr(''); startMutation.mutate(newForm); }}
            className="space-y-4"
          >
            {isAdmin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Şube *</label>
                <select
                  required
                  value={newForm.branchId}
                  onChange={(e) => setNewForm({ ...newForm, branchId: e.target.value })}
                  className={INPUT}
                >
                  <option value="">Şube seç...</option>
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dönem (YYYY-MM) *</label>
              <input
                required
                type="month"
                value={newForm.period}
                onChange={(e) => setNewForm({ ...newForm, period: e.target.value })}
                className={INPUT}
              />
              <p className="text-xs text-gray-400 mt-1">Örn: {currentPeriod()}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Not (opsiyonel)</label>
              <input
                value={newForm.notes}
                onChange={(e) => setNewForm({ ...newForm, notes: e.target.value })}
                className={INPUT}
                placeholder="Açıklama..."
              />
            </div>
            {formErr && <p className="text-sm text-red-600">{formErr}</p>}
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setNewModal(false)} className={BTN_SEC}>İptal</button>
              <button type="submit" disabled={startMutation.isPending} className={BTN_PRI}>
                {startMutation.isPending ? 'Başlatılıyor...' : 'Sayımı Başlat'}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }

  // ─── Render: Detail ─────────────────────────────────────────────────────────

  const isDraft = detail?.status === 'DRAFT';
  const allCounted = detail?.items.every((i) => i.countedQuantity !== null) ?? false;

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={detail ? `${periodLabel(detail.period)} Sayımı` : 'Sayım Detayı'}
        subtitle={detail ? `${detail.branch?.name ?? ''} · ${detail.items.length} kalem` : undefined}
        action={
          <div className="flex gap-2">
            {isAdmin && isDraft && (
              <button
                onClick={() => {
                  if (confirm('Sayımı onaylamak istediğinize emin misiniz? Stok hareketleri yazılacak.'))
                    confirmMutation.mutate(selectedId!);
                }}
                disabled={confirmMutation.isPending || !allCounted}
                title={!allCounted ? 'Tüm kalemleri saymadan onaylayamazsınız' : undefined}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
              >
                {confirmMutation.isPending ? 'Onaylanıyor...' : '✓ Onayla'}
              </button>
            )}
            <button
              onClick={() => { setView('list'); setSelectedId(null); setInputs({}); }}
              className={BTN_SEC}
            >
              ← Geri
            </button>
          </div>
        }
      />

      <div className="p-6 flex-1 overflow-auto">
        {detailLoading ? (
          <div className="flex justify-center pt-20"><Spinner /></div>
        ) : !detail ? (
          <p className="text-center text-gray-400 pt-20">Sayım bulunamadı.</p>
        ) : (
          <>
            {/* Status banner */}
            {detail.status === 'CONFIRMED' && (
              <div className="mb-4 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm text-green-800">
                ✓ Bu sayım {new Date(detail.confirmedAt!).toLocaleDateString('tr-TR')} tarihinde <strong>{detail.confirmer?.name}</strong> tarafından onaylandı.
              </div>
            )}
            {isDraft && !allCounted && (
              <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
                ⚠️ Onaylamak için tüm kalemlerin fiili miktarını girmeniz gerekiyor.
              </div>
            )}

            {/* Items table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Ürün</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Depo</th>
                    <th className="text-right px-4 py-3 font-medium text-gray-600">Sistem</th>
                    <th className="text-right px-4 py-3 font-medium text-gray-600">Fiili</th>
                    <th className="text-right px-4 py-3 font-medium text-gray-600">Fark</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Not</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {detail.items.map((item) => {
                    const inputVal = inputs[item.id] ?? (item.countedQuantity !== null ? String(item.countedQuantity) : '');
                    const isSaving = patchItem.isPending;
                    return (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{item.product.name}</p>
                          <p className="text-xs text-gray-400">
                            {item.product.unit}
                            {item.product.productType === 'CONSUMABLE' && (
                              <span className="ml-1 text-orange-500">· sarf</span>
                            )}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{item.warehouse.name}</td>
                        <td className="px-4 py-3 text-right text-gray-700 font-mono">{item.systemQuantity}</td>
                        <td className="px-4 py-3 text-right">
                          {isDraft ? (
                            <input
                              type="number"
                              min="0"
                              value={inputVal}
                              onChange={(e) => handleInput(item.id, e.target.value)}
                              onBlur={() => handleBlur(item)}
                              onKeyDown={(e) => handleKeyDown(e, item)}
                              disabled={isSaving}
                              placeholder="—"
                              className="w-20 text-right border border-gray-300 rounded px-2 py-1 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                            />
                          ) : (
                            <span className="font-mono text-gray-700">{item.countedQuantity ?? '—'}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <DiffBadge
                            diff={
                              isDraft && inputs[item.id] !== undefined
                                ? parseInt(inputs[item.id], 10) - item.systemQuantity || null
                                : item.difference
                            }
                          />
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{item.notes ?? '—'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatusChip({ status }: { status: 'DRAFT' | 'CONFIRMED' }) {
  return status === 'CONFIRMED' ? (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Onaylandı</span>
  ) : (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Taslak</span>
  );
}

const INPUT = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
const BTN_PRI = 'bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50';
const BTN_SEC = 'border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50';
