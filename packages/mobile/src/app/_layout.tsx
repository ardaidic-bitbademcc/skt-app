import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider, focusManager } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../lib/AuthContext';

// React Native AppState'ini React Query focusManager'a bağla.
// Uygulama ön plana geldiğinde stale sorgular otomatik yenilenir.
function useAppStateFocus() {
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      focusManager.setFocused(state === 'active');
    });
    return () => sub.remove();
  }, []);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 30_000 },
  },
});

export default function RootLayout() {
  useAppStateFocus();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </AuthProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
