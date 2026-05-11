import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { Text } from 'react-native';
import { useAuth } from '../../lib/AuthContext';

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return (
    <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.45 }}>
      {emoji}
    </Text>
  );
}

export default function TabsLayout() {
  const { user, loading } = useAuth();

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
    </Tabs>
  );
}
