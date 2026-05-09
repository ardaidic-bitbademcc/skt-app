import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Üretim URL'i Railway deploy sonrası buraya yaz:
const PROD_URL = 'https://RAILWAY_URL_BURAYA.up.railway.app/api';

// Dev:
//   - iOS Simulator → localhost çalışır
//   - Fiziksel cihaz (Expo Go) → Mac'in LAN IP'i gerekir
//     Terminalde `ipconfig getifaddr en0` ile öğren ve aşağıya yaz
const DEV_URL = 'http://localhost:3001/api';
// const DEV_URL = 'http://192.168.1.XX:3001/api'; // ← fiziksel cihaz için

export const BASE_URL = __DEV__ ? DEV_URL : PROD_URL;

const api = axios.create({ baseURL: BASE_URL, timeout: 10_000 });

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  async (err) => {
    if (err.response?.status === 401) {
      await AsyncStorage.multiRemove(['token', 'user']);
    }
    return Promise.reject(err);
  }
);

export default api;
