import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  title: string;
  subtitle?: string;
  rightLabel?: string;
  onRight?: () => void;
}

export default function ScreenHeader({ title, subtitle, rightLabel, onRight }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[s.container, { paddingTop: insets.top + 8 }]}>
      <View style={s.text}>
        <Text style={s.title}>{title}</Text>
        {subtitle ? <Text style={s.sub}>{subtitle}</Text> : null}
      </View>
      {rightLabel && onRight ? (
        <TouchableOpacity onPress={onRight} hitSlop={8}>
          <Text style={s.right}>{rightLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#1d4ed8',
    paddingHorizontal: 16,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  text: { flex: 1 },
  title: { fontSize: 20, fontWeight: '700', color: '#fff' },
  sub:   { fontSize: 12, color: '#bfdbfe', marginTop: 2 },
  right: { fontSize: 14, color: '#93c5fd', fontWeight: '600' },
});
