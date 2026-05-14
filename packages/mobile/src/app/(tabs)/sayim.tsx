import React, { useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal,
  ScrollView, TextInput, Alert, ActivityIndicator,
  KeyboardAvoidingView, Platform, FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import { useAuth } from '../../lib/AuthContext';
import ErrorMessage from '../../components/ErrorMessage';

// ─── Tipler ───────────────────────────────────────────────────────────────────

interface InventoryCountItem {
  id: string;
  productId: string;
  product: { id: string; name: string; unit: string; productType: string };
  warehouseId: string;
  warehouse: { id: string; name: string };
  systemQuantity: number;
  countedQuantity: number | null;
  difference: number | null;
  notes: string | null;
}

interface InventoryCount {
  id: string;
  period: string;
  status: 'DRAFT' | 'CONFIRMED';
  notes: string | null;
  branchId: string;
  branch: { id: string; name: string };
  createdAt: string;
  confirmedAt: string | null;
  creator: { id: string; name: string };
  confirmer: { id: string; name: string } | null;
  items: InventoryCountItem[];
  _count?: { items: number };
}

// ─── Yardımcı Fonksiyonlar ────────────────────────────────────────────────────

function getCurrentPeriod() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

function formatPeriod(period: string) {
  const [year, month] = period.split('-');
  const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

// ─── CountItemRow ─────────────────────────────────────────────────────────────

function CountItemRow({
  item,
  onSave,
  saving,
}: {
  item: InventoryCountItem;
  onSave: (id: string, qty: number, notes: string) => void;
  saving: boolean;
}) {
  const [qty,   setQty]   = useState(item.countedQuantity?.toString() ?? '');
  const [notes, setNotes] = useState(item.notes ?? '');
  const [dirty, setDirty] = useState(false);

  const diff = qty !== '' ? parseInt(qty, 10) - item.systemQuantity : null;

  return (
    <View style={cs.itemCard}>
      <View style={cs.itemHeader}>
        <View style={{ flex: 1 }}>
          <Text style={cs.itemName}>{item.product.name}</Text>
          <Text style={cs.itemSub}>{item.warehouse.name} · Sistem: {item.systemQuantity} {item.product.unit}</Text>
        </View>
        {item.countedQuantity !== null && (
          <View style={[cs.savedBadge, diff !== 0 && diff !== null ? cs.savedBadgeDiff : null]}>
            <Text style={cs.savedBadgeText}>
              {diff !== null && diff !== 0 ? (diff > 0 ? `+${diff}` : `${diff}`) : '✓'}
            </Text>
          </View>
        )}
      </View>

      <View style={cs.itemRow}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <Text style={cs.fieldLabel}>Sayılan Miktar</Text>
          <TextInput
            style={cs.input}
            value={qty}
            onChangeText={(v) => { setQty(v); setDirty(true); }}
            keyboardType="number-pad"
            placeholder={`Sistem: ${item.systemQuantity}`}
            placeholderTextColor="#9ca3af"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={cs.fieldLabel}>Not (opsiyonel)</Text>
          <TextInput
            style={cs.input}
            value={notes}
            onChangeText={(v) => { setNotes(v); setDirty(true); }}
            placeholder="Not…"
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      {diff !== null && diff !== 0 && (
        <Text style={[cs.diffText, diff < 0 ? cs.diffNeg : cs.diffPos]}>
          {diff > 0 ? `+${diff} fazla` : `${Math.abs(diff)} eksik`}
        </Text>
      )}

      {dirty && (
        <TouchableOpacity
          style={[cs.saveBtn, saving && cs.saveBtnDisabled]}
          onPress={() => {
            if (qty === '' || parseInt(qty, 10) < 0) {
              Alert.alert('Hata', 'Geçerli bir miktar girin');
              return;
            }
            onSave(item.id, parseInt(qty, 10), notes);
            setDirty(false);
          }}
          disabled={saving}
          activeOpacity={0.8}
        >
          <Text style={cs.saveBtnText}>{saving ? '…' : 'Kaydet'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// ─── CountDetailModal ─────────────────────────────────────────────────────────

function CountDetailModal({
  count,
  visible,
  onClose,
}: {
  count: InventoryCount | null;
  visible: boolean;
  onClose: () => void;
}) {
  const qc     = useQueryClient();
  const insets = useSafeAreaInsets();
  const [savingItemId, setSavingItemId] = useState<string | null>(null);
  const [err,          setErr]          = useState('');

  const { data: fullCount, isLoading } = useQuery<InventoryCount>({
    queryKey: ['inventory-count', count?.id],
    queryFn:  () => api.get(`/stock/counts/${count!.id}`).then((r) => r.data),
    enabled:  !!count?.id && visible,
    staleTime: 0,
  });

  const updateMutation = useMutation({
    mutationFn: ({ itemId, countedQuantity, notes }: { itemId: string; countedQuantity: number; notes: string }) =>
      api.patch(`/stock/counts/${count!.id}/items/${itemId}`, { countedQuantity, notes }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['inventory-count', count?.id] });
      qc.invalidateQueries({ queryKey: ['inventory-counts'] });
    },
    onError: (e: any) => setErr(e.response?.data?.error ?? 'Kayıt başarısız'),
    onSettled: () => setSavingItemId(null),
  });

  function handleSave(itemId: string, qty: number, notes: string) {
    setSavingItemId(itemId);
    setErr('');
    updateMutation.mutate({ itemId, countedQuantity: qty, notes });
  }

  const items      = fullCount?.items ?? [];
  const counted    = items.filter((it) => it.countedQuantity !== null).length;
  const pct        = items.length > 0 ? Math.round((counted / items.length) * 100) : 0;
  const isDraft    = fullCount?.status === 'DRAFT';

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <View style={[cs.flex, { backgroundColor: '#f9fafb' }]}>
        {/* Header */}
        <View style={[cs.detailHeader, { paddingTop: insets.top + 12 }]}>
          <View style={{ flex: 1 }}>
            <Text style={cs.detailTitle}>
              {count ? formatPeriod(count.period) : ''} Sayımı
            </Text>
            <Text style={cs.detailSub}>
              {fullCount?.branch?.name ?? ''} · {counted}/{items.length} tamamlandı
            </Text>
          </View>
          <TouchableOpacity onPress={onClose} hitSlop={8} style={{ paddingLeft: 16 }}>
            <Text style={{ color: '#1d4ed8', fontWeight: '700', fontSize: 15 }}>Kapat</Text>
          </TouchableOpacity>
        </View>

        {/* Progress bar */}
        <View style={cs.progressBar}>
          <View style={[cs.progressFill, { width: `${pct}%` as any }]} />
        </View>

        {isLoading ? (
          <View style={cs.center}>
            <ActivityIndicator color="#1d4ed8" />
          </View>
        ) : (
          <>
            {!isDraft && (
              <View style={cs.confirmedBanner}>
                <Text style={cs.confirmedText}>✓ Bu sayım onaylandı — düzenlenemez</Text>
              </View>
            )}

            {err ? (
              <View style={{ margin: 16 }}>
                <ErrorMessage message={err} />
              </View>
            ) : null}

            <FlatList
              data={items}
              keyExtractor={(it) => it.id}
              contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 20 }}
              renderItem={({ item }) => (
                isDraft ? (
                  <CountItemRow
                    item={item}
                    onSave={handleSave}
                    saving={savingItemId === item.id}
                  />
                ) : (
                  <View style={cs.itemCard}>
                    <Text style={cs.itemName}>{item.product.name}</Text>
                    <Text style={cs.itemSub}>
                      {item.warehouse.name} · Sistem: {item.systemQuantity} · Sayılan: {item.countedQuantity ?? '—'}
                    </Text>
                    {item.difference !== null && item.difference !== 0 && (
                      <Text style={[cs.diffText, item.difference < 0 ? cs.diffNeg : cs.diffPos]}>
                        {item.difference > 0 ? `+${item.difference} fazla` : `${Math.abs(item.difference)} eksik`}
                      </Text>
                    )}
                  </View>
                )
              )}
              ListEmptyComponent={
                <Text style={{ textAlign: 'center', color: '#6b7280', marginTop: 32 }}>
                  Bu sayımda kalem yok
                </Text>
              }
            />

            {isDraft && (
              <View style={[cs.bottomHint, { paddingBottom: insets.bottom + 12 }]}>
                <Text style={cs.bottomHintText}>
                  💡 Tamamlandığında web panelinden onaylanır
                </Text>
              </View>
            )}
          </>
        )}
      </View>
    </Modal>
  );
}

// ─── Ana Ekran ────────────────────────────────────────────────────────────────

export default function SayimScreen() {
  const qc         = useQueryClient();
  const insets     = useSafeAreaInsets();
  const { user }   = useAuth();

  const [selectedCount, setSelectedCount] = useState<InventoryCount | null>(null);
  const [detailOpen,    setDetailOpen]    = useState(false);
  const [newModal,      setNewModal]      = useState(false);
  const [period,        setPeriod]        = useState(getCurrentPeriod());
  const [notes,         setNotes]         = useState('');
  const [createErr,     setCreateErr]     = useState('');

  const { data: counts = [], isLoading, refetch } = useQuery<InventoryCount[]>({
    queryKey: ['inventory-counts'],
    queryFn:  () => api.get('/stock/counts').then((r) => r.data),
    staleTime: 0,
  });

  const createMutation = useMutation({
    mutationFn: ({ branchId, period: p, notes: n }: { branchId: string; period: string; notes: string }) =>
      api.post('/stock/counts', { branchId, period: p, notes: n }),
    onSuccess: (resp) => {
      qc.invalidateQueries({ queryKey: ['inventory-counts'] });
      setNewModal(false);
      setPeriod(getCurrentPeriod());
      setNotes('');
      setCreateErr('');
      // Immediately open the newly created count
      setSelectedCount(resp.data);
      setDetailOpen(true);
    },
    onError: (e: any) => setCreateErr(e.response?.data?.error ?? 'Sayım oluşturulamadı'),
  });

  function handleCreate() {
    if (!user?.branchId) {
      setCreateErr('Hesabınıza şube atanmamış — yöneticinizle iletişime geçin');
      return;
    }
    createMutation.mutate({ branchId: user.branchId, period, notes });
  }

  const drafts    = counts.filter((c) => c.status === 'DRAFT');
  const confirmed = counts.filter((c) => c.status === 'CONFIRMED');

  return (
    <View style={[cs.flex, { backgroundColor: '#f9fafb' }]}>
      {/* Başlık */}
      <View style={[cs.header, { paddingTop: insets.top + 16 }]}>
        <Text style={cs.title}>Aylık Sayım</Text>
        <Text style={cs.sub}>Stok sayımı başlat veya devam et</Text>
      </View>

      <ScrollView
        style={cs.flex}
        contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Yeni Sayım Başlat */}
        <TouchableOpacity
          style={cs.newCountBtn}
          onPress={() => { setNewModal(true); setCreateErr(''); }}
          activeOpacity={0.85}
        >
          <Text style={cs.newCountBtnText}>+ Yeni Sayım Başlat</Text>
        </TouchableOpacity>

        {isLoading && (
          <ActivityIndicator color="#1d4ed8" style={{ marginTop: 32 }} />
        )}

        {/* Devam Eden Sayımlar */}
        {drafts.length > 0 && (
          <>
            <Text style={cs.sectionLabel}>DEVAM EDEN</Text>
            {drafts.map((c) => (
              <TouchableOpacity
                key={c.id}
                style={[cs.countCard, cs.countCardDraft]}
                onPress={() => { setSelectedCount(c); setDetailOpen(true); }}
                activeOpacity={0.8}
              >
                <View style={cs.countCardRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={cs.countPeriod}>{formatPeriod(c.period)}</Text>
                    <Text style={cs.countMeta}>{c.branch?.name}</Text>
                  </View>
                  <View style={cs.draftBadge}>
                    <Text style={cs.draftBadgeText}>DEVAM</Text>
                  </View>
                </View>
                {c._count && (
                  <Text style={cs.countItems}>{c._count.items} kalem</Text>
                )}
              </TouchableOpacity>
            ))}
          </>
        )}

        {/* Onaylanmış Sayımlar */}
        {confirmed.length > 0 && (
          <>
            <Text style={[cs.sectionLabel, { marginTop: 20 }]}>TAMAMLANAN</Text>
            {confirmed.slice(0, 5).map((c) => (
              <TouchableOpacity
                key={c.id}
                style={[cs.countCard, cs.countCardDone]}
                onPress={() => { setSelectedCount(c); setDetailOpen(true); }}
                activeOpacity={0.8}
              >
                <View style={cs.countCardRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={[cs.countPeriod, { color: '#374151' }]}>{formatPeriod(c.period)}</Text>
                    <Text style={cs.countMeta}>{c.branch?.name}</Text>
                  </View>
                  <View style={cs.doneBadge}>
                    <Text style={cs.doneBadgeText}>✓</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </>
        )}

        {!isLoading && counts.length === 0 && (
          <View style={cs.empty}>
            <Text style={cs.emptyEmoji}>📋</Text>
            <Text style={cs.emptyText}>Henüz sayım başlatılmamış</Text>
            <Text style={cs.emptySub}>Yukarıdaki butona basarak başlayın</Text>
          </View>
        )}
      </ScrollView>

      {/* Yeni Sayım Modal */}
      <Modal
        visible={newModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setNewModal(false)}
      >
        <KeyboardAvoidingView style={cs.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={[cs.modalHeader, { paddingTop: insets.top + 12 }]}>
            <Text style={cs.modalTitle}>Yeni Sayım Başlat</Text>
            <TouchableOpacity onPress={() => setNewModal(false)} hitSlop={8}>
              <Text style={{ color: '#1d4ed8', fontWeight: '700', fontSize: 15 }}>İptal</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={cs.flex}
            contentContainerStyle={{ padding: 20 }}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={cs.fieldLabel}>Dönem (YYYY-AA) *</Text>
            <TextInput
              style={cs.input}
              value={period}
              onChangeText={setPeriod}
              placeholder="2025-06"
              placeholderTextColor="#9ca3af"
              autoCapitalize="none"
            />

            <Text style={[cs.fieldLabel, { marginTop: 14 }]}>Not (opsiyonel)</Text>
            <TextInput
              style={[cs.input, { height: 72, textAlignVertical: 'top' }]}
              value={notes}
              onChangeText={setNotes}
              placeholder="Sayım notu…"
              placeholderTextColor="#9ca3af"
              multiline
            />

            {!user?.branchId && (
              <View style={cs.warningBox}>
                <Text style={cs.warningText}>⚠️ Hesabınıza şube atanmamış. Yöneticinizle iletişime geçin.</Text>
              </View>
            )}

            {createErr ? (
              <View style={{ marginTop: 12 }}>
                <ErrorMessage message={createErr} />
              </View>
            ) : null}

            <TouchableOpacity
              style={[cs.submitBtn, (createMutation.isPending || !user?.branchId) && cs.submitBtnDisabled]}
              onPress={handleCreate}
              disabled={createMutation.isPending || !user?.branchId}
              activeOpacity={0.85}
            >
              {createMutation.isPending
                ? <ActivityIndicator color="#fff" />
                : <Text style={cs.submitBtnText}>Sayımı Başlat →</Text>
              }
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>

      {/* Sayım Detay Modal */}
      <CountDetailModal
        count={selectedCount}
        visible={detailOpen}
        onClose={() => { setDetailOpen(false); refetch(); }}
      />
    </View>
  );
}

// ─── Stiller ─────────────────────────────────────────────────────────────────

const cs = StyleSheet.create({
  flex: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  header: {
    backgroundColor: '#1d4ed8',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: { fontSize: 24, fontWeight: '700', color: '#fff' },
  sub:   { fontSize: 13, color: '#bfdbfe', marginTop: 4 },

  sectionLabel: {
    fontSize: 11, fontWeight: '700', color: '#6b7280',
    letterSpacing: 1, marginBottom: 8, marginTop: 8,
  },

  newCountBtn: {
    backgroundColor: '#1d4ed8',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#1d4ed8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  newCountBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },

  countCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
  },
  countCardDraft: { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' },
  countCardDone:  { backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' },
  countCardRow:   { flexDirection: 'row', alignItems: 'center' },
  countPeriod:    { fontSize: 17, fontWeight: '700', color: '#1d4ed8' },
  countMeta:      { fontSize: 13, color: '#6b7280', marginTop: 2 },
  countItems:     { fontSize: 12, color: '#6b7280', marginTop: 6 },

  draftBadge: {
    backgroundColor: '#dbeafe', borderRadius: 6,
    paddingHorizontal: 8, paddingVertical: 4,
  },
  draftBadgeText: { fontSize: 11, fontWeight: '700', color: '#1d4ed8' },
  doneBadge: {
    backgroundColor: '#dcfce7', borderRadius: 6,
    paddingHorizontal: 8, paddingVertical: 4,
  },
  doneBadgeText: { fontSize: 14, fontWeight: '700', color: '#16a34a' },

  empty: { alignItems: 'center', marginTop: 60 },
  emptyEmoji: { fontSize: 48, marginBottom: 12 },
  emptyText:  { fontSize: 16, fontWeight: '600', color: '#374151' },
  emptySub:   { fontSize: 13, color: '#9ca3af', marginTop: 6 },

  // Modal
  modalHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingBottom: 12,
    backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e5e7eb',
  },
  modalTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },

  fieldLabel: { fontSize: 12, fontWeight: '600', color: '#374151', marginBottom: 6 },
  input: {
    borderWidth: 1, borderColor: '#d1d5db', borderRadius: 10,
    paddingHorizontal: 12, paddingVertical: 10,
    fontSize: 14, color: '#111827', backgroundColor: '#fff',
  },
  submitBtn: {
    marginTop: 24, backgroundColor: '#1d4ed8', borderRadius: 12,
    paddingVertical: 14, alignItems: 'center',
  },
  submitBtnDisabled: { opacity: 0.5 },
  submitBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },

  warningBox: {
    marginTop: 12, backgroundColor: '#fffbeb', borderRadius: 8,
    padding: 12, borderWidth: 1, borderColor: '#fde68a',
  },
  warningText: { color: '#92400e', fontSize: 13 },

  // Detail Modal
  detailHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingBottom: 12,
    backgroundColor: '#1d4ed8',
  },
  detailTitle: { fontSize: 18, fontWeight: '700', color: '#fff' },
  detailSub:   { fontSize: 13, color: '#bfdbfe', marginTop: 2 },

  progressBar: { height: 4, backgroundColor: '#e5e7eb' },
  progressFill: { height: 4, backgroundColor: '#22c55e' },

  confirmedBanner: {
    backgroundColor: '#dcfce7', paddingVertical: 8, paddingHorizontal: 16,
    borderBottomWidth: 1, borderBottomColor: '#bbf7d0',
  },
  confirmedText: { color: '#15803d', fontSize: 13, fontWeight: '600', textAlign: 'center' },

  // Item card
  itemCard: {
    backgroundColor: '#fff', borderRadius: 12, padding: 14,
    marginBottom: 10, borderWidth: 1, borderColor: '#e5e7eb',
  },
  itemHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  itemName:   { fontSize: 15, fontWeight: '600', color: '#111827' },
  itemSub:    { fontSize: 12, color: '#6b7280', marginTop: 2 },

  savedBadge: {
    backgroundColor: '#dcfce7', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4,
    minWidth: 36, alignItems: 'center',
  },
  savedBadgeDiff: { backgroundColor: '#fee2e2' },
  savedBadgeText: { fontSize: 12, fontWeight: '700', color: '#15803d' },

  itemRow: { flexDirection: 'row', alignItems: 'flex-start' },

  diffText:  { fontSize: 12, fontWeight: '600', marginTop: 6 },
  diffNeg:   { color: '#dc2626' },
  diffPos:   { color: '#16a34a' },

  saveBtn: {
    marginTop: 10, backgroundColor: '#1d4ed8', borderRadius: 8,
    paddingVertical: 8, alignItems: 'center',
  },
  saveBtnDisabled: { opacity: 0.5 },
  saveBtnText: { color: '#fff', fontSize: 13, fontWeight: '600' },

  bottomHint: {
    backgroundColor: '#f8fafc', borderTopWidth: 1, borderTopColor: '#e5e7eb',
    paddingVertical: 10, paddingHorizontal: 16,
  },
  bottomHintText: { fontSize: 12, color: '#6b7280', textAlign: 'center' },
});
