import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import { PageHeader } from '../components/PageHeader';
import { Table, Column } from '../components/Table';
import { Modal } from '../components/Modal';
import { apiError } from '../lib/utils';
import { getUser } from '../lib/auth';
import type { Warehouse, Branch } from '../lib/types';

interface WarehouseForm {
  name: string;
  address: string;
  branchId: string;
}

const EMPTY_FORM: WarehouseForm = { name: '', address: '', branchId: '' };

export default function Warehouses() {
  const qc   = useQueryClient();
  const user = getUser();
  const isAdmin = user?.role === 'ADMIN';

  const [modal,    setModal]    = useState<'add' | 'edit' | null>(null);
  const [selected, setSelected] = useState<Warehouse | null>(null);
  const [form,     setForm]     = useState<WarehouseForm>(EMPTY_FORM);
  const [formErr,  setFormErr]  = useState('');

  const { data: warehouses = [], isLoading } = useQuery<Warehouse[]>({
    queryKey: ['warehouses'],
    queryFn:  () => api.get('/warehouses').then((r) => r.data),
  });

  const { data: branches = [] } = useQuery<Branch[]>({
    queryKey: ['branches'],
    queryFn:  () => api.get('/branches').then((r) => r.data),
    enabled:  isAdmin,
  });

  const saveMutation = useMutation({
    mutationFn: (payload: WarehouseForm) =>
      selected
        ? api.put(`/warehouses/${selected.id}`, payload)
        : api.post('/warehouses', payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['warehouses'] });
      closeModal();
    },
    onError: (err) => setFormErr(apiError(err)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/warehouses/${id}`),
    onSuccess:  () => qc.invalidateQueries({ queryKey: ['warehouses'] }),
    onError:    (err) => alert(apiError(err)),
  });

  function openAdd() {
    setSelected(null);
    setForm({ ...EMPTY_FORM, branchId: user?.branch?.id ?? '' });
    setFormErr('');
    setModal('add');
  }

  function openEdit(w: Warehouse) {
    setSelected(w);
    setForm({ name: w.name, address: (w as any).address ?? '', branchId: w.branchId });
    setFormErr('');
    setModal('edit');
  }

  function closeModal() {
    setModal(null);
    setSelected(null);
    setFormErr('');
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setFormErr('');
    saveMutation.mutate(form);
  }

  const columns: Column<Warehouse>[] = [
    { key: 'name',   header: 'Depo Adı' },
    { key: 'branch', header: 'Şube', render: (r) => (r as any).branch?.name ?? '-' },
    {
      key: 'actions',
      header: '',
      className: 'w-32',
      render: (r) =>
        isAdmin ? (
          <div className="flex gap-2">
            <button onClick={() => openEdit(r)} className="text-xs text-blue-600 hover:underline">
              Düzenle
            </button>
            <button
              onClick={() => {
                if (confirm(`"${r.name}" deposunu silmek istediğinize emin misiniz?`))
                  deleteMutation.mutate(r.id);
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
        title="Depolar"
        subtitle={isLoading ? undefined : `${warehouses.length} depo`}
        action={
          isAdmin ? (
            <button
              onClick={openAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              + Depo Ekle
            </button>
          ) : undefined
        }
      />

      <div className="p-6">
        <Table columns={columns} data={warehouses} loading={isLoading} />
      </div>

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={closeModal}
        title={modal === 'edit' ? 'Depoyu Düzenle' : 'Yeni Depo'}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <Field label="Depo Adı *">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={INPUT}
              placeholder="Ana Depo"
            />
          </Field>

          <Field label="Adres">
            <input
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className={INPUT}
              placeholder="Tam adres (opsiyonel)"
            />
          </Field>

          {isAdmin && (
            <Field label="Şube *">
              <select
                required
                value={form.branchId}
                onChange={(e) => setForm({ ...form, branchId: e.target.value })}
                className={INPUT}
              >
                <option value="">Şube seçin…</option>
                {branches.map((b) => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </Field>
          )}

          {formErr && <p className="text-sm text-red-600">{formErr}</p>}

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={closeModal} className={BTN_SECONDARY}>İptal</button>
            <button type="submit" disabled={saveMutation.isPending} className={BTN_PRIMARY}>
              {saveMutation.isPending ? 'Kaydediliyor…' : 'Kaydet'}
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
