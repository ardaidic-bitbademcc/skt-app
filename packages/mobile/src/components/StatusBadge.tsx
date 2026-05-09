import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExpiryStatus } from '../types';
import { STATUS_COLOR, STATUS_LABEL } from '../lib/utils';

interface Props {
  status: ExpiryStatus;
  size?: 'sm' | 'md';
}

export default function StatusBadge({ status, size = 'md' }: Props) {
  const color = STATUS_COLOR[status];
  return (
    <View style={[s.badge, { backgroundColor: color + '22', borderColor: color + '44' }]}>
      <Text style={[s.text, { color, fontSize: size === 'sm' ? 10 : 12 }]}>
        {STATUS_LABEL[status]}
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  text: { fontWeight: '700' },
});
