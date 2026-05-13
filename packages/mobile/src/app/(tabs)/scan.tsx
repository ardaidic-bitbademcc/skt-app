import React, { useState, useCallback, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal,
  ScrollView, TextInput, Alert, ActivityIndicator,
  KeyboardAvoidingView, Platform, Vibration,
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import { Product, Warehouse, Supplier, ExpiryStatus } from '../../types';
import ErrorMessage from '../../components/ErrorMessage';
import { formatDate, daysLeftLabel, STATUS_COLOR, STATUS_BG } from '../../lib/utils';

// ─── Tipler ───────────────────────────────────────────────────────────────────

interface ReceiveForm {
  productId:   string;
  productName: string;
  productUnit: string;
  productType: 'PERISHABLE' | 'CONSUMABLE';
  barcode:     string;
  warehouseId: string;
  branchId:    string;
  supplierId:  string;
  expiryDate:  string; // "YYYY-MM-DD" — CONSUMABLE için boş
  quantity:    string;
  lotNumber:   string;
  notes:       string;
}

interface ExistingLot {
  id:         string;
  expiryDate: string | null;
  quantity:   number;
  status:     ExpiryStatus | null;
  lotNumber:  string | null;
  warehouse:  { id: string; name: string };
  supplier:   { id: string; name: string } | null;
}

interface BatchItem {
  key:         string;   // unique per scan
  productId:   string;
  productName: string;
  productUnit: string;
  productType: 'PERISHABLE' | 'CONSUMABLE';
  barcode:     string;
  quantity:    string;
  expiryDate:  string;
  lotNumber:   string;
}

const EMPTY_FORM: ReceiveForm = {
  productId: '', productName: '', productUnit: 'adet', productType: 'PERISHABLE', barcode: '',
  warehouseId: '', branchId: '', supplierId: '',
  expiryDate: '', quantity: '', lotNumber: '', notes: '',
};

// ─── Field ────────────────────────────────────────────────────────────────────
// CRITICAL: Bu component ReceiveModal dışında (top-level) tanımlanmalı.
// İçeride tanımlanırsa her render'da yeni component tipi üretilir,
// React input'u unmount+remount eder → klavye açıkken label/input kayar.

interface FieldProps {
  label: string; value: string;
  onChange: (v: string) => void;
  placeholder?: string; keyboardType?: any; editable?: boolean;
}
function Field({ label, value, onChange, placeholder, keyboardType, editable = true }: FieldProps) {
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

// ─── SelectRow ────────────────────────────────────────────────────────────────

function SelectRow({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
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

// ─── DatePickerField ────────────────────────────────────────────────────────

function DatePickerField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [show, setShow] = useState(false);
  const pickerDate = value ? new Date(value + 'T00:00:00') : new Date();
  function onDateChange(_e: DateTimePickerEvent, d?: Date) {
    if (Platform.OS === 'android') setShow(false);
    if (d) onChange(d.toISOString().split('T')[0]);
  }
  return (
    <View>
      <TouchableOpacity
        style={[s.input, { justifyContent: 'center', height: 44 }]}
        onPress={() => setShow(true)}
        activeOpacity={0.7}
      >
        <Text style={{ color: value ? '#111827' : '#9ca3af', fontSize: 14 }}>
          {value ? formatDate(value) : 'SKT seçin…'}
        </Text>
      </TouchableOpacity>

      {/* iOS: tarih seçici taşmasın diye overlay modal */}
      {Platform.OS === 'ios' && show && (
        <Modal transparent animationType="slide" visible onRequestClose={() => setShow(false)}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            {/* Arka plan — dokunulunca kapat */}
            <TouchableOpacity
              style={[StyleSheet.absoluteFillObject, { backgroundColor: '#00000055' }]}
              activeOpacity={1}
              onPress={() => setShow(false)}
            />
            {/* Picker kabı — plain View, TouchableOpacity değil */}
            <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingBottom: 16 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4 }}>
                <TouchableOpacity onPress={() => setShow(false)} hitSlop={12}>
                  <Text style={{ color: '#1d4ed8', fontWeight: '700', fontSize: 15 }}>Tamam</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                value={pickerDate}
                mode="date"
                display="spinner"
                onChange={onDateChange}
                minimumDate={new Date()}
                style={{ width: '100%' }}
              />
            </View>
          </View>
        </Modal>
      )}

      {/* Android: native dialog */}
      {Platform.OS === 'android' && show && (
        <DateTimePicker
          value={pickerDate}
          mode="date"
          display="default"
          onChange={onDateChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
}

// ─── ProductSummaryCard ───────────────────────────────────────────────────────
// Barkod okununca mevcut stok lotlarını gösterir (FEFO sıralı, renk kodlu).

function ProductSummaryCard({ lots, unit }: { lots: ExistingLot[]; unit: string }) {
  const activeLots = lots
    .filter((l) => l.quantity > 0)
    .sort((a, b) => {
      if (!a.expiryDate && !b.expiryDate) return 0;
      if (!a.expiryDate) return 1;
      if (!b.expiryDate) return -1;
      return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
    });

  const totalStock  = activeLots.reduce((sum, l) => sum + l.quantity, 0);
  const hasCritical = activeLots.some((l) => l.status === 'CRITICAL' || l.status === 'EXPIRED');
  const hasWarning  = activeLots.some((l) => l.status === 'WARNING');
  const accentColor = hasCritical ? '#dc2626' : hasWarning ? '#d97706' : '#16a34a';
  const bgColor     = hasCritical ? '#fef2f2' : hasWarning ? '#fffbeb' : '#f0fdf4';

  return (
    <View style={[s.summaryCard, { backgroundColor: bgColor, borderLeftColor: accentColor }]}>
      {/* Başlık + toplam adet */}
      <View style={s.summaryHeader}>
        <Text style={s.summaryTitle}>MEVCUT STOK</Text>
        <View style={[s.totalBadge, { backgroundColor: accentColor }]}>
          <Text style={s.totalBadgeText}>{totalStock} {unit}</Text>
        </View>
      </View>

      {activeLots.length === 0 ? (
        <Text style={s.summaryEmpty}>Stokta ürün yok</Text>
      ) : (
        activeLots.slice(0, 4).map((lot) => {
          const statusColor = lot.status ? STATUS_COLOR[lot.status] : '#6b7280';
          const statusBg    = lot.status ? STATUS_BG[lot.status]    : '#f3f4f6';
          return (
            <View key={lot.id} style={s.lotRow}>
              <View style={[s.statusDot, { backgroundColor: statusColor }]} />
              <View style={{ flex: 1 }}>
                <Text style={s.lotDate}>
                  {lot.expiryDate ? `SKT: ${formatDate(lot.expiryDate)}` : 'Sarf Malzeme'}
                </Text>
                <Text style={s.lotMeta}>
                  {lot.quantity} {unit} · {lot.warehouse.name}
                  {lot.lotNumber ? ` · ${lot.lotNumber}` : ''}
                </Text>
              </View>
              <View style={[s.statusPill, { backgroundColor: statusBg }]}>
                <Text style={[s.statusPillText, { color: statusColor }]}>
                  {lot.expiryDate ? daysLeftLabel(lot.expiryDate) : 'Stokta'}
                </Text>
              </View>
            </View>
          );
        })
      )}

      {activeLots.length > 4 && (
        <Text style={s.summaryMore}>+{activeLots.length - 4} lot daha</Text>
      )}
    </View>
  );
}

// ─── ReceiveModal ─────────────────────────────────────────────────────────────

function ReceiveModal({
  visible, form, setForm, isNewProduct, onClose, onSubmit,
  submitting, submitError, warehouses, suppliers, existingLots,
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
  existingLots: ExistingLot[];
}) {
  const insets = useSafeAreaInsets();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const pickerDate = form.expiryDate
    ? new Date(form.expiryDate + 'T00:00:00')
    : new Date();

  function onDateChange(_event: DateTimePickerEvent, selected?: Date) {
    if (Platform.OS === 'android') setShowDatePicker(false);
    if (selected) {
      const iso = selected.toISOString().split('T')[0];
      setForm((f) => ({ ...f, expiryDate: iso }));
    }
  }

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <KeyboardAvoidingView
        style={s.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Başlık */}
        <View style={[s.modalHeader, { paddingTop: insets.top + 12 }]}>
          <View style={{ flex: 1 }}>
            <Text style={s.modalTitle} numberOfLines={1}>
              {isNewProduct ? '🆕 Yeni Ürün + Stok Giriş' : `📦 ${form.productName}`}
            </Text>
            <Text style={s.modalSub}>Barkod: {form.barcode}</Text>
          </View>
          <TouchableOpacity onPress={onClose} hitSlop={8} style={{ paddingLeft: 16 }}>
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
                Bu barkod tanımsız — ürün adı girildikten sonra yeni ürün oluşturulur.
              </Text>
            </View>
          )}

          {/* Mevcut stok özeti (sadece mevcut ürünlerde) */}
          {!isNewProduct && (
            <ProductSummaryCard lots={existingLots} unit={form.productUnit || 'adet'} />
          )}

          {/* Ürün adı */}
          <Field
            label={isNewProduct ? 'Ürün Adı *' : 'Ürün'}
            value={form.productName}
            onChange={(v) => setForm((f) => ({ ...f, productName: v }))}
            editable={isNewProduct}
            placeholder="Ürün adı"
          />

          {/* SKT — sadece PERISHABLE ürünlerde */}
          {form.productType !== 'CONSUMABLE' && (
          <View style={{ marginBottom: 14 }}>
            <Text style={s.fieldLabel}>Son Kullanma Tarihi *</Text>
            <TouchableOpacity
              style={[s.input, { justifyContent: 'center' }]}
              onPress={() => setShowDatePicker(true)}
              activeOpacity={0.7}
            >
              <Text style={{ color: form.expiryDate ? '#111827' : '#9ca3af', fontSize: 15 }}>
                {form.expiryDate ? formatDate(form.expiryDate) : 'Tarih seçin…'}
              </Text>
            </TouchableOpacity>

            {/* iOS: overlay modal — inline spinner ekrana sığmıyor */}
            {Platform.OS === 'ios' && showDatePicker && (
              <Modal transparent animationType="slide" visible onRequestClose={() => setShowDatePicker(false)}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                  {/* Arka plan — dokunulunca kapat */}
                  <TouchableOpacity
                    style={[StyleSheet.absoluteFillObject, { backgroundColor: '#00000055' }]}
                    activeOpacity={1}
                    onPress={() => setShowDatePicker(false)}
                  />
                  {/* Picker kabı — plain View, TouchableOpacity değil */}
                  <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingBottom: 16 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4 }}>
                      <TouchableOpacity onPress={() => setShowDatePicker(false)} hitSlop={12}>
                        <Text style={{ color: '#1d4ed8', fontWeight: '700', fontSize: 15 }}>Tamam</Text>
                      </TouchableOpacity>
                    </View>
                    <DateTimePicker
                      value={pickerDate}
                      mode="date"
                      display="spinner"
                      onChange={onDateChange}
                      minimumDate={new Date()}
                      style={{ width: '100%' }}
                    />
                  </View>
                </View>
              </Modal>
            )}

            {/* Android: native dialog */}
            {Platform.OS === 'android' && showDatePicker && (
              <DateTimePicker
                value={pickerDate}
                mode="date"
                display="default"
                onChange={onDateChange}
                minimumDate={new Date()}
              />
            )}
          </View>
          )}

          {/* CONSUMABLE rozeti */}
          {form.productType === 'CONSUMABLE' && (
            <View style={{ marginBottom: 14, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#fff7ed', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6, borderWidth: 1, borderColor: '#fed7aa' }}>
                <Text style={{ color: '#c2410c', fontSize: 13, fontWeight: '600' }}>
                  🥤 Sarf Malzeme — SKT yok
                </Text>
              </View>
            </View>
          )}

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

          {/* Depo */}
          <Text style={s.fieldLabel}>Depo *</Text>
          {warehouses.length === 0 ? (
            <Text style={s.noData}>Depo bulunamadı</Text>
          ) : (
            warehouses.map((w) => (
              <SelectRow
                key={w.id}
                label={w.name}
                active={form.warehouseId === w.id}
                onPress={() => setForm((f) => ({ ...f, warehouseId: w.id, branchId: w.branchId }))}
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

          {/* Kaydet */}
          <TouchableOpacity
            style={[s.submitBtn, submitting && s.submitBtnDisabled]}
            onPress={onSubmit}
            disabled={submitting}
            activeOpacity={0.85}
          >
            {submitting
              ? <ActivityIndicator color="#fff" />
              : <Text style={s.submitText}>✓  Stok Girişini Kaydet</Text>
            }
          </TouchableOpacity>

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

// ─── BatchModal ─────────────────────────────────────────────────────────────

function BatchModal({
  visible, items, setItems, warehouses, suppliers,
  onClose, onSubmit, submitting, submitError,
}: {
  visible: boolean;
  items: BatchItem[];
  setItems: React.Dispatch<React.SetStateAction<BatchItem[]>>;
  warehouses: Warehouse[];
  suppliers: Supplier[];
  onClose: () => void;
  onSubmit: (warehouseId: string, branchId: string, supplierId: string) => void;
  submitting: boolean;
  submitError: string;
}) {
  const insets = useSafeAreaInsets();
  const [warehouseId, setWarehouseId] = useState('');
  const [branchId,    setBranchId]    = useState('');
  const [supplierId,  setSupplierId]  = useState('');
  const [err,         setErr]         = useState('');

  React.useEffect(() => {
    if (visible && warehouses.length > 0 && !warehouseId) {
      setWarehouseId(warehouses[0].id);
      setBranchId(warehouses[0].branchId);
    }
  }, [visible, warehouses]);

  function updateItem(key: string, field: keyof BatchItem, value: string) {
    setItems((prev) => prev.map((it) => (it.key === key ? { ...it, [field]: value } : it)));
  }

  function removeItem(key: string) {
    setItems((prev) => prev.filter((it) => it.key !== key));
  }

  function handleSubmit() {
    if (!warehouseId) { setErr('Depo seçmelisiniz'); return; }
    const missingDate = items.find((it) => it.productType !== 'CONSUMABLE' && !it.expiryDate);
    if (missingDate) { setErr(`"${missingDate.productName}" için SKT tarihi eksik`); return; }
    const badQty = items.find((it) => !it.quantity || parseInt(it.quantity, 10) <= 0);
    if (badQty) { setErr(`"${badQty.productName}" için geçersiz adet`); return; }
    setErr('');
    onSubmit(warehouseId, branchId, supplierId);
  }

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={[s.modalHeader, { paddingTop: insets.top + 12 }]}>
          <View style={{ flex: 1 }}>
            <Text style={s.modalTitle}>📦 Toplu Stok Girişi</Text>
            <Text style={s.modalSub}>
              {items.reduce((s, it) => s + (parseInt(it.quantity, 10) || 1), 0)} adet · {items.length} çeşit
            </Text>
          </View>
          <TouchableOpacity onPress={onClose} hitSlop={8} style={{ paddingLeft: 16 }}>
            <Text style={s.modalClose}>İptal</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={s.flex} contentContainerStyle={s.formContent} keyboardShouldPersistTaps="handled">
          {/* Ortak Alanlar */}
          <Text style={s.sectionLabel}>ORTAK ALANLAR</Text>
          <Text style={[s.fieldLabel, { marginTop: 8 }]}>Depo *</Text>
          {warehouses.map((w) => (
            <SelectRow
              key={w.id}
              label={w.name}
              active={warehouseId === w.id}
              onPress={() => { setWarehouseId(w.id); setBranchId(w.branchId); }}
            />
          ))}

          <Text style={[s.fieldLabel, { marginTop: 14 }]}>Tedarikçi (opsiyonel)</Text>
          <SelectRow label="Belirtilmedi" active={supplierId === ''} onPress={() => setSupplierId('')} />
          {suppliers.map((sup) => (
            <SelectRow key={sup.id} label={sup.name} active={supplierId === sup.id} onPress={() => setSupplierId(sup.id)} />
          ))}

          {/* Ürün Listesi */}
          <Text style={[s.sectionLabel, { marginTop: 20 }]}>ÜRÜNLER</Text>
          {items.map((item) => (
            <View key={item.key} style={s.batchCard}>
              <View style={s.batchCardHeader}>
                <Text style={s.batchCardName} numberOfLines={1}>{item.productName}</Text>
                <TouchableOpacity onPress={() => removeItem(item.key)} hitSlop={8}>
                  <Text style={s.batchRemove}>✕</Text>
                </TouchableOpacity>
              </View>
              <Text style={s.batchCardBarcode}>{item.barcode}</Text>

              <View style={s.batchCardRow}>
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Text style={s.fieldLabel}>Adet *</Text>
                  <TextInput
                    style={s.input}
                    value={item.quantity}
                    onChangeText={(v) => updateItem(item.key, 'quantity', v)}
                    keyboardType="number-pad"
                    placeholder="0"
                    placeholderTextColor="#9ca3af"
                  />
                </View>
                {item.productType !== 'CONSUMABLE' ? (
                  <View style={{ flex: 2 }}>
                    <Text style={s.fieldLabel}>Son Kullanma Tarihi *</Text>
                    <DatePickerField
                      value={item.expiryDate}
                      onChange={(v) => updateItem(item.key, 'expiryDate', v)}
                    />
                  </View>
                ) : (
                  <View style={{ flex: 2, justifyContent: 'flex-end', paddingBottom: 2 }}>
                    <View style={{ backgroundColor: '#fff7ed', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: '#fed7aa' }}>
                      <Text style={{ color: '#c2410c', fontSize: 12, fontWeight: '600' }}>🧴 Sarf · SKT yok</Text>
                    </View>
                  </View>
                )}
              </View>

              <View style={{ marginTop: 8 }}>
                <Text style={s.fieldLabel}>Lot No (opsiyonel)</Text>
                <TextInput
                  style={s.input}
                  value={item.lotNumber}
                  onChangeText={(v) => updateItem(item.key, 'lotNumber', v)}
                  placeholder="LOT-2025-01"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>
          ))}

          {(err || submitError) ? (
            <View style={{ marginTop: 8 }}>
              <ErrorMessage message={err || submitError} />
            </View>
          ) : null}

          <TouchableOpacity
            style={[s.submitBtn, (submitting || items.length === 0) && s.submitBtnDisabled]}
            onPress={handleSubmit}
            disabled={submitting || items.length === 0}
            activeOpacity={0.85}
          >
            {submitting
              ? <ActivityIndicator color="#fff" />
              : <Text style={s.submitText}>✓  {items.length} Ürünü Kaydet</Text>
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
  const [paused,       setPaused]       = useState(false);
  const [modalOpen,    setModalOpen]    = useState(false);
  const [form,         setForm]         = useState<ReceiveForm>(EMPTY_FORM);
  const [isNew,        setIsNew]        = useState(false);
  const [lookupErr,    setLookupErr]    = useState('');
  const [submitErr,    setSubmitErr]    = useState('');
  const [existingLots, setExistingLots] = useState<ExistingLot[]>([]);
  const [lotLoading,   setLotLoading]   = useState(false);

  // ─── Toplu Tarama ────────────────────────────────────────────────────────────
  const [batchMode,       setBatchMode]       = useState(false);
  const [batchItems,      setBatchItems]      = useState<BatchItem[]>([]);
  const [batchModal,      setBatchModal]      = useState(false);
  const [batchSubmitting, setBatchSubmitting] = useState(false);
  const [batchErr,        setBatchErr]        = useState('');

  // Her barkod için son okuma zamanını tutar — aynı barkodun kamera tarafından
  // art arda birden çok tetiklenmesini (debounce) önler.
  const scanCooldownRef = useRef<Map<string, number>>(new Map());

  // Depo + tedarikçi listelerini önceden çek
  const { data: warehouses = [] } = useQuery<Warehouse[]>({
    queryKey: ['warehouses'],
    queryFn:  () => api.get('/warehouses').then((r) => r.data),
    staleTime: 0, // Uygulama ön plana gelince her zaman yeniden çek
  });

  const { data: suppliers = [] } = useQuery<Supplier[]>({
    queryKey: ['suppliers'],
    queryFn:  () => api.get('/suppliers').then((r) => r.data),
  });

  // Stok teslim alma mutation
  const receiveMutation = useMutation({
    mutationFn: async (f: ReceiveForm) => {
      // Yeni ürün akışında product creation + stock receive TEK requestte gönderilir.
      // Vercel serverless'ta iki ayrı request farklı /tmp instance'ına düşebilir
      // (1. request ürünü oluşturur, 2. request onu bulamaz). Tek request bunu önler.
      const payload: Record<string, unknown> = {
        warehouseId: f.warehouseId,
        branchId:    f.branchId,
        supplierId:  f.supplierId  || undefined,
        expiryDate:  f.productType !== 'CONSUMABLE' ? f.expiryDate || undefined : undefined,
        quantity:    parseInt(f.quantity, 10),
        lotNumber:   f.lotNumber   || undefined,
        notes:       f.notes       || undefined,
      };

      if (isNew) {
        // productId yok — backend atomic olarak oluşturur
        payload.productBarcode = f.barcode;
        payload.productName    = f.productName;
        payload.productUnit    = f.productUnit || 'adet';
      } else {
        payload.productId = f.productId;
      }

      const res = await api.post<{ lot: { productId: string }; movement: object; productId: string }>(
        '/stock/receive',
        payload,
      );

      return {
        lot: res.data.lot,
        resolvedProductId: res.data.productId ?? res.data.lot.productId,
      };
    },
    onSuccess: (data, vars) => {
      qc.invalidateQueries({ queryKey: ['alert-summary'] });
      qc.invalidateQueries({ queryKey: ['alert-list-dashboard'] });

      Alert.alert(
        '✓ Stok Girişi Kaydedildi',
        `${vars.productName} için ${vars.quantity} adet eklendi.`,
        [
          {
            text: 'Aynı Ürün — Tekrar Giriş',
            onPress: () => {
              // Sadece değişen alanları sıfırla, ürün + depo + tedarikçi korunsun
              setForm((f) => ({ ...f, expiryDate: '', quantity: '', lotNumber: '', notes: '' }));
              setSubmitErr('');
              // Lot listesini yenile
              const pid = data.resolvedProductId;
              if (pid) {
                api.get(`/products/${pid}`)
                  .then((r) => setExistingLots(
                    (r.data.stockLots ?? []).filter((l: ExistingLot) => l.quantity > 0)
                  ))
                  .catch(() => {});
              }
            },
          },
          { text: 'Tamamlandı', onPress: reset },
        ],
      );
    },
    onError: (err: any) => {
      const msg =
        err.response?.data?.error ??
        err.response?.data?.fields?.map((fi: any) => fi.message).join(', ') ??
        'Kayıt başarısız';
      setSubmitErr(msg);
      Alert.alert('Sunucu Hatası', msg);
    },
  });

  function reset() {
    setForm(EMPTY_FORM);
    setModalOpen(false);
    setIsNew(false);
    setLookupErr('');
    setSubmitErr('');
    setExistingLots([]);
    setLotLoading(false);
    setPaused(false);
    // Toplu mod aktifse batchItems ve batchMode korunur (taramaya devam edilir)
  }

  // ─── Toplu kayıt ──────────────────────────────────────────────────────────
  async function submitBatch(warehouseId: string, branchId: string, supplierId: string) {
    setBatchSubmitting(true);
    setBatchErr('');
    let saved = 0;
    const errs: string[] = [];

    for (const item of batchItems) {
      try {
        await api.post('/stock/receive', {
          productId:  item.productId,
          warehouseId,
          branchId,
          supplierId: supplierId || undefined,
          expiryDate: item.productType !== 'CONSUMABLE' ? item.expiryDate || undefined : undefined,
          quantity:   parseInt(item.quantity, 10),
          lotNumber:  item.lotNumber || undefined,
        });
        saved++;
      } catch (e: any) {
        errs.push(`${item.productName}: ${e.response?.data?.error ?? 'hata'}`);
      }
    }

    setBatchSubmitting(false);
    if (errs.length === 0) {
      qc.invalidateQueries({ queryKey: ['alert-summary'] });
      qc.invalidateQueries({ queryKey: ['alert-list-dashboard'] });
      setBatchModal(false);
      setBatchItems([]);
      setBatchMode(false);
      Alert.alert('✓ Toplu Giriş Tamamlandı', `${saved} ürün başarıyla kaydedildi.`);
    } else {
      setBatchErr(`${saved} kaydedildi, ${errs.length} hata:\n${errs.join('\n')}`);
    }
  }

  const handleBarcode = useCallback(
    async ({ data: barcode }: { data: string }) => {
      if (paused) return;
      setPaused(true);
      setLookupErr('');

      const defaultWarehouse = warehouses[0];
      const defaultBranch    = defaultWarehouse?.branchId ?? '';

      // ─── Toplu mod ──────────────────────────────────────────────────────────
      if (batchMode) {
        // Debounce: aynı barkod 1500 ms içinde tekrar gelirse yoksay
        // (kamera saniyede onlarca kez onBarcodeScanned tetikler)
        const now = Date.now();
        const lastScan = scanCooldownRef.current.get(barcode) ?? 0;
        if (now - lastScan < 1500) {
          setPaused(false);
          return;
        }
        scanCooldownRef.current.set(barcode, now);

        // Aynı barkod zaten listede mi? → adeti artır
        const dup = batchItems.find((it) => it.barcode === barcode);
        if (dup) {
          Vibration.vibrate(60); // kısa titreşim (dıt bildirimi)
          setBatchItems((prev) =>
            prev.map((it) =>
              it.barcode === barcode
                ? { ...it, quantity: String(parseInt(it.quantity || '1', 10) + 1) }
                : it,
            ),
          );
          setPaused(false);
          return;
        }

        try {
          const { data: product } = await api.get<Product>(`/products/barcode/${barcode}`);
          Vibration.vibrate(60); // kısa titreşim (dıt bildirimi)
          setBatchItems((prev) => [
            ...prev,
            {
              key:         barcode + Date.now(),
              productId:   product.id,
              productName: product.name,
              productUnit: product.unit ?? 'adet',
              productType: product.productType ?? 'PERISHABLE',
              barcode,
              quantity:    '1',
              expiryDate:  '',
              lotNumber:   '',
            },
          ]);
          setPaused(false); // kamera aktif kalsın
        } catch (err: any) {
          if (err.response?.status === 404) {
            // Tanımsız barkod → tekli kayıt modalı aç
            setForm({ ...EMPTY_FORM, barcode, warehouseId: defaultWarehouse?.id ?? '', branchId: defaultBranch });
            setIsNew(true);
            setModalOpen(true);
            // paused=true kalır, modal kapanınca reset() ile false yapılır
          } else {
            setLookupErr('Bağlantı hatası — tekrar deneyin');
            setPaused(false);
          }
        }
        return;
      }

      // ─── Tekli mod ──────────────────────────────────────────────────────────
      setExistingLots([]);

      try {
        const { data: product } = await api.get<Product>(`/products/barcode/${barcode}`);

        let lots: ExistingLot[]  = [];
        let prefillWarehouseId   = defaultWarehouse?.id ?? '';
        let prefillBranchId      = defaultBranch;
        let prefillSupplierId    = '';
        let productUnit          = product.unit ?? 'adet';

        setLotLoading(true);
        try {
          const { data: full } = await api.get(`/products/${product.id}`);
          lots = (full.stockLots ?? []).filter((l: ExistingLot) => l.quantity > 0);

          if (lots.length > 0) {
            const nearest = lots.sort(
              (a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime(),
            )[0];
            const matchW = warehouses.find((w) => w.id === nearest.warehouse.id);
            if (matchW) { prefillWarehouseId = matchW.id; prefillBranchId = matchW.branchId; }
            if (nearest.supplier) prefillSupplierId = nearest.supplier.id;
          }
        } catch {
          // lot yüklenemezse varsayılanlarla devam et
        } finally {
          setLotLoading(false);
        }

        setExistingLots(lots);
        setForm({
          ...EMPTY_FORM,
          barcode,
          productId:   product.id,
          productName: product.name,
          productUnit,
          productType: product.productType ?? 'PERISHABLE',
          warehouseId: prefillWarehouseId,
          branchId:    prefillBranchId,
          supplierId:  prefillSupplierId,
        });
        setIsNew(false);
      } catch (err: any) {
        setLotLoading(false);
        if (err.response?.status === 404) {
          setForm({ ...EMPTY_FORM, barcode, warehouseId: defaultWarehouse?.id ?? '', branchId: defaultBranch });
          setIsNew(true);
        } else {
          setLookupErr('Bağlantı hatası — tekrar deneyin');
          setPaused(false);
          return;
        }
      }

      setModalOpen(true);
    },
    [paused, warehouses, batchMode, batchItems],
  );

  function handleSubmit() {
    setSubmitErr('');
    const f = form;

    if (f.productType !== 'CONSUMABLE' && !f.expiryDate) { setSubmitErr('Son kullanma tarihi seçmelisiniz'); return; }
    if (!f.quantity || parseInt(f.quantity, 10) <= 0) { setSubmitErr("Adet 0'dan büyük olmalı"); return; }
    if (!f.warehouseId) { setSubmitErr('Depo seçmelisiniz'); return; }
    if (isNew && !f.productName.trim()) { setSubmitErr('Yeni ürün için ürün adı zorunlu'); return; }

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
      {/* Toplu modda kamera her zaman aktif; tekli modda paused kontrolü */}
      {(!paused || batchMode) ? (
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

      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        {/* Üst bar: başlık + mod toggle */}
        <View style={[s.topBar, { paddingTop: insets.top + 10, flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 16 }]}>
          <View style={{ flex: 1 }}>
            <Text style={s.topTitle}>
              {batchMode ? '📋 Toplu Tarama' : 'Barkod Tara'}
            </Text>
            <Text style={s.topSub}>
              {batchMode
                ? 'Ürünleri tarayın — kamera aktif kalır'
                : 'Ürünü çerçeveye getirin'}
            </Text>
          </View>
          <TouchableOpacity
            style={[s.modeToggle, batchMode && s.modeToggleActive]}
            onPress={() => {
              if (batchMode && batchItems.length > 0) {
                Alert.alert(
                  'Toplu Modu Kapat',
                  'Taranmış ürünler silinecek. Devam edilsin mi?',
                  [
                    { text: 'Vazgeç', style: 'cancel' },
                    { text: 'Kapat', style: 'destructive', onPress: () => { setBatchMode(false); setBatchItems([]); } },
                  ],
                );
              } else {
                setBatchMode((m) => !m);
                setBatchItems([]);
              }
            }}
          >
            <Text style={[s.modeToggleText, batchMode && s.modeToggleTextActive]}>
              {batchMode ? '✓ Toplu' : 'Toplu Mod'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={s.frameWrap}>
          <View style={s.frame}>
            {[
              { top: 0,    left: 0,    borderTopWidth: 3,    borderLeftWidth: 3 },
              { top: 0,    right: 0,   borderTopWidth: 3,    borderRightWidth: 3 },
              { bottom: 0, left: 0,    borderBottomWidth: 3, borderLeftWidth: 3 },
              { bottom: 0, right: 0,   borderBottomWidth: 3, borderRightWidth: 3 },
            ].map((style, i) => (
              <View key={i} style={[s.corner, style]} />
            ))}
          </View>
          {/* Toplu modda taranan ürün sayısı */}
          {batchMode && batchItems.length > 0 && (
            <View style={s.batchBadge}>
              <Text style={s.batchBadgeText}>
                {batchItems.reduce((s, it) => s + (parseInt(it.quantity, 10) || 1), 0)} adet
                {'  ·  '}{batchItems.length} çeşit
              </Text>
            </View>
          )}
          {lotLoading && (
            <View style={s.lotLoadingBox}>
              <ActivityIndicator color="#60a5fa" size="small" />
              <Text style={s.lotLoadingText}>Stok bilgisi yükleniyor…</Text>
            </View>
          )}
          <Text style={s.frameHint}>EAN-13, EAN-8, QR, Code128</Text>
        </View>

        <View style={[s.bottomBar, { paddingBottom: insets.bottom + 16 }]}>
          {lookupErr ? (
            <View style={s.errBox}>
              <Text style={s.errText}>{lookupErr}</Text>
              <TouchableOpacity onPress={() => { setLookupErr(''); setPaused(false); }}>
                <Text style={s.errRetry}>Tekrar Dene</Text>
              </TouchableOpacity>
            </View>
          ) : batchMode && batchItems.length > 0 ? (
            <View style={s.batchBar}>
              <View style={{ flex: 1 }}>
                <Text style={s.batchBarTitle}>
                  {batchItems.reduce((s, it) => s + (parseInt(it.quantity, 10) || 1), 0)} adet · {batchItems.length} çeşit
                </Text>
                <Text style={s.batchBarSub} numberOfLines={1}>
                  {batchItems.map((it) => it.productName).join(', ')}
                </Text>
              </View>
              <TouchableOpacity style={s.batchEnterBtn} onPress={() => setBatchModal(true)}>
                <Text style={s.batchEnterText}>Giriş Yap →</Text>
              </TouchableOpacity>
            </View>
          ) : paused && !batchMode ? (
            <TouchableOpacity style={s.resetBtn} onPress={reset}>
              <Text style={s.resetText}>↩ Tekrar Tara</Text>
            </TouchableOpacity>
          ) : (
            <Text style={s.scanningText}>
              {batchMode ? 'Taranıyor… (kamera aktif kalır)' : 'Taranıyor...'}
            </Text>
          )}
        </View>
      </View>

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
        existingLots={existingLots}
      />

      <BatchModal
        visible={batchModal}
        items={batchItems}
        setItems={setBatchItems}
        warehouses={warehouses}
        suppliers={suppliers}
        onClose={() => setBatchModal(false)}
        onSubmit={submitBatch}
        submitting={batchSubmitting}
        submitError={batchErr}
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

  // Overlay
  topBar: { paddingHorizontal: 20, paddingBottom: 12, alignItems: 'center' },
  topTitle: { fontSize: 18, fontWeight: '700', color: '#fff', textShadowColor: '#0008', textShadowRadius: 6 },
  topSub:   { fontSize: 12, color: '#e0e0e0', marginTop: 4, textShadowColor: '#0008', textShadowRadius: 4 },

  frameWrap: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  frame: { width: FRAME_SIZE, height: FRAME_SIZE * 0.65, position: 'relative' },
  corner: {
    position: 'absolute', width: 28, height: 28,
    borderColor: '#60a5fa', borderRadius: 2,
  },
  frameHint: { marginTop: 16, color: '#94a3b8', fontSize: 11, textShadowColor: '#0006', textShadowRadius: 4 },

  lotLoadingBox: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    backgroundColor: '#1e3a5fcc', borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 7, marginTop: 12,
  },
  lotLoadingText: { color: '#93c5fd', fontSize: 12 },

  bottomBar: { paddingHorizontal: 24, alignItems: 'center' },
  scanningText: { color: '#94a3b8', fontSize: 13 },
  resetBtn: {
    backgroundColor: '#1d4ed8cc',
    paddingHorizontal: 28, paddingVertical: 12, borderRadius: 24,
  },
  resetText: { color: '#fff', fontWeight: '700', fontSize: 15 },

  errBox: {
    backgroundColor: '#fef2f2ee', borderRadius: 10,
    padding: 14, alignItems: 'center', gap: 8,
  },
  errText:  { color: '#dc2626', fontWeight: '600', textAlign: 'center' },
  errRetry: { color: '#1d4ed8', fontWeight: '700' },

  // İzin
  permText:    { fontSize: 16, color: '#374151', marginBottom: 16 },
  permBtn:     { backgroundColor: '#1d4ed8', paddingHorizontal: 28, paddingVertical: 13, borderRadius: 12 },
  permBtnText: { color: '#fff', fontWeight: '700', fontSize: 15 },

  // Modal
  modalHeader: {
    backgroundColor: '#1d4ed8',
    paddingHorizontal: 16, paddingBottom: 16,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end',
  },
  modalTitle: { fontSize: 17, fontWeight: '700', color: '#fff' },
  modalSub:   { fontSize: 11, color: '#93c5fd', marginTop: 3 },
  modalClose: { fontSize: 15, color: '#93c5fd', fontWeight: '600' },
  formContent: { padding: 16 },

  // ProductSummaryCard
  summaryCard: {
    borderLeftWidth: 4, borderRadius: 10,
    padding: 12, marginBottom: 16,
  },
  summaryHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 10,
  },
  summaryTitle:     { fontSize: 11, fontWeight: '700', color: '#6b7280', letterSpacing: 0.8 },
  totalBadge:       { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  totalBadgeText:   { color: '#fff', fontSize: 12, fontWeight: '700' },
  summaryEmpty:     { color: '#6b7280', fontSize: 13, fontStyle: 'italic' },
  lotRow:           { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 8 },
  statusDot:        { width: 8, height: 8, borderRadius: 4, flexShrink: 0 },
  lotDate:          { fontSize: 13, fontWeight: '600', color: '#111827' },
  lotMeta:          { fontSize: 11, color: '#6b7280', marginTop: 1 },
  statusPill:       { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, flexShrink: 0 },
  statusPillText:   { fontSize: 11, fontWeight: '600' },
  summaryMore:      { fontSize: 11, color: '#9ca3af', marginTop: 2, fontStyle: 'italic' },

  // Form elemanları
  fieldLabel:    { fontSize: 13, fontWeight: '600', color: '#374151', marginBottom: 6 },
  input: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#d1d5db',
    borderRadius: 10, paddingHorizontal: 14, paddingVertical: 11,
    fontSize: 15, color: '#111827',
  },
  inputDisabled: { backgroundColor: '#f9fafb', color: '#6b7280' },

  selectRow: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#d1d5db',
    borderRadius: 8, paddingHorizontal: 14, paddingVertical: 11, marginBottom: 6,
  },
  selectRowActive:   { borderColor: '#1d4ed8', backgroundColor: '#eff6ff' },
  selectLabel:       { fontSize: 14, color: '#374151' },
  selectLabelActive: { color: '#1d4ed8', fontWeight: '700' },

  noData: { color: '#9ca3af', fontSize: 13, marginBottom: 8 },

  newProductBanner: {
    backgroundColor: '#fffbeb', borderRadius: 10,
    padding: 12, borderLeftWidth: 4, borderLeftColor: '#f59e0b', marginBottom: 16,
  },
  newProductText: { color: '#92400e', fontSize: 13, lineHeight: 19 },

  submitBtn:         { backgroundColor: '#16a34a', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 20 },
  submitBtnDisabled: { opacity: 0.6 },
  submitText:        { color: '#fff', fontWeight: '700', fontSize: 16 },

  // Mod toggle
  modeToggle:           { backgroundColor: '#ffffff33', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: '#ffffff44' },
  modeToggleActive:     { backgroundColor: '#1d4ed8', borderColor: '#1d4ed8' },
  modeToggleText:       { color: '#e0e0e0', fontSize: 12, fontWeight: '600' },
  modeToggleTextActive: { color: '#fff' },

  // Toplu mod kamera rozeti
  batchBadge:     { backgroundColor: '#1d4ed8cc', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6, marginTop: 12 },
  batchBadgeText: { color: '#fff', fontSize: 13, fontWeight: '700' },

  // Toplu mod alt bar
  batchBar:       { backgroundColor: '#1d4ed8f0', borderRadius: 14, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 4 },
  batchBarTitle:  { color: '#fff', fontWeight: '700', fontSize: 14 },
  batchBarSub:    { color: '#93c5fd', fontSize: 11, marginTop: 2 },
  batchEnterBtn:  { backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 9 },
  batchEnterText: { color: '#1d4ed8', fontWeight: '700', fontSize: 13 },

  // BatchModal — kart ve ortak etiketler
  sectionLabel:    { fontSize: 11, fontWeight: '700', color: '#6b7280', letterSpacing: 0.8, marginBottom: 4 },
  batchCard:       { backgroundColor: '#f9fafb', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 10, padding: 12, marginBottom: 10 },
  batchCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 },
  batchCardName:   { flex: 1, fontSize: 14, fontWeight: '700', color: '#111827' },
  batchRemove:     { fontSize: 16, color: '#9ca3af', paddingLeft: 8 },
  batchCardBarcode: { fontSize: 11, color: '#9ca3af', marginBottom: 10 },
  batchCardRow:    { flexDirection: 'row', alignItems: 'flex-end' },
});
