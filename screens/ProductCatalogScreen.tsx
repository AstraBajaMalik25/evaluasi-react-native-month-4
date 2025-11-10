import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Brake Disc', price: 250000, image: 'https://images.unsplash.com/photo-1616338806320-98a501aa9a77' },
  { id: '2', name: 'Engine Oil', price: 120000, image: 'https://images.unsplash.com/photo-1581091215367-59ab6c1b3c2b' },
  { id: '3', name: 'Spark Plug', price: 60000, image: 'https://images.unsplash.com/photo-1607860108855-f1b9fcd7c8a7' },
  { id: '4', name: 'Headlight Bulb', price: 95000, image: 'https://images.unsplash.com/photo-1612817159949-2e90a0e53a26' },
];

const ProductCatalogScreen = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Rp {item.price.toLocaleString('id-ID')}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>SparePart Store</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    color: '#aaa',
    fontSize: 14,
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ProductCatalogScreen;
