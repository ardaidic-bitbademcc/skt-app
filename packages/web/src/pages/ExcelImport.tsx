import { useRef, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import * as XLSX from 'xlsx';
import api from '../lib/api';
import { PageHeader } from '../components/PageHeader';
import { Table, Column } from '../components/Table';
import { apiError } from '../lib/utils';
import type { Warehouse } from '../lib/types';

const UNITS = ['adet', 'kg', 'lt', 'kutu', 'paket', 'koli'];

interface PreviewRow {
  name: string;
  sku: string;
  barcode: string;
  unit: string;
  expiryDate: string;
  quantity: number;
  warehouseId: string;
  [key: string]: string | number;
}

const COLUMNS: Column<PreviewRow & { id: string }>[] = [
  { key: 'name', header: 'Ürün Adı' },
  { key: 'sku', header: 'SKU' },
  { key: 'barcode', header: 'Barkod' },
  { key: 'unit', header: 'Birim' },
  { key: 'expiryDate', header: 'SKT' },
  { key: 'quantity', header: 'Miktar' },
  { key: 'warehouseId', header: 'Depo ID' },
];

export default function ExcelImport() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [rows, setRows] = useState<(PreviewRow & { id: string })[]>([]);
  const [fileName, setFileName] = useState('');
  const [result, setResult] = useState<{ created: number; updated: number } | null>(null);
  const [error, setError] = useState('');

  const { data: warehouses = [] } = useQuery<Warehouse[]>({
    queryKey: ['warehouses'],
    queryFn:  () => api.get('/warehouses').then((r) => r.data),
  });

  const importMutation = useMutation({
    mutationFn: () => api.post('/excel/import', { rows }),
    onSuccess: (res) => {
      setResult(res.data);
      setRows([]);
      setFileName('');
    },
    onError: (err) => setError(apiError(err)),
  });

  function downloadTemplate() {
    const wb = XLSX.utils.book_new();

    // ── 1. Şablon sayfası ──────────────────────────────────────────────────
    const wsData = [
      ['name',         'sku',     'barcode',         'unit', 'expiryDate', 'quantity', 'warehouseId'],
      ['Örnek Ürün A', 'SKU-001', '8690000000001',   'adet',  '2025-12-31', 10,        warehouses[0]?.id ?? 'warehouse-main'],
      ['Örnek Ürün B', 'SKU-002', '8690000000002',   'kg',    '2026-03-15', 5,         warehouses[0]?.id ?? 'warehouse-main'],
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Sütun genişlikleri
    ws['!cols'] = [
      { wch: 25 }, { wch: 12 }, { wch: 18 },
      { wch: 10 }, { wch: 13 }, { wch: 10 }, { wch: 30 },
    ];

    // Birim sütunu (D) için data validation (dropdown)
    if (!ws['!dataValidation']) ws['!dataValidation'] = [];
    ws['!dataValidation'].push({
      sqref: 'D2:D1000',
      type: 'list',
      formula1: `"${UNITS.join(',')}"`,
      showDropDown: false,
      error: 'Geçersiz birim',
      errorTitle: 'Hata',
      prompt: 'Listeden seçin',
    });

    XLSX.utils.book_append_sheet(wb, ws, 'Şablon');

    // ── 2. Depolar referans sayfası ────────────────────────────────────────
    if (warehouses.length > 0) {
      const refData = [
        ['warehouseId', 'Depo Adı'],
        ...warehouses.map((w) => [w.id, w.name]),
      ];
      const wsRef = XLSX.utils.aoa_to_sheet(refData);
      wsRef['!cols'] = [{ wch: 36 }, { wch: 25 }];
      XLSX.utils.book_append_sheet(wb, wsRef, 'Depolar');
    }

    XLSX.writeFile(wb, 'skt_import_sablonu.xlsx');
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    setError('');
    setResult(null);
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const wb = XLSX.read(ev.target?.result, { type: 'binary', cellDates: true });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json<any>(ws, { defval: '' });

        const parsed = json.map((r: any, i: number) => ({
          id: String(i),
          name: String(r.name ?? '').trim(),
          sku: String(r.sku ?? '').trim(),
          barcode: String(r.barcode ?? '').trim(),
          unit: String(r.unit ?? 'adet').trim(),
          expiryDate: r.expiryDate instanceof Date
            ? r.expiryDate.toISOString().split('T')[0]
            : String(r.expiryDate ?? '').trim(),
          quantity: Number(r.quantity ?? 0),
          warehouseId: String(r.warehouseId ?? '').trim(),
        }));

        const valid = parsed.filter((r) => r.name && r.expiryDate && r.quantity > 0);
        if (valid.length === 0) {
          setError('Geçerli satır bulunamadı. Şablon formatını kontrol edin.');
          return;
        }
        setRows(valid);
      } catch {
        setError('Dosya okunamadı.');
      }
    };
    reader.readAsBinaryString(file);
    e.target.value = '';
  }

  return (
    <div className="flex flex-col h-full">
      <PageHeader title="Excel İçe Aktar" subtitle="Ürün ve stok verilerini toplu içe aktarın" />

      <div className="p-6 space-y-6">
        {/* Step 1 */}
        <section className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">1. Şablonu İndir</h2>
          <p className="text-sm text-gray-500 mb-3">
            Doğru format için şablon dosyasını indirin ve doldurun.
          </p>
          <button
            onClick={downloadTemplate}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
          >
            Şablonu İndir (.xlsx)
          </button>
        </section>

        {/* Step 2 */}
        <section className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">2. Dosya Yükle</h2>
          <div
            onClick={() => fileRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
          >
            <p className="text-sm text-gray-500">
              {fileName || 'Excel dosyası seçmek için tıklayın (.xlsx, .xls)'}
            </p>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".xlsx,.xls"
            className="hidden"
            onChange={handleFile}
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </section>

        {/* Step 3 — Preview */}
        {rows.length > 0 && (
          <section className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-700">
                3. Önizleme — {rows.length} satır
              </h2>
              <button
                onClick={() => importMutation.mutate()}
                disabled={importMutation.isPending}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                {importMutation.isPending ? 'İçe Aktarılıyor...' : 'İçe Aktar'}
              </button>
            </div>
            <Table columns={COLUMNS} data={rows} />
          </section>
        )}

        {/* Success */}
        {result && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
            İçe aktarma tamamlandı: <strong>{result.created}</strong> ürün oluşturuldu,{' '}
            <strong>{result.updated}</strong> lot güncellendi.
          </div>
        )}
      </div>
    </div>
  );
}
