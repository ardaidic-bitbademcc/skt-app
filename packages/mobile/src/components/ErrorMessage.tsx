import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <View style={s.box}>
      <Text style={s.text}>{message}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  box:  { backgroundColor: '#fef2f2', borderRadius: 8, padding: 12, borderLeftWidth: 3, borderLeftColor: '#dc2626' },
  text: { color: '#dc2626', fontSize: 13 },
});
