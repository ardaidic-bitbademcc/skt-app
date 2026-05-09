# API Referansı

Base URL (dev): `http://localhost:3001`

Tüm korumalı endpoint'ler `Authorization: Bearer <token>` header'ı gerektirir.

---

## Auth

### POST /api/auth/login

```json
// Request
{
  "email": "admin@skt.app",
  "password": "admin123"
}

// 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "clxabc123",
    "email": "admin@skt.app",
    "name": "Admin",
    "role": "ADMIN",
    "branch": { "id": "branch-main", "name": "Merkez Şube" }
  }
}

// 401 — kullanıcı yok veya şifre hatalı
{ "error": "Şifre hatalı" }

// 422 — validation
{
  "error": "Validation hatası",
  "fields": [{ "field": "email", "message": "Geçerli bir e-posta girin" }]
}
```

---

### GET /api/auth/me

```
Authorization: Bearer <token>
```

```json
// 200 OK
{
  "id": "clxabc123",
  "email": "staff@skt.app",
  "name": "Personel",
  "role": "STAFF",
  "branchId": "branch-main",
  "branch": { "id": "branch-main", "name": "Merkez Şube" },
  "createdAt": "2025-01-01T00:00:00.000Z"
}

// 401 — token yok/geçersiz
{ "error": "Authorization header eksik" }
```

---

## Products

### GET /api/products

Query parametreleri:

| Parametre | Tip | Varsayılan | Açıklama |
|-----------|-----|-----------|----------|
| `search` | string | — | Ürün adında içeren |
| `categoryId` | string | — | Kategoriye göre filtre |
| `page` | number | 1 | Sayfa numarası |
| `limit` | number | 20 | Sayfa başı kayıt (max 100) |

```json
// GET /api/products?search=süt&page=1&limit=20
// 200 OK
{
  "data": [
    {
      "id": "product-8690000000001",
      "name": "Süt 1L",
      "unit": "adet",
      "minStock": 0,
      "isActive": true,
      "createdAt": "2025-05-09T10:00:00.000Z",
      "category": { "id": "cat-1", "name": "İçecek" },
      "barcodes": [
        { "id": "bc-1", "barcode": "8690000000001", "isPrimary": true }
      ],
      "totalStock": 50
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 20
}
```

---

### GET /api/products/:id

```json
// 200 OK
{
  "id": "product-8690000000001",
  "name": "Süt 1L",
  "unit": "adet",
  "category": { "id": "cat-1", "name": "İçecek" },
  "barcodes": [{ "barcode": "8690000000001", "isPrimary": true }],
  "stockLots": [
    {
      "id": "lot-1",
      "expiryDate": "2025-05-19T00:00:00.000Z",
      "quantity": 50,
      "status": "CRITICAL",
      "lotNumber": null,
      "warehouse": { "id": "warehouse-main", "name": "Ana Depo" },
      "supplier": { "id": "supplier-1", "name": "ABC Tedarik A.Ş." }
    }
  ]
}

// 404
{ "error": "Ürün bulunamadı" }
```

---

### POST /api/products  `[ADMIN]`

```json
// Request
{
  "name": "Deterjan 3kg",
  "unit": "adet",
  "categoryId": "clx...",
  "barcode": "8690000000099"
}

// 201 Created
{
  "id": "clxnew...",
  "name": "Deterjan 3kg",
  "unit": "adet",
  "minStock": 0,
  "isActive": true,
  "category": null,
  "barcodes": [{ "id": "...", "barcode": "8690000000099", "isPrimary": true }]
}

// 409 — barkod zaten kayıtlı
{ "error": "Bu barcode zaten kayıtlı" }
```

---

### PUT /api/products/:id  `[ADMIN]`

```json
// Request — sadece değişen alanlar gönderilir
{ "name": "Deterjan 5kg", "minStock": 10 }

// 200 OK — güncellenmiş ürün
{ "id": "...", "name": "Deterjan 5kg", "minStock": 10, ... }

// 404
{ "error": "Kayıt bulunamadı" }
```

