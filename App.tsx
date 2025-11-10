import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import ProductCatalogScreen from "./screens/ProductCatalogScreen"; // ⬅️ file kamu dipindah ke sini

// --- Dummy onboarding screens ---
const Onboarding1 = ({ navigation }: any) => (
  <SafeAreaView style={styles.center}>
    <Text style={styles.title}>Welcome to SparePart Store!</Text>
    <Button title="Next" onPress={() => navigation.navigate("Onboarding2")} />
  </SafeAreaView>
);

const Onboarding2 = ({ navigation }: any) => (
  <SafeAreaView style={styles.center}>
    <Text style={styles.title}>Find the best spare parts for your vehicle!</Text>
    <Button title="Start Shopping" onPress={() => navigation.replace("MainTabs")} />
  </SafeAreaView>
);

// --- Profile screen ---
const ProfileScreen = () => (
  <SafeAreaView style={styles.center}>
    <Text style={styles.title}>Profile Screen</Text>
  </SafeAreaView>
);

// --- Bottom tab navigation ---
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Catalog" component={ProductCatalogScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// --- Stack navigation ---
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- styling ---
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
