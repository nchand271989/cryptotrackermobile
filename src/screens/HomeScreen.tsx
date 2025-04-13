import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { getMarketData } from '../services/coingecko';
import { loadFavorites, saveFavorites } from '../utils/storage';
import CoinCard from '../components/CoinCard';
import FavoritesToggle from '../components/FavoritesToggle';

export default function HomeScreen({ navigation }: any) {
  const [coins, setCoins] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    fetchCoins();
    loadFavorites().then(setFavorites);
  }, []);

  const fetchCoins = async (pageNum = 1, refreshing = false) => {
    try {
      const data = await getMarketData(pageNum);
      setCoins(prev => (refreshing ? data : [...prev, ...data]));
    } catch (e) {
      console.error('API Error:', e);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
      setIsRefreshing(false);
    }
  };

  const refresh = () => {
    setIsRefreshing(true);
    setPage(1);
    fetchCoins(1, true);
  };

  const loadMore = () => {
    if (!isFetchingMore && !showOnlyFavorites) {
      setIsFetchingMore(true);
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCoins(nextPage);
    }
  };

  const toggleFavorite = async (id: string) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    await saveFavorites(updated);
  };

  const filteredCoins = showOnlyFavorites
    ? coins.filter(c => favorites.includes(c.id))
    : coins;

  return (
    <View style={styles.container}>
      <FavoritesToggle value={showOnlyFavorites} onToggle={setShowOnlyFavorites} />

      {loading ? (
        <ActivityIndicator size="large" color="#00ffcc" style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={filteredCoins}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CoinCard
              item={item}
              isFavorite={favorites.includes(item.id)}
              onPress={() => navigation.navigate('Details', { coinId: item.id })}
              onLongPress={() => toggleFavorite(item.id)}
            />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
          }
          ListFooterComponent={
            !showOnlyFavorites && isFetchingMore ? (
              <ActivityIndicator color="#ccc" />
            ) : null
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111827',
    flex: 1,
    padding: 16,
  },
});
