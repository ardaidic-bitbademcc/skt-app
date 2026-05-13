import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import { PageHeader } from '../components/PageHeader';
import { Table, Column } from '../components/Table';
import { Modal } from '../components/Modal';
import { apiError } from '../lib/utils';
import type { Product } from '../lib/types';

interface ProductForm {
  name: string;
  description: string;
  unit: string;
  categoryId: string;
  barcode: string;
  minStock: string;
  productType: 'PERISHABLE' | 'CONSUMABLE';
}

const EMPTY_FORM: ProductForm = {
  name: '', description: '', unit: 'adet', categoryId: '', barcode: '', minStock: '0', productType: 'PERISHABLE',
};

export default function Products() {
  const qc = useQueryClient();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState<'add' | 'edit' | 'barcode' | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [form, setForm] = useState<ProductForm>(EMPTY_FORM);
  const [barcodeInput, setBarcodeInput] = useState('');
  const [formError, setFormError] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['products', search, page],
    queryFn: () =>
      api.get('/products', { params: { search, page, limit: 20 } }).then((r) => r.data),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: ProductForm) => {
      const cleaned = {
        name:        payload.name,
        description: payload.description || undefined,
        unit:        payload.unit,
        categoryId:  payload.categoryId  || undefined,  // boş string backend validation'da hata verir
        minStock:    parseInt(payload.minStock, 10) || 0,
        productType: payload.productType,
        ...(!selected && payload.barcode ? { barcode: payload.barcode } : {}),
      };
      return selected
        ? api.put(`/products/${selected.id}`, cleaned)
        : api.post('/products', cleaned);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['products'] });
      closeModal();
    },
    onError: (err) => setFormError(apiError(err)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/products/${id}`),
    onMutate: async (id) => {
      await qc.cancelQueries({ queryKey: ['products'] });
      const prev = qc.getQueryData(['products', search, page]);
      qc.setQueryData(['products', search, page], (old: any) =>
        old ? { ...old, data: old.data.filter((p: Product) => p.id !== id), total: old.total - 1 } : old
      );
      return { prev };
    },
    onError: (_err, _id, ctx) => {
      if (ctx?.prev) qc.setQueryData(['products', search, page], ctx.prev);
    },
    onSettled: () => qc.invalidateQueries({ queryKey: ['products'] }),
  });

  const barcodeMutation = useMutation({
    mutationFn: ({ id, code }: { id: string; code: string }) =>
      api.post(`/products/${id}/barcodes`, { barcode: code }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['products'] });
      setBarcodeInput('');
      setFormError('');
    },
    onError: (err) => setFormError(apiError(err)),
  });

  function openAdd() {
    setSelected(null);
    setForm(EMPTY_FORM);
    setFormError('');
    setModal('add');
  }

  function openEdit(p: Product) {
    setSelected(p);
    setForm({
      name: p.name,
      description: p.description ?? '',
      unit: p.unit,
      categoryId: p.categoryId ?? '',
      barcode: '',      // barkod edit modda ayrı "Barkod" butonu ile yönetilir
      minStock: String((p as any).minStock ?? 0),
      productType: p.productType ?? 'PERISHABLE',
    });
    setFormError('');
    setModal('edit');
  }

  function openBarcode(p: Product) {
    setSelected(p);
    setBarcodeInput('');
    setFormError('');
    setModal('barcode');
  }

  function closeModal() {
    setModal(null);
    setSelected(null);
    setFormError('');
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setFormError('');
    saveMutation.mutate(form);
  }

  const columns: Column<Product>[] = [
    { key: 'name', header: 'Ürün Adı' },
    { key: 'unit', header: 'Birim' },
    {
      key: 'barcodes',
      header: 'Barkodlar',
      render: (r) => (
        <span className="text-xs text-gray-500">
          {r.barcodes?.length ? r.barcodes.map((b: any) => b.barcode).join(', ') : '-'}
        </span>
      ),
    },
    {
      key: 'actions',
      header: '',
      className: 'w-32',
      render: (r) => (
        <div className="flex gap-2">
          <button
            onClick={() => openEdit(r)}
            className="text-xs text-blue-600 hover:underline"
          >
            Düzenle
          </button>
          <button
            onClick={() => openBarcode(r)}
            className="text-xs text-gray-500 hover:underline"
          >
            Barkod
          </button>
          <button
            onClick={() => {
              if (confirm('Ürünü silmek istediğinize emin misiniz?')) deleteMutation.mutate(r.id);
            }}
            className="text-xs text-red-500 hover:underline"
          >
            Sil
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title="Ürünler"
        subtitle={data ? `${data.total} ürün` : undefined}
        action={
          <button
            onClick={openAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            + Ürün Ekle
          </button>
        }
      />

      <div className="p-6 flex flex-col gap-4 flex-1">
        <input
          type="text"
          placeholder="Ürün ara..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Table columns={columns} data={data?.data ?? []} loading={isLoading} />

        {data && Math.ceil(data.total / (data.limit ?? 20)) > 1 && (
          <div className="flex gap-2 justify-end">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg disabled:opacity-40 hover:bg-gray-50"
            >
              Önceki
            </button>
            <span className="px-3 py-1.5 text-sm text-gray-600">
              {page} / {Math.ceil(data.total / (data.limit ?? 20))}
            </span>
            <button
              disabled={page === Math.ceil(data.total / (data.limit ?? 20))}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg disabled:opacity-40 hover:bg-gray-50"
            >
              Sonraki
            </button>
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={closeModal}
        title={modal === 'edit' ? 'Ürünü Düzenle' : 'Yeni Ürün'}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <Field label="Ürün Adı *">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={INPUT}
            />
          </Field>
          <Field label="Ürün Tipi">
            <div className="flex gap-2">
              {(['PERISHABLE', 'CONSUMABLE'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setForm({ ...form, productType: t })}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    form.productType === t
                      ? t === 'PERISHABLE'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {t === 'PERISHABLE' ? '📦 SKT\'li Ürün' : '🥤 Sarf Malzeme'}
                </button>
              ))}
            </div>
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Birim *">
              <select
                required
                value={form.unit}
                onChange={(e) => setForm({ ...form, unit: e.target.value })}
                className={INPUT}
              >
                {UNITS.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </Field>
            <Field label="Minimum Stok">
              <input
                type="number"
                min="0"
                value={form.minStock}
                onChange={(e) => setForm({ ...form, minStock: e.target.value })}
                className={INPUT}
                placeholder="0"
              />
            </Field>
          </div>
          {modal === 'add' && (
            <Field label="Barkod Numarası">
              <input
                value={form.barcode}
                onChange={(e) => setForm({ ...form, barcode: e.target.value })}
                className={INPUT}
                placeholder="Örn: 8690000000001 (opsiyonel)"
              />
            </Field>
          )}
          <Field label="Açıklama">
            <input
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className={INPUT}
              placeholder="Opsiyonel"
            />
          </Field>
          {formError && <p className="text-sm text-red-600">{formError}</p>}
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={closeModal} className={BTN_SECONDARY}>İptal</button>
            <button type="submit" disabled={saveMutation.isPending} className={BTN_PRIMARY}>
              {saveMutation.isPending ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Barcode Modal */}
      <Modal open={modal === 'barcode'} onClose={closeModal} title="Barkod Yönetimi">
        <div className="space-y-4">
          <p className="text-sm text-gray-600">{selected?.name}</p>
          <Field label="Barkod Numarası Ekle">
          <div className="flex gap-2">
            <input
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              placeholder="Örn: 8690000000001"
              className={`${INPUT} flex-1`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && barcodeInput.trim() && selected) {
                  barcodeMutation.mutate({ id: selected.id, code: barcodeInput.trim() });
                }
              }}
            />
            <button
              disabled={!barcodeInput.trim() || barcodeMutation.isPending}
              onClick={() => selected && barcodeMutation.mutate({ id: selected.id, code: barcodeInput.trim() })}
              className={BTN_PRIMARY}
            >
              Ekle
            </button>
          </div>
          </Field>
          {formError && <p className="text-sm text-red-600">{formError}</p>}
          <ul className="divide-y divide-gray-100">
            {selected?.barcodes?.map((b: any) => (
              <li key={b.id} className="py-2 text-sm text-gray-700 font-mono">{b.barcode}</li>
            ))}
            {!selected?.barcodes?.length && (
              <li className="py-4 text-center text-sm text-gray-400">Barkod yok</li>
            )}
          </ul>
        </div>
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

const UNITS = ['adet', 'kg', 'lt', 'kutu', 'paket', 'koli'];
const INPUT = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
const BTN_PRIMARY = 'bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50';
const BTN_SECONDARY = 'border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50';
