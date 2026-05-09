import React, { useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal,
  ScrollView, TextInput, Alert, ActivityIndicator,
  KeyboardAvoidingView, Platform,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import { Product, Warehouse, Supplier } from '../../types';
import ErrorMessage from '../../components/ErrorMessage';

// ─── Tipler ───────────────────────────────────────────────────────────────────

interface ReceiveForm {
  productId:   string;
  productName: string; // görsel için
  barcode:     string;
  warehouseId: string;
  branchId:    string;
  supplierId:  string;
  expiryDate:  string; // "YYYY-MM-DD"
  quantity:    string;
  lotNumber:   string;
  notes:       string;
}

const EMPTY_FORM: ReceiveForm = {
  productId: '', productName: '', barcode: '',
  warehouseId: '', branchId: '', supplierId: '',
  expiryDate: '', quantity: '', lotNumber: '', notes: '',
};

// ─── Yardımcı: küçük seçici satırı ──────────────────────────────────────────

function SelectRow({
  label, active, onPress,
}: { label: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity
      style={[s.selectRow, active && s.selectRowActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[s.selectLabel, active && s.selectLabelActive]}>
        {active ? '✓  ' : ''}{label}
      </Text>
    </TouchableOpacity>
  );
}

// ─── Stok Giriş Formu (Modal) ─────────────────────────────────────────────────

function ReceiveModal({
  visible,
  form,
  setForm,
  isNewProduct,
  onClose,
  onSubmit,
  submitting,
  submitError,
  warehouses,
  suppliers,
}: {
  visible: boolean;
  form: ReceiveForm;
  setForm: React.Dispatch<React.SetStateAction<ReceiveForm>>;
  isNewProduct: boolean;
  onClose: () => void;
  onSubmit: () => void;
  submitting: boolean;
  submitError: string;
  warehouses: Warehouse[];
  suppliers: Supplier[];
}) {
  const insets = useSafeAreaInsets();

  function Field({
    label, value, onChange, placeholder, keyboardType, editable = true,
  }: {
    label: string; value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    keyboardType?: any;
    editable?: boolean;
  }) {
    return (
      <View style={{ marginBottom: 14 }}>
        <Text style={s.fieldLabel}>{label}</Text>
        <TextInput
          style={[s.input, !editable && s.inputDisabled]}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          keyboardType={keyboardType}
          editable={editable}
        />
      </View>
    );
  }

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <KeyboardAvoidingView
        style={s.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Modal başlık */}
        <View style={[s.modalHeader, { paddingTop: insets.top + 12 }]}>
          <View>
            <Text style={s.modalTitle}>
              {isNewProduct ? '🆕 Yeni Ürün + Stok Giriş' : '📦 Stok Teslim Al'}
            </Text>
            <Text style={s.modalSub}>Barkod: {form.barcode}</Text>
          </View>
          <TouchableOpacity onPress={onClose} hitSlop={8}>
            <Text style={s.modalClose}>İptal</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={s.flex}
          contentContainerStyle={s.formContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Yeni ürün uyarısı */}
          {isNewProduct && (
            <View style={s.newProductBanner}>
              <Text style={s.newProductText}>
                Bu barkod tanımsız — ürün adı girilirse yeni ürün oluşturulur.
              </Text>
            </View>
          )}

          {/* Ürün adı */}
          <Field
            label={isNewProduct ? 'Ürün Adı *' : 'Ürün'}
            value={form.productName}
            onChange={(v) => setForm((f) => ({ ...f, productName: v }))}
            editable={isNewProduct}
            placeholder="Ürün adı"
          />

          {/* SKT */}
          <Field
            label="Son Kullanma Tarihi * (YYYY-AA-GG)"
            value={form.expiryDate}
            onChange={(v) => setForm((f) => ({ ...f, expiryDate: v }))}
            placeholder="2025-12-31"
            keyboardType="numbers-and-punctuation"
          />

          {/* Adet */}
          <Field
            label="Adet *"
            value={form.quantity}
            onChange={(v) => setForm((f) => ({ ...f, quantity: v }))}
            placeholder="0"
            keyboardType="number-pad"
          />

          {/* Lot No */}
          <Field
            label="Lot / Parti No (opsiyonel)"
            value={form.lotNumber}
            onChange={(v) => setForm((f) => ({ ...f, lotNumber: v }))}
            placeholder="LOT-2025-01"
          />

          {/* Depo seçimi */}
          <Text style={s.fieldLabel}>Depo *</Text>
          {warehouses.length === 0 ? (
            <Text style={s.noData}>Depo bulunamadı</Text>
          ) : (
            warehouses.map((w) => (
              <SelectRow
                key={w.id}
                label={w.name}
                active={form.warehouseId === w.id}
                onPress={() =>
                  setForm((f) => ({
                    ...f,
                    warehouseId: w.id,
                    branchId: w.branchId,
                  }))
                }
              />
            ))
          )}

          {/* Tedarikçi */}
          <Text style={[s.fieldLabel, { marginTop: 14 }]}>Tedarikçi (opsiyonel)</Text>
          <SelectRow
            label="Belirtilmedi"
            active={form.supplierId === ''}
            onPress={() => setForm((f) => ({ ...f, supplierId: '' }))}
          />
          {suppliers.map((sup) => (
            <SelectRow
              key={sup.id}
              label={sup.name}
              active={form.supplierId === sup.id}
              onPress={() => setForm((f) => ({ ...f, supplierId: sup.id }))}
            />
          ))}

          {/* Not */}
          <Text style={[s.fieldLabel, { marginTop: 14 }]}>Not</Text>
          <TextInput
            style={[s.input, { height: 72, textAlignVertical: 'top' }]}
            value={form.notes}
            onChangeText={(v) => setForm((f) => ({ ...f, notes: v }))}
            multiline
            placeholder="İsteğe bağlı not..."
            placeholderTextColor="#9ca3af"
          />

          {/* Hata */}
          {submitError ? (
            <View style={{ marginTop: 12 }}>
              <ErrorMessage message={submitError} />
            </View>
          ) : null}

          {/* Gönder */}
          <TouchableOpacity
            style={[s.submitBtn, submitting && s.submitBtnDisabled]}
            onPress={onSubmit}
            disabled={submitting}
            activeOpacity={0.85}
          >
            {submitting
              ? <ActivityIndicator color="#fff" />
              : <Text style={s.submitText}>Stok Girişini Kaydet</Text>
            }
          </TouchableOpacity>

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

// ─── Ana Ekran ────────────────────────────────────────────────────────────────

export default function ScanScreen() {
  const qc     = useQueryClient();
  const insets = useSafeAreaInsets();

  const [permission, requestPermission] = useCameraPermissions();
  const [paused,    setPaused]    = useState(false); // barkod sonrası kamerayı durdur
  const [modalOpen, setModalOpen] = useState(false);
  const [form,      setForm]      = useState<ReceiveForm>(EMPTY_FORM);
  const [isNew,     setIsNew]     = useState(false);
  const [lookupErr, setLookupErr] = useState('');
  const [submitErr, setSubmitErr] = useState('');

  // Depo ve tedarikçi listelerini önceden çek
  const { data: warehouses = [] } = useQuery<Warehouse[]>({
    queryKey: ['warehouses'],
    queryFn:  () => api.get('/warehouses').then((r) => r.data),
  });

  const { data: suppliers = [] } = useQuery<Supplier[]>({
    queryKey: ['suppliers'],
    queryFn:  () => api.get('/suppliers').then((r) => r.data),
  });

  // Stok teslim alma mutation
  const receiveMutation = useMutation({
    mutationFn: async (f: ReceiveForm) => {
      let productId = f.productId;

      // Yeni ürünse önce oluştur
      if (isNew) {
        const { data: created } = await api.post<Product>('/products', {
          name:    f.productName,
          unit:    'adet',
          barcode: f.barcode,
        });
        productId = created.id;
      }

      return api.post('/stock/receive', {
        productId,
        warehouseId: f.warehouseId,
        branchId:    f.branchId,
        supplierId:  f.supplierId || undefined,
        expiryDate:  f.expiryDate,
        quantity:    parseInt(f.quantity, 10),
        lotNumber:   f.lotNumber  || undefined,
        notes:       f.notes      || undefined,
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['alert-summary'] });
      qc.invalidateQueries({ queryKey: ['alert-list-dashboard'] });
      Alert.alert(
        'Başarılı ✓',
        `${form.productName} için stok girişi kaydedildi.`,
        [{ text: 'Tamam', onPress: reset }],
      );
    },
    onError: (err: any) => {
      const msg =
        err.response?.data?.error ??
        err.response?.data?.fields?.map((f: any) => f.message).join(', ') ??
        'Kayıt başarısız';
      setSubmitErr(msg);
    },
  });

  function reset() {
    setForm(EMPTY_FORM);
    setModalOpen(false);
    setIsNew(false);
    setLookupErr('');
    setSubmitErr('');
    setPaused(false);
  }

  const handleBarcode = useCallback(
    async ({ data: barcode }: { data: string }) => {
      if (paused) return;
      setPaused(true);
      setLookupErr('');

      const defaultWarehouse = warehouses[0];
      const defaultBranch    = defaultWarehouse?.branchId ?? '';

      try {
        const { data: product } = await api.get<Product>(`/products/barcode/${barcode}`);

        // Ürün bulundu
        setForm({
          ...EMPTY_FORM,
          barcode,
          productId:   product.id,
          productName: product.name,
          warehouseId: defaultWarehouse?.id ?? '',
          branchId:    defaultBranch,
        });
        setIsNew(false);
      } catch (err: any) {
        if (err.response?.status === 404) {
          // Bilinmeyen barkod → yeni ürün akışı
          setForm({
            ...EMPTY_FORM,
            barcode,
            warehouseId: defaultWarehouse?.id ?? '',
            branchId:    defaultBranch,
          });
          setIsNew(true);
        } else {
          setLookupErr('Bağlantı hatası — tekrar deneyin');
          setPaused(false);
          return;
        }
      }

      setModalOpen(true);
    },
    [paused, warehouses],
  );

  function handleSubmit() {
    setSubmitErr('');
    const f = form;

    if (!f.expiryDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      setSubmitErr('Tarih formatı: YYYY-AA-GG (örn. 2025-12-31)');
      return;
    }
    if (!f.quantity || parseInt(f.quantity, 10) <= 0) {
      setSubmitErr('Adet 0\'dan büyük olmalı');
      return;
    }
    if (!f.warehouseId) {
      setSubmitErr('Depo seçmelisiniz');
      return;
    }
    if (isNew && !f.productName.trim()) {
      setSubmitErr('Yeni ürün için ürün adı zorunlu');
      return;
    }

    receiveMutation.mutate(f);
  }

  // ─── İzin yok ──────────────────────────────────────────────────────────────
  if (!permission) {
    return (
      <View style={s.center}>
        <ActivityIndicator color="#1d4ed8" size="large" />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={s.center}>
        <Text style={s.permText}>📷 Kamera izni gerekli</Text>
        <TouchableOpacity style={s.permBtn} onPress={requestPermission}>
          <Text style={s.permBtnText}>İzin Ver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ─── Kamera ────────────────────────────────────────────────────────────────
  return (
    <View style={s.flex}>
      {/* Kamera tam ekran */}
      {!paused ? (
        <CameraView
          style={StyleSheet.absoluteFill}
          facing="back"
          onBarcodeScanned={handleBarcode}
          barcodeScannerSettings={{
            barcodeTypes: ['ean13', 'ean8', 'qr', 'code128', 'code39', 'code93'],
          }}
        />
      ) : (
        <View style={[StyleSheet.absoluteFill, s.pausedBg]} />
      )}

      {/* Overlay */}
      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        {/* Başlık alanı */}
        <View style={[s.topBar, { paddingTop: insets.top + 10 }]}>
          <Text style={s.topTitle}>Barkod Tara</Text>
          <Text style={s.topSub}>Ürünü çerçeveye getirin</Text>
        </View>

        {/* Tarama çerçevesi */}
        <View style={s.frameWrap}>
          <View style={s.frame}>
            {/* Köşe süslemeleri */}
            {[
              { top: 0,    left: 0,    borderTopWidth: 3, borderLeftWidth: 3 },
              { top: 0,    right: 0,   borderTopWidth: 3, borderRightWidth: 3 },
              { bottom: 0, left: 0,    borderBottomWidth: 3, borderLeftWidth: 3 },
              { bottom: 0, right: 0,   borderBottomWidth: 3, borderRightWidth: 3 },
            ].map((style, i) => (
              <View key={i} style={[s.corner, style]} />
            ))}
          </View>
          <Text style={s.frameHint}>EAN-13, EAN-8, QR, Code128</Text>
        </View>

        {/* Alt */}
        <View style={[s.bottomBar, { paddingBottom: insets.bottom + 16 }]}>
          {lookupErr ? (
            <View style={s.errBox}>
              <Text style={s.errText}>{lookupErr}</Text>
              <TouchableOpacity onPress={() => { setLookupErr(''); setPaused(false); }}>
                <Text style={s.errRetry}>Tekrar Dene</Text>
              </TouchableOpacity>
            </View>
          ) : paused ? (
            <TouchableOpacity style={s.resetBtn} onPress={reset}>
              <Text style={s.resetText}>↩ Tekrar Tara</Text>
            </TouchableOpacity>
          ) : (
            <Text style={s.scanningText}>Taranıyor...</Text>
          )}
        </View>
      </View>

      {/* Stok giriş formu */}
      <ReceiveModal
        visible={modalOpen}
        form={form}
        setForm={setForm}
        isNewProduct={isNew}
        onClose={reset}
        onSubmit={handleSubmit}
        submitting={receiveMutation.isPending}
        submitError={submitErr}
        warehouses={warehouses}
        suppliers={suppliers}
      />
    </View>
  );
}

// ─── Stiller ─────────────────────────────────────────────────────────────────

const FRAME_SIZE = 240;

const s = StyleSheet.create({
  flex:   { flex: 1, backgroundColor: '#000' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6' },

  pausedBg: { backgroundColor: '#111' },

  // Overlay bölümleri
  topBar: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    alignItems: 'center',
  },
  topTitle: { fontSize: 18, fontWeight: '700', color: '#fff', textShadowColor: '#0008', textShadowRadius: 6 },
  topSub:   { fontSize: 12, color: '#e0e0e0', marginTop: 4, textShadowColor: '#0008', textShadowRadius: 4 },

  frameWrap: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  frame: {
    width:  FRAME_SIZE,
    height: FRAME_SIZE * 0.65,
    position: 'relative',
  },
  corner: {
    position:   'absolute',
    width:  28,
    height: 28,
    borderColor: '#60a5fa',
    borderRadius: 2,
  },
  frameHint: {
    marginTop: 16,
    color: '#94a3b8',
    fontSize: 11,
    textShadowColor: '#0006',
    textShadowRadius: 4,
  },

  bottomBar: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  scanningText: { color: '#94a3b8', fontSize: 13 },
  resetBtn: {
    backgroundColor: '#1d4ed8cc',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 24,
  },
  resetText: { color: '#fff', fontWeight: '700', fontSize: 15 },

  errBox: {
    backgroundColor: '#fef2f2ee',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    gap: 8,
  },
  errText:  { color: '#dc2626', fontWeight: '600', textAlign: 'center' },
  errRetry: { color: '#1d4ed8', fontWeight: '700' },

  // İzin
  permText: { fontSize: 16, color: '#374151', marginBottom: 16 },
  permBtn:  { backgroundColor: '#1d4ed8', paddingHorizontal: 28, paddingVertical: 13, borderRadius: 12 },
  permBtnText: { color: '#fff', fontWeight: '700', fontSize: 15 },

  // Modal
  modalHeader: {
    backgroundColor: '#1d4ed8',
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  modalTitle: { fontSize: 17, fontWeight: '700', color: '#fff' },
  modalSub:   { fontSize: 11, color: '#93c5fd', marginTop: 3 },
  modalClose: { fontSize: 15, color: '#93c5fd', fontWeight: '600' },
  formContent: { padding: 16 },

  // Form elemanları
  fieldLabel: { fontSize: 13, fontWeight: '600', color: '#374151', marginBottom: 6 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 15,
    color: '#111827',
  },
  inputDisabled: { backgroundColor: '#f9fafb', color: '#6b7280' },

  selectRow: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 11,
    marginBottom: 6,
  },
  selectRowActive: { borderColor: '#1d4ed8', backgroundColor: '#eff6ff' },
  selectLabel:       { fontSize: 14, color: '#374151' },
  selectLabelActive: { color: '#1d4ed8', fontWeight: '700' },

  noData: { color: '#9ca3af', fontSize: 13, marginBottom: 8 },

  newProductBanner: {
    backgroundColor: '#fffbeb',
    borderRadius: 10,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    marginBottom: 16,
  },
  newProductText: { color: '#92400e', fontSize: 13, lineHeight: 19 },

  submitBtn: {
    backgroundColor: '#16a34a',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  submitBtnDisabled: { opacity: 0.6 },
  submitText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
