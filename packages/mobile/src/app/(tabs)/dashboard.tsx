import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  RefreshControl, TouchableOpacity, ActivityIndicator,
  Modal, FlatList,
} from 'react-native';
import { router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import api from '../../lib/api';
import { useAuth } from '../../lib/AuthContext';
import { formatDate, daysLeftLabel, STATUS_COLOR, STATUS_BG } from '../../lib/utils';
import { AlertSummary, StockLot, ExpiryStatus, Product } from '../../types';
import StatusBadge from '../../components/StatusBadge';

// ─── Stat Kartı ──────────────────────────────────────────────────────────────

function StatCard({
  label, value, color, textColor = '#fff',
}: {
  label: string; value: number; color: string; textColor?: string;
}) {
  return (
    <View style={[s.stat, { backgroundColor: color }]}>
      <Text style={[s.statValue, { color: textColor }]}>{value}</Text>
      <Text style={[s.statLabel, { color: textColor + 'cc' }]}>{label}</Text>
    </View>
  );
}

// ─── Lot Satırı ──────────────────────────────────────────────────────────────

function LotRow({ lot, onPress }: { lot: StockLot; onPress: () => void }) {
  const st  = lot.status as ExpiryStatus;
  const col = STATUS_COLOR[st];
  const bg  = STATUS_BG[st];
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[s.lotRow, { borderLeftColor: col, backgroundColor: bg }]}
    >
      <View style={s.lotMain}>
        <Text style={s.lotName} numberOfLines={1}>{lot.product.name}</Text>
        <Text style={s.lotMeta}>
          {lot.quantity} {lot.product.unit} · {lot.warehouse.name}
        </Text>
        <Text style={s.lotDate}>{formatDate(lot.expiryDate)}</Text>
      </View>
      <View style={s.lotRight}>
        <StatusBadge status={st} size="sm" />
        <Text style={[s.lotDays, { color: col }]}>
          {daysLeftLabel(lot.expiryDate)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// ─── Ürün Detay Satırı ────────────────────────────────────────────────────────

interface DetailLot {
  id: string;
  expiryDate: string;
  quantity: number;
  status: ExpiryStatus;
  lotNumber: string | null;
  warehouse: { id: string; name: string };
  supplier:  { id: string; name: string } | null;
}

function DetailLotRow({ lot, unit }: { lot: DetailLot; unit: string }) {
  const st  = lot.status as ExpiryStatus;
  const col = STATUS_COLOR[st];
  const bg  = STATUS_BG[st];
  return (
    <View style={[s.detailLotRow, { borderLeftColor: col, backgroundColor: bg }]}>
      <View style={{ flex: 1 }}>
        <Text style={s.detailWarehouse}>{lot.warehouse.name}</Text>
        {lot.lotNumber ? (
          <Text style={s.detailLotNo}>Lot: {lot.lotNumber}</Text>
        ) : null}
        {lot.supplier ? (
          <Text style={s.detailSupplier}>Tedarikçi: {lot.supplier.name}</Text>
        ) : null}
        <Text style={s.detailExpiry}>SKT: {formatDate(lot.expiryDate)}</Text>
      </View>
      <View style={{ alignItems: 'flex-end', gap: 4 }}>
        <Text style={s.detailQty}>{lot.quantity} {unit}</Text>
        <StatusBadge status={st} size="sm" />
        <Text style={[s.detailDays, { color: col }]}>{daysLeftLabel(lot.expiryDate)}</Text>
      </View>
    </View>
  );
}

// ─── Ürün Detay Modal ─────────────────────────────────────────────────────────

function ProductDetailModal({
  productId,
  onClose,
}: {
  productId: string | null;
  onClose: () => void;
}) {
  const { data, isLoading } = useQuery<Product & { stockLots: DetailLot[] }>({
    queryKey: ['product-detail', productId],
    queryFn:  () => api.get(`/products/${productId}`).then((r) => r.data),
    enabled:  !!productId,
  });

  const activeLots = (data?.stockLots ?? []).filter((l) => l.quantity > 0);
  const totalStock = activeLots.reduce((s, l) => s + l.quantity, 0);

  return (
    <Modal
      visible={!!productId}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={s.modalOverlay}>
        <TouchableOpacity style={StyleSheet.absoluteFillObject} activeOpacity={1} onPress={onClose} />
        <View style={s.modalSheet}>
          {/* Handle */}
          <View style={s.modalHandle} />

          {isLoading ? (
            <ActivityIndicator color="#1d4ed8" style={{ marginVertical: 40 }} />
          ) : !data ? (
            <Text style={s.modalEmpty}>Ürün bulunamadı</Text>
          ) : (
            <>
              {/* Başlık */}
              <View style={s.modalHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={s.modalProductName}>{data.name}</Text>
                  {data.description ? (
                    <Text style={s.modalDesc}>{data.description}</Text>
                  ) : null}
                </View>
                <View style={s.modalTotalBadge}>
                  <Text style={s.modalTotalText}>{totalStock} {data.unit}</Text>
                  <Text style={s.modalTotalLabel}>toplam</Text>
                </View>
              </View>

              {/* Barkodlar */}
              {data.barcodes?.length ? (
                <Text style={s.modalBarcodes}>
                  🔖 {data.barcodes.map((b: any) => b.barcode).join('  ·  ')}
                </Text>
              ) : null}

              {/* Lot listesi */}
              <Text style={s.modalSectionTitle}>
                Stok Lotları ({activeLots.length} lot)
              </Text>

              {activeLots.length === 0 ? (
                <View style={s.modalEmptyBox}>
                  <Text style={s.modalEmpty}>Stokta ürün yok</Text>
                </View>
              ) : (
                <FlatList
                  data={activeLots}
                  keyExtractor={(l) => l.id}
                  renderItem={({ item }) => <DetailLotRow lot={item} unit={data.unit} />}
                  style={{ maxHeight: 380 }}
                  showsVerticalScrollIndicator={false}
                />
              )}

              <TouchableOpacity onPress={onClose} style={s.modalCloseBtn}>
                <Text style={s.modalCloseTxt}>Kapat</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

// ─── Ana Ekran ────────────────────────────────────────────────────────────────

export default function DashboardScreen() {
  const { user, logout } = useAuth();
  const insets           = useSafeAreaInsets();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const summary = useQuery<AlertSummary>({
    queryKey: ['alert-summary'],
    queryFn:  () => api.get('/alerts/summary').then((r) => r.data),
  });

  const alerts = useQuery<{ data: StockLot[] }>({
    queryKey: ['alert-list-dashboard'],
    queryFn:  () => api.get('/alerts?limit=8').then((r) => r.data),
  });

  const refreshing = summary.isFetching || alerts.isFetching;

  function refresh() {
    summary.refetch();
    alerts.refetch();
  }

  async function handleLogout() {
    await logout();
    router.replace('/(auth)/login');
  }

  return (
    <View style={s.flex}>
      {/* Header */}
      <View style={[s.header, { paddingTop: insets.top + 10 }]}>
        <View>
          <Text style={s.greeting}>Merhaba, {user?.name} 👋</Text>
          <Text style={s.sub}>SKT Stok Takip</Text>
        </View>
        <TouchableOpacity onPress={handleLogout} hitSlop={8}>
          <Text style={s.logout}>Çıkış</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={s.flex}
        contentContainerStyle={s.scroll}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}
            tintColor="#1d4ed8"
          />
        }
      >
        {/* Stat grid */}
        {summary.isLoading ? (
          <ActivityIndicator color="#1d4ed8" style={s.loader} />
        ) : (
          <View style={s.grid}>
            <StatCard label="Toplam Lot"  value={summary.data?.total    ?? 0} color="#1d4ed8" />
            <StatCard label="Uyarı"       value={summary.data?.warning  ?? 0} color="#d97706" />
            <StatCard label="Kritik"      value={summary.data?.critical ?? 0} color="#ea580c" />
            <StatCard label="Süresi Geçmiş" value={summary.data?.expired ?? 0} color="#dc2626" />
          </View>
        )}

        {/* Hızlı eylem */}
        <TouchableOpacity
          style={s.quickBtn}
          onPress={() => router.push('/(tabs)/scan')}
          activeOpacity={0.85}
        >
          <Text style={s.quickIcon}>📷</Text>
          <View style={s.quickText}>
            <Text style={s.quickTitle}>Barkod Oku & Stok Gir</Text>
            <Text style={s.quickSub}>Ürünü tara, otomatik doldur</Text>
          </View>
          <Text style={s.quickArrow}>›</Text>
        </TouchableOpacity>

        {/* SKT uyarıları */}
        <Text style={s.sectionTitle}>SKT Uyarıları</Text>

        {alerts.isLoading ? (
          <ActivityIndicator color="#1d4ed8" style={s.loader} />
        ) : alerts.data?.data.length === 0 ? (
          <View style={s.emptyBox}>
            <Text style={s.emptyEmoji}>🎉</Text>
            <Text style={s.emptyText}>Uyarı yok</Text>
          </View>
        ) : (
          alerts.data?.data.map((lot) => (
            <LotRow
              key={lot.id}
              lot={lot}
              onPress={() => setSelectedProductId(lot.productId)}
            />
          ))
        )}
      </ScrollView>

      <ProductDetailModal
        productId={selectedProductId}
        onClose={() => setSelectedProductId(null)}
      />
    </View>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: '#f3f4f6' },
  header: {
    backgroundColor: '#1d4ed8',
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  greeting: { fontSize: 18, fontWeight: '700', color: '#fff' },
  sub:      { fontSize: 12, color: '#93c5fd', marginTop: 2 },
  logout:   { fontSize: 13, color: '#93c5fd', fontWeight: '600' },
  scroll:   { padding: 12, paddingBottom: 32 },
  loader:   { marginVertical: 20 },

  // Stats
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 14,
  },
  stat: {
    flex: 1,
    minWidth: '45%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  statValue: { fontSize: 30, fontWeight: '800' },
  statLabel: { fontSize: 11, marginTop: 4, fontWeight: '500' },

  // Quick action
  quickBtn: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  quickIcon:  { fontSize: 28, marginRight: 12 },
  quickText:  { flex: 1 },
  quickTitle: { fontSize: 15, fontWeight: '700', color: '#111827' },
  quickSub:   { fontSize: 12, color: '#6b7280', marginTop: 2 },
  quickArrow: { fontSize: 24, color: '#9ca3af' },

  // Alerts
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },
  lotRow: {
    borderLeftWidth: 4,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  lotMain:  { flex: 1 },
  lotName:  { fontSize: 14, fontWeight: '700', color: '#111827' },
  lotMeta:  { fontSize: 12, color: '#6b7280', marginTop: 2 },
  lotDate:  { fontSize: 11, color: '#9ca3af', marginTop: 2 },
  lotRight: { alignItems: 'flex-end', gap: 4 },
  lotDays:  { fontSize: 11, fontWeight: '600', marginTop: 2 },

  // Empty
  emptyBox:   { alignItems: 'center', paddingVertical: 32 },
  emptyEmoji: { fontSize: 40 },
  emptyText:  { fontSize: 14, color: '#9ca3af', marginTop: 8 },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000066',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 20,
    paddingBottom: 36,
  },
  modalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#d1d5db',
    alignSelf: 'center',
    marginBottom: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  modalProductName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
  },
  modalDesc: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 3,
  },
  modalTotalBadge: {
    backgroundColor: '#1d4ed8',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    marginLeft: 12,
  },
  modalTotalText:  { color: '#fff', fontWeight: '800', fontSize: 15 },
  modalTotalLabel: { color: '#93c5fd', fontSize: 10, marginTop: 1 },
  modalBarcodes: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 14,
  },
  modalSectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 10,
  },
  modalEmptyBox: { alignItems: 'center', paddingVertical: 20 },
  modalEmpty:    { fontSize: 13, color: '#9ca3af', textAlign: 'center' },
  modalCloseBtn: {
    marginTop: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalCloseTxt: { fontSize: 15, fontWeight: '700', color: '#374151' },

  // Detail Lot Row
  detailLotRow: {
    borderLeftWidth: 3,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  detailWarehouse: { fontSize: 13, fontWeight: '700', color: '#111827' },
  detailLotNo:     { fontSize: 11, color: '#6b7280', marginTop: 2 },
  detailSupplier:  { fontSize: 11, color: '#6b7280', marginTop: 1 },
  detailExpiry:    { fontSize: 11, color: '#9ca3af', marginTop: 2 },
  detailQty:       { fontSize: 14, fontWeight: '800' },
  detailDays:      { fontSize: 11, fontWeight: '600' },
});
