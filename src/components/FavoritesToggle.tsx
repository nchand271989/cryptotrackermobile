import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface Props {
  value: boolean;
  onToggle: (value: boolean) => void;
}

export default function FavoritesToggle({ value, onToggle }: Props) {
  return (
    <View style={styles.filterRow}>
      <Text style={styles.filterText}>Show Only Favorites</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#2563eb' }}
        thumbColor="#fefefe"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
  },
  filterText: {
    color: '#f3f4f6',
    fontSize: 16,
    fontWeight: '600',
  },
});
