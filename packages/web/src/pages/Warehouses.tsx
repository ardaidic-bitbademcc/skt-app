import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import { PageHeader } from '../components/PageHeader';
import { Table, Column } from '../components/Table';
import { Modal } from '../components/Modal';
import { apiError } from '../lib/utils';
import { getUser } from '../lib/auth';
import type { Warehouse, Branch } from '../lib/types';

interface WarehouseForm { name: string; address: string; branchId: string; }
interface BranchForm    { name: string; address: string; phone: string; }

const EMPTY_WH: WarehouseForm = { name: '', address: '', branchId: '' };
const EMPTY_BR: BranchForm    = { name: '', address: '', phone: '' };

export default function Warehouses() {
  const qc      = useQueryClient();
  const user    = getUser();
  const isAdmin = user?.role === 'ADMIN';

  const [tab, setTab] = useState<'warehouses' | 'branches'>('warehouses');

  // ── Depo state ──────────────────────────────────────────────────────────────
  const [whModal,    setWhModal]    = useState<'add' | 'edit' | null>(null);
  const [selectedWh, setSelectedWh] = useState<Warehouse | null>(null);
  const [whForm,     setWhForm]     = useState<WarehouseForm>(EMPTY_WH);
  const [whErr,      setWhErr]      = useState('');

  // ── Şube state ──────────────────────────────────────────────────────────────
  const [brModal,    setBrModal]    = useState<'add' | 'edit' | null>(null);
  const [selectedBr, setSelectedBr] = useState<Branch | null>(null);
  const [brForm,     setBrForm]     = useState<BranchForm>(EMPTY_BR);
  const [brErr,      setBrErr]      = useState('');

  // ── Queries ─────────────────────────────────────────────────────────────────
  const { data: warehouses = [], isLoading: whLoading } = useQuery<Warehouse[]>({
    queryKey: ['warehouses'],
    queryFn:  () => api.get('/warehouses').then((r) => r.data),
  });

  const { data: branches = [], isLoading: brLoading } = useQuery<Branch[]>({
    queryKey: ['branches'],
    queryFn:  () => api.get('/branches').then((r) => r.data),
  });

  // ── Depo mutations ──────────────────────────────────────────────────────────
  const saveMutation = useMutation({
    mutationFn: (payload: WarehouseForm) =>
      selectedWh
        ? api.put(`/warehouses/${selectedWh.id}`, payload)
        : api.post('/warehouses', payload),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['warehouses'] }); closeWhModal(); },
    onError:   (err) => setWhErr(apiError(err)),
  });

  const whDeleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/warehouses/${id}`),
    onSuccess:  () => qc.invalidateQueries({ queryKey: ['warehouses'] }),
    onError:    (err) => alert(apiError(err)),
  });

  // ── Şube mutations ──────────────────────────────────────────────────────────
  const brSaveMutation = useMutation({
    mutationFn: (payload: BranchForm) =>
      selectedBr
        ? api.put(`/branches/${selectedBr.id}`, payload)
        : api.post('/branches', payload),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['branches'] }); closeBrModal(); },
    onError:   (err) => setBrErr(apiError(err)),
  });

  const brDeleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/branches/${id}`),
    onSuccess:  () => qc.invalidateQueries({ queryKey: ['branches'] }),
    onError:    (err) => alert(apiError(err)),
  });

  // ── Depo helpers ────────────────────────────────────────────────────────────
  function openWhAdd() {
    setSelectedWh(null);
    setWhForm(EMPTY_WH);
    setWhErr('');
    setWhModal('add');
  }

  function openWhEdit(w: Warehouse) {
    setSelectedWh(w);
    setWhForm({ name: w.name, address: (w as any).address ?? '', branchId: w.branchId });
    setWhErr('');
    setWhModal('edit');
  }

  function closeWhModal() {
    setWhModal(null);
    setSelectedWh(null);
    setWhErr('');
  }

  // ── Şube helpers ────────────────────────────────────────────────────────────
  function openBrAdd() {
    setSelectedBr(null);
    setBrForm(EMPTY_BR);
    setBrErr('');
    setBrModal('add');
  }

  function openBrEdit(b: Branch) {
    setSelectedBr(b);
    setBrForm({ name: b.name, address: b.address ?? '', phone: b.phone ?? '' });
    setBrErr('');
    setBrModal('edit');
  }

  function closeBrModal() {
    setBrModal(null);
    setSelectedBr(null);
    setBrErr('');
  }

  const whColumns: Column<Warehouse>[] = [
    { key: 'name',   header: 'Depo Adı' },
    { key: 'branch', header: 'Şube', render: (r) => (r as any).branch?.name ?? '-' },
    {
      key: 'actions',
      header: '',
      className: 'w-32',
      render: (r) =>
        isAdmin ? (
          <div className="flex gap-2">
            <button onClick={() => openWhEdit(r)} className="text-xs text-blue-600 hover:underline">Düzenle</button>
            <button
              onClick={() => {
                if (confirm(`"${r.name}" deposunu silmek istediğinize emin misiniz?`))
                  whDeleteMutation.mutate(r.id);
              }}
              className="text-xs text-red-500 hover:underline"
            >
              Sil
            </button>
          </div>
        ) : null,
    },
  ];

  const brColumns: Column<Branch>[] = [
    { key: 'name',    header: 'Şube Adı' },
    { key: 'address', header: 'Adres',   render: (r) => r.address ?? '-' },
    { key: 'phone',   header: 'Telefon', render: (r) => r.phone   ?? '-' },
    {
      key: 'actions',
      header: '',
      className: 'w-32',
      render: (r) =>
        isAdmin ? (
          <div className="flex gap-2">
            <button onClick={() => openBrEdit(r)} className="text-xs text-blue-600 hover:underline">Düzenle</button>
            <button
              onClick={() => {
                if (confirm(`"${r.name}" şubesini silmek istediğinize emin misiniz?`))
                  brDeleteMutation.mutate(r.id);
              }}
              className="text-xs text-red-500 hover:underline"
            >
              Sil
            </button>
          </div>
        ) : null,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={tab === 'warehouses' ? 'Depolar' : 'Şubeler'}
        subtitle={
          tab === 'warehouses'
            ? (whLoading ? undefined : `${warehouses.length} depo`)
            : (brLoading ? undefined : `${branches.length} şube`)
        }
        action={
          isAdmin ? (
            <button
              onClick={tab === 'warehouses' ? openWhAdd : openBrAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              {tab === 'warehouses' ? '+ Depo Ekle' : '+ Şube Ekle'}
            </button>
          ) : undefined
        }
      />

      {/* Tabs */}
      <div className="px-6 pt-4 flex gap-1 border-b border-gray-200 bg-white">
        {(['warehouses', 'branches'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
              tab === t
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t === 'warehouses' ? 'Depolar' : 'Şubeler'}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === 'warehouses' ? (
          <Table columns={whColumns} data={warehouses} loading={whLoading} />
        ) : (
          <Table columns={brColumns} data={branches} loading={brLoading} />
        )}
      </div>

      {/* Depo Modal */}
      <Modal
        open={whModal === 'add' || whModal === 'edit'}
        onClose={closeWhModal}
        title={whModal === 'edit' ? 'Depoyu Düzenle' : 'Yeni Depo'}
      >
        <form onSubmit={(e) => { e.preventDefault(); setWhErr(''); saveMutation.mutate(whForm); }} className="space-y-4">
          <Field label="Depo Adı *">
            <input
              required
              value={whForm.name}
              onChange={(e) => setWhForm({ ...whForm, name: e.target.value })}
              className={INPUT}
              placeholder="Ana Depo"
            />
          </Field>

          <Field label="Adres">
            <input
              value={whForm.address}
              onChange={(e) => setWhForm({ ...whForm, address: e.target.value })}
              className={INPUT}
              placeholder="Tam adres (opsiyonel)"
            />
          </Field>

          <Field label="Şube *">
            <select
              required
              value={whForm.branchId}
              onChange={(e) => setWhForm({ ...whForm, branchId: e.target.value })}
              className={INPUT}
            >
              <option value="">Şube seçin…</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </Field>

          {whErr && <p className="text-sm text-red-600">{whErr}</p>}

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={closeWhModal} className={BTN_SECONDARY}>İptal</button>
            <button type="submit" disabled={saveMutation.isPending} className={BTN_PRIMARY}>
              {saveMutation.isPending ? 'Kaydediliyor…' : 'Kaydet'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Şube Modal */}
      <Modal
        open={brModal === 'add' || brModal === 'edit'}
        onClose={closeBrModal}
        title={brModal === 'edit' ? 'Şubeyi Düzenle' : 'Yeni Şube'}
      >
        <form onSubmit={(e) => { e.preventDefault(); setBrErr(''); brSaveMutation.mutate(brForm); }} className="space-y-4">
          <Field label="Şube Adı *">
            <input
              required
              value={brForm.name}
              onChange={(e) => setBrForm({ ...brForm, name: e.target.value })}
              className={INPUT}
              placeholder="İstanbul Merkez"
            />
          </Field>

          <Field label="Adres">
            <input
              value={brForm.address}
              onChange={(e) => setBrForm({ ...brForm, address: e.target.value })}
              className={INPUT}
              placeholder="Tam adres (opsiyonel)"
            />
          </Field>

          <Field label="Telefon">
            <input
              value={brForm.phone}
              onChange={(e) => setBrForm({ ...brForm, phone: e.target.value })}
              className={INPUT}
              placeholder="0212 000 00 00 (opsiyonel)"
            />
          </Field>

          {brErr && <p className="text-sm text-red-600">{brErr}</p>}

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={closeBrModal} className={BTN_SECONDARY}>İptal</button>
            <button type="submit" disabled={brSaveMutation.isPending} className={BTN_PRIMARY}>
              {brSaveMutation.isPending ? 'Kaydediliyor…' : 'Kaydet'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {children}
    </div>
  );
}

const INPUT        = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
const BTN_PRIMARY  = 'bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50';
const BTN_SECONDARY = 'border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50';
