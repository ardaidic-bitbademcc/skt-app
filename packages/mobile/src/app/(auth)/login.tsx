import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, KeyboardAvoidingView, Platform,
  ScrollView, ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../../lib/AuthContext';
import ErrorMessage from '../../components/ErrorMessage';

export default function LoginScreen() {
  const { login } = useAuth();
  const insets    = useSafeAreaInsets();

  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState('');

  async function handleLogin() {
    if (!email.trim() || !password) {
      setError('E-posta ve şifre zorunlu');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await login(email.trim(), password);
      router.replace('/(tabs)/dashboard');
    } catch (err: any) {
      const msg = err.response?.data?.error
        ?? err.response?.data?.fields?.[0]?.message
        ?? 'Bağlantı hatası — sunucu çalışıyor mu?';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={s.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[s.container, { paddingTop: insets.top + 32 }]}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo alanı */}
        <View style={s.logoWrap}>
          <Text style={s.logoEmoji}>📦</Text>
          <Text style={s.appName}>SKT Takip</Text>
          <Text style={s.tagline}>Stok & Son Kullanma Yönetimi</Text>
        </View>

        {/* Form */}
        <View style={s.card}>
          <Text style={s.label}>E-posta</Text>
          <TextInput
            style={s.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="ornek@sirket.com"
            placeholderTextColor="#9ca3af"
            returnKeyType="next"
          />

          <Text style={[s.label, { marginTop: 14 }]}>Şifre</Text>
          <TextInput
            style={s.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="••••••"
            placeholderTextColor="#9ca3af"
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />

          {error ? <ErrorMessage message={error} /> : null}

          <TouchableOpacity
            style={[s.btn, loading && s.btnDisabled]}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.85}
          >
            {loading
              ? <ActivityIndicator color="#fff" />
              : <Text style={s.btnText}>Giriş Yap</Text>
            }
          </TouchableOpacity>
        </View>

        <Text style={s.hint}>
          Demo: admin@skt.app / admin123
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex:      { flex: 1, backgroundColor: '#1d4ed8' },
  container: { flexGrow: 1, paddingHorizontal: 24, paddingBottom: 40 },
  logoWrap:  { alignItems: 'center', marginBottom: 32 },
  logoEmoji: { fontSize: 56 },
  appName:   { fontSize: 28, fontWeight: '800', color: '#fff', marginTop: 8 },
  tagline:   { fontSize: 13, color: '#93c5fd', marginTop: 4 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
  label: { fontSize: 13, fontWeight: '600', color: '#374151', marginBottom: 6 },
  input: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111827',
  },
  btn: {
    backgroundColor: '#1d4ed8',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  btnDisabled: { opacity: 0.6 },
  btnText:     { color: '#fff', fontWeight: '700', fontSize: 16 },
  hint:        { textAlign: 'center', color: '#93c5fd', fontSize: 12, marginTop: 20 },
});
