import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Üretim URL'i Vercel backend:
const PROD_URL = 'https://backend-kappa-gilt-55.vercel.app/api';
export const BASE_URL = PROD_URL;

const api = axios.create({ baseURL: BASE_URL, timeout: 12_000 });

// ─── In-memory token cache ────────────────────────────────────────────────────
// AsyncStorage her request'te async await gerektiriyor ve zaman zaman gecikmeli
// dönüyor (özellikle barkod scan gibi hızlı akışlarda). Memory cache bunu önler.
// Token başlangıçta AuthContext tarafından yüklenir (race-condition-safe).
let _token: string | null = null;
export function setMemoryToken(t: string | null) { _token = t; }

// ─── 401 callback ─────────────────────────────────────────────────────────────
// Navigation, tabs/_layout.tsx'deki auth guard üzerinden tetiklenir.
// _onUnauthorized sadece user state'i temizler — router.replace BURADAN yapılmaz.
let _onUnauthorized: (() => void) | null = null;
export function setOnUnauthorized(fn: () => void) { _onUnauthorized = fn; }

// ─── Request interceptor ──────────────────────────────────────────────────────
api.interceptors.request.use((config) => {
  // Sync — AsyncStorage await yok, hiçbir zaman null dönmez
  if (_token) config.headers.Authorization = `Bearer ${_token}`;
  return config;
});

// ─── Response interceptor ─────────────────────────────────────────────────────
api.interceptors.response.use(
  (r) => r,
  async (err) => {
    if (err.response?.status === 401) {
      // Sadece token kaynaklı 401'lerde logout yap
      const errMsg: string = err.response?.data?.error ?? '';
      const isTokenErr =
        errMsg.includes('Token') ||
        errMsg.includes('Authorization') ||
        errMsg.includes('Oturum');

      if (isTokenErr) {
        _token = null;
        await AsyncStorage.multiRemove(['token', 'user']);
        _onUnauthorized?.();
      }
    }
    return Promise.reject(err);
  },
);

export default api;
