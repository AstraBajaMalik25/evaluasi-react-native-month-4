import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const PRODUCTS = [
  { id: "1", name: "Brake Disc", price: 250000, image: "https://images.unsplash.com/photo-1616338806320-98a501aa9a77" },
  { id: "2", name: "Engine Oil", price: 120000, image: "https://images.unsplash.com/photo-1581091215367-59ab6c1b3c2b" },
  { id: "3", name: "Spark Plug", price: 60000, image: "https://images.unsplash.com/photo-1607860108855-f1b9fcd7c8a7" },
  { id: "4", name: "Headlight Bulb", price: 95000, image: "https://images.unsplash.com/photo-1612817159949-2e90a0e53a26" },
];

const Tab = createMaterialTopTabNavigator();

const ProductList = ({ category }: { category: string }) => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Rp {item.price.toLocaleString("id-ID")}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const ProductCatalogScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0D0D0D" }}>
      <Text style={styles.title}>SparePart Store</Text>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true, // ✅ agar bisa di-scroll horizontal
          tabBarStyle: { backgroundColor: "#1A1A1A" },
          tabBarIndicatorStyle: { backgroundColor: "#E50914", height: 3 },
          tabBarLabelStyle: { color: "#fff", fontWeight: "600", fontSize: 12 },
        }}
      >
        <Tab.Screen name="Populer">{() => <ProductList category="Populer" />}</Tab.Screen>
        <Tab.Screen name="Terbaru">{() => <ProductList category="Terbaru" />}</Tab.Screen>
        <Tab.Screen name="Elektronik">{() => <ProductList category="Elektronik" />}</Tab.Screen>
        <Tab.Screen name="Pakaian">{() => <ProductList category="Pakaian" />}</Tab.Screen>
        <Tab.Screen name="Makanan">{() => <ProductList category="Makanan" />}</Tab.Screen>
        <Tab.Screen name="Otomotif">{() => <ProductList category="Otomotif" />}</Tab.Screen>
        <Tab.Screen name="Hiburan">{() => <ProductList category="Hiburan" />}</Tab.Screen>
        <Tab.Screen name="Perlengkapan Bayi">{() => <ProductList category="Perlengkapan Bayi" />}</Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  list: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 12,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    color: "#aaa",
    fontSize: 14,
    marginVertical: 4,
  },
  button: {
    backgroundColor: "#E50914",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default ProductCatalogScreen;
