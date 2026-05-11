import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';
import api, { setOnUnauthorized, setMemoryToken } from './api';
import { getStoredUser, storeAuth, clearAuth } from './auth';

interface AuthCtx {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthCtx>({} as AuthCtx);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser]       = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Token ve kullanıcıyı aynı anda yükle — setLoading(false) olmadan önce
    // setMemoryToken çağrılarak race condition önlenir.
    async function init() {
      const [storedUser, storedToken] = await Promise.all([
        getStoredUser(),
        AsyncStorage.getItem('token'),
      ]);
      if (storedToken) setMemoryToken(storedToken);
      setUser(storedUser);
      setLoading(false);
    }
    init();
  }, []);

  // 401 token hatası gelince sadece state temizle — navigation tabs/_layout.tsx'e bırak
  useEffect(() => {
    setOnUnauthorized(() => {
      setUser(null);
      // router.replace BURADAN yapılmıyor: modal açıkken imperativ navigation çakışır
    });
  }, []);

  async function login(email: string, password: string) {
    const { data } = await api.post<{ token: string; user: User }>('/auth/login', {
      email,
      password,
    });
    setMemoryToken(data.token);         // memory cache'i hemen güncelle
    await storeAuth(data.token, data.user);
    setUser(data.user);
  }

  async function logout() {
    setMemoryToken(null);               // memory cache'i temizle
    await clearAuth();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
