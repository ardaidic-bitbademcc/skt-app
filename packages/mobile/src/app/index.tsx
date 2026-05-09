import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect } from 'expo-router';
import { useAuth } from '../lib/AuthContext';

export default function Index() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1d4ed8' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return <Redirect href={user ? '/(tabs)/dashboard' : '/(auth)/login'} />;
}
