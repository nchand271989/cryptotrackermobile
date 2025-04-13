import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CoinCardProps {
  item: any;
  isFavorite: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

export default function CoinCard({ item, isFavorite, onPress, onLongPress }: CoinCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        styles.card,
        { backgroundColor: isFavorite ? '#1e40af' : '#1f2937' },
      ]}
    >
      <View style={styles.cardTop}>
        <Text style={styles.coinName}>{item.name}</Text>
        <Text style={styles.coinSymbol}>({item.symbol.toUpperCase()})</Text>
      </View>
      <View style={styles.cardBottom}>
        <Text style={styles.coinPrice}>💲{item.current_price.toFixed(2)}</Text>
        <Text style={styles.favStar}>{isFavorite ? '⭐' : '☆'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  coinName: {
    color: '#f9fafb',
    fontSize: 18,
    fontWeight: '700',
  },
  coinSymbol: {
    color: '#9ca3af',
    fontSize: 14,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coinPrice: {
    color: '#10b981',
    fontSize: 16,
    fontWeight: '600',
  },
  favStar: {
    fontSize: 18,
    color: '#facc15',
  },
});
