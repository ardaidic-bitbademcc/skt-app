# SKT Takip

Ürün barkodlarıyla stok teslim alma, lot/SKT takibi ve bildirim yönetimi.

---

## Monorepo Yapısı

```
skt_app/
├── package.json                  ← npm workspaces root
├── packages/
│   ├── backend/                  ← Node.js + Express + Prisma
│   │   ├── prisma/
│   │   │   └── schema.prisma     ← DB şeması (14 model)
│   │   ├── src/
│   │   │   ├── index.ts          ← Express server
│   │   │   ├── middleware/
│   │   │   │   ├── auth.ts       ← JWT doğrulama
│   │   │   │   └── errorHandler.ts
│   │   │   ├── routes/
│   │   │   │   ├── auth.ts
│   │   │   │   ├── products.ts   ← barkod lookup dahil
│   │   │   │   ├── stock.ts      ← receive, lots, movements
│   │   │   │   ├── alerts.ts     ← SKT özet + liste
│   │   │   │   ├── warehouses.ts
│   │   │   │   ├── branches.ts
│   │   │   │   ├── suppliers.ts
│   │   │   │   ├── users.ts      ← bildirim ayarları dahil
│   │   │   │   ├── categories.ts
│   │   │   │   └── excel.ts      ← import/export/template
│   │   │   └── lib/
│   │   │       ├── prisma.ts
│   │   │       ├── jwt.ts
│   │   │       └── expiryStatus.ts  ← SAFE/WARNING/CRITICAL/EXPIRED
│   │   ├── .env
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── web/                      ← React + Vite + Tailwind (Admin Panel)
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx           ← Router + auth guard
│   │   │   ├── pages/
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── Dashboard.tsx ← stat kartları + SKT listesi
│   │   │   │   ├── Products.tsx  ← CRUD + barkod eşleştirme
│   │   │   │   ├── Stock.tsx     ← FEFO sıralı lot listesi
│   │   │   │   ├── Alerts.tsx    ← SKT uyarıları
│   │   │   │   ├── Movements.tsx ← hareket geçmişi
│   │   │   │   ├── ExcelPage.tsx ← şablon / preview / import / export
│   │   │   │   ├── Warehouses.tsx
│   │   │   │   ├── Branches.tsx
│   │   │   │   ├── Suppliers.tsx
│   │   │   │   └── Users.tsx
│   │   │   ├── components/
│   │   │   │   ├── Layout.tsx    ← sidebar nav
│   │   │   │   ├── Table.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── StatusBadge.tsx
│   │   │   │   └── PageHeader.tsx
│   │   │   └── lib/
│   │   │       ├── api.ts        ← axios + token interceptor
│   │   │       ├── auth.ts       ← localStorage helpers
│   │   │       └── utils.ts      ← formatDate, statusColor vb.
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── mobile/                   ← Expo (React Native)
│       ├── src/
│       │   ├── app/
│       │   │   ├── _layout.tsx       ← QueryClient + AuthProvider
│       │   │   ├── index.tsx         ← auth yönlendirme
│       │   │   ├── (auth)/
│       │   │   │   └── login.tsx
│       │   │   └── (tabs)/
│       │   │       ├── _layout.tsx   ← tab bar
│       │   │       ├── index.tsx     ← Dashboard
│       │   │       ├── scan.tsx      ← CameraView + stok giriş formu
│       │   │       ├── stock.tsx     ← FEFO stok listesi
│       │   │       ├── alerts.tsx    ← SKT uyarıları
│       │   │       └── settings.tsx  ← bildirim ayarları + çıkış
│       │   └── lib/
│       │       ├── api.ts
│       │       ├── auth.ts           ← AsyncStorage helpers
│       │       ├── AuthContext.tsx
│       │       ├── notifications.ts  ← Expo push token
│       │       └── utils.ts
│       ├── app.json
│       ├── babel.config.js
│       ├── package.json
│       └── tsconfig.json
```

---

## DB Şeması (Özet)

Detay: [`packages/backend/prisma/schema.prisma`](packages/backend/prisma/schema.prisma)

```
users           → role: ADMIN | STAFF | VIEWER
branches        ← users, warehouses
warehouses      ← stock_lots
categories      ← products
suppliers       ← stock_lots
products        → barcodes (product_barcodes), stock_lots
product_barcodes  (barcode @unique, isPrimary)
stock_lots      → expiryDate, quantity, status (SAFE|WARNING|CRITICAL|EXPIRED)
                  FEFO: her barkod+SKT kombinasyonu ayrı lot
stock_movements → type: IN|OUT|ADJUSTMENT|WASTE|TRANSFER
expiry_alerts   → alertType: DAYS_30|DAYS_15|DAYS_7|EXPIRED
notification_settings → per-user, pushToken
audit_logs      → tüm yazma işlemleri loglanır
```

---

## Kurulum Planı — Adım Adım

### Gereksinimler

| Araç | Versiyon |
|------|----------|
| Node.js | 20+ |
| npm | 9+ |
| Expo Go (telefon) | son sürüm |

---

### Adım 1 — Bağımlılıkları Kur

```bash
cd skt_app
npm install           # root + tüm workspace'ler
```

---

### Adım 2 — Backend DB Oluştur

```bash
cd packages/backend
npm run generate      # Prisma client üret
npm run db:push       # SQLite şemasını oluştur (dev.db)
```

> PostgreSQL'e geçmek için `.env` içindeki `DATABASE_URL`'yi değiştir,  
> `schema.prisma`'da `provider = "postgresql"` yap, tekrar `db:push` çalıştır.

---

### Adım 3 — Backend Başlat

```bash
# packages/backend/ içinde:
npm run dev           # http://localhost:3001
```

Sağlık kontrolü: `GET http://localhost:3001/health` → `{"ok":true}`

---

### Adım 4 — Web Admin Başlat

```bash
cd packages/web
npm run dev           # http://localhost:5173
```

Vite, `/api` isteklerini `localhost:3001`'e proxy'ler (vite.config.ts).

---

### Adım 5 — Mobile Başlat

```bash
cd packages/mobile
# src/lib/api.ts içinde BASE_URL'e kendi LAN IP'ini yaz:
# 'http://192.168.1.XX:3001/api'
npx expo start
```

Expo Go ile QR kodu okut.

---

## Geliştirme Sırası (MVP)

1. **[şimdi]** Monorepo + schema ✅
2. **Sonraki** — Backend: `src/lib/`, `middleware/`, `routes/` (auth → products → stock → alerts sırasıyla)
3. **Sonraki** — Web: layout + Login + Dashboard + Products + Stock + Alerts
4. **Sonraki** — Web: Excel import/export + Users + Warehouses + Branches + Suppliers
5. **Sonraki** — Mobile: login + scan + stock + alerts + settings
6. **Sonraki** — Seed data + E2E test

---

## Ortam Değişkenleri

### `packages/backend/.env`

| Değişken | Açıklama | Varsayılan |
|----------|----------|-----------|
| `DATABASE_URL` | Prisma bağlantısı | `file:./dev.db` |
| `JWT_SECRET` | Token imzalama anahtarı | — |
| `PORT` | Sunucu portu | `3001` |