---

### DELETE /api/products/:id  `[ADMIN]`

Soft-delete — ürün `isActive: false` yapılır, barkodlar korunur.

```json
// 200 OK
{ "ok": true }
```

---

### POST /api/products/:id/barcodes  `[ADMIN]`

Mevcut ürüne ek barkod tanımla.

```json
// Request
{ "barcode": "8690000000088", "isPrimary": false }

// 201 Created
{
  "id": "bc-2",
  "barcode": "8690000000088",
  "isPrimary": false,
  "productId": "clx..."
}

// 409 — barkod başka ürüne ait
{ "error": "Bu barcode zaten kayıtlı" }
```

---

### GET /api/products/barcode/:code

Mobil barkod okutma akışında kullanılır.

```json
// GET /api/products/barcode/8690000000001
// 200 OK — ürün bulundu, form otomatik doldurulur
{
  "id": "product-8690000000001",
  "name": "Süt 1L",
  "unit": "adet",
  "category": { "id": "cat-1", "name": "İçecek" },
  "barcodes": [{ "barcode": "8690000000001", "isPrimary": true }]
}

// 404 — bilinmeyen barkod → mobil "Yeni ürün oluştur" akışını başlatır
{ "error": "Bu barkoda ait ürün bulunamadı" }
```

---

## Stock

### POST /api/stock/receive

```json
// Request — minimum
{
  "productId":   "product-8690000000001",
  "warehouseId": "warehouse-main",
  "branchId":    "branch-main",
  "expiryDate":  "2025-06-30",
  "quantity":    48
}

// Request — tam
{
  "productId":   "product-8690000000001",
  "warehouseId": "warehouse-main",
  "branchId":    "branch-main",
  "supplierId":  "supplier-1",
  "expiryDate":  "2025-06-30",
  "quantity":    48,
  "lotNumber":   "LOT-2025-06",
  "notes":       "2. parti"
}

// 201 Created — yeni lot oluşturuldu
{
  "lot": {
    "id": "lot-new",
    "productId": "product-8690000000001",
    "warehouseId": "warehouse-main",
    "branchId": "branch-main",
    "supplierId": "supplier-1",
    "expiryDate": "2025-06-30T00:00:00.000Z",
    "quantity": 48,
    "status": "WARNING",
    "lotNumber": "LOT-2025-06",
    "isNew": true
  },
  "movement": {
    "id": "mov-1",
    "type": "IN",
    "quantity": 48,
    "createdAt": "2025-05-09T10:00:00.000Z"
  }
}

// 200 OK — mevcut lot üzerine eklendi (aynı ürün+depo+SKT)
{
  "lot": {
    "id": "lot-existing",
    "quantity": 96,
    "status": "WARNING",
    "isNew": false
  },
  "movement": { "id": "mov-2", "type": "IN", "quantity": 48 }
}

// 400 — ürün veya depo yok
{ "error": "Ürün bulunamadı" }

// 422 — validation
{
  "error": "Validation hatası",
  "fields": [
    { "field": "quantity", "message": "Adet 0'dan büyük olmalı" },
    { "field": "expiryDate", "message": "Geçerli bir tarih girin (YYYY-MM-DD)" }
  ]
}
```

---

## Durum Kodları Özeti

| Kod | Anlam |
|-----|-------|
| 200 | Başarılı |
| 201 | Oluşturuldu |
| 400 | İstek hatası (iş kuralı) |
| 401 | Token yok / geçersiz |
| 403 | Yetersiz yetki (ADMIN gerekli) |
| 404 | Kayıt bulunamadı |
| 409 | Çakışma (unique constraint) |
| 422 | Validation hatası |
| 500 | Sunucu hatası |

## SKT Durum Mantığı

| Durum | Koşul |
|-------|-------|
| `EXPIRED` | Bugünden önce |
| `CRITICAL` | 0–7 gün |
| `WARNING` | 8–30 gün |
| `SAFE` | 31+ gün |
