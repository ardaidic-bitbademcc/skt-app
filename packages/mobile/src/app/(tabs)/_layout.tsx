import React, { useEffect } from 'react';
import { Tabs, Redirect } from 'expo-router';
import { Text, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useAuth } from '../../lib/AuthContext';
import api from '../../lib/api';

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return (
    <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.45 }}>
      {emoji}
    </Text>
  );
}

async function registerPushToken() {
  if (!Device.isDevice) return; // simülatörde push token yok

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') return;

  try {
    const tokenData = await Notifications.getExpoPushTokenAsync({
      projectId: '1f60b643-c0d8-4929-8072-c8091358eb3d',
    });
    await api.post('/notifications/register-token', { token: tokenData.data });
  } catch {
    // Push token kaydedilemezse sessizce devam et
  }
}

export default function TabsLayout() {
  const { user, loading } = useAuth();

  // Push token registration — kullanıcı giriş yaptığında bir kez çalışır
  useEffect(() => {
    if (user) {
      registerPushToken().catch(() => {});
    }
  }, [user?.id]);

  // Android notification channel
  useEffect(() => {
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'SKT Uyarıları',
        importance: Notifications.AndroidImportance.HIGH,
        sound: 'default',
      }).catch(() => {});
    }
  }, []);

  // Declarative auth guard: when token expires or logout fires, React re-renders
  // and Redirect kicks in — safer than imperative router.replace from an axios interceptor
  // while a modal is open.
  if (!loading && !user) return <Redirect href="/(auth)/login" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 4,
          borderTopColor: '#e5e7eb',
        },
        tabBarActiveTintColor:   '#1d4ed8',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ focused }) => <TabIcon emoji="📊" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Barkod',
          tabBarIcon: ({ focused }) => <TabIcon emoji="📷" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="sayim"
        options={{
          title: 'Sayım',
          tabBarIcon: ({ focused }) => <TabIcon emoji="📋" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
