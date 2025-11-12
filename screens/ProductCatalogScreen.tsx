import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import ProductCatalogScreen from "./ProductCatalogScreen"; // your existing screen

// ---------------------
// 🧭 Type Definitions
// ---------------------
type ProductStackParamList = {
  Catalog: undefined;
  CheckoutModal: undefined;
};

type CheckoutModalNavigationProp = StackNavigationProp<
  ProductStackParamList,
  "CheckoutModal"
>;

// ---------------------
// ⚙️ Drawer + Stack Setup
// ---------------------
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<ProductStackParamList>();

// ---------------------
// ⚙️ Settings Screen
// ---------------------
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#fff", fontSize: 18 }}>Settings Screen</Text>
    </View>
  );
}

// ---------------------
// 🛒 Checkout Modal
// ---------------------
function CheckoutModal({
  navigation,
}: {
  navigation: CheckoutModalNavigationProp;
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 20 }}>🛒 Checkout Modal</Text>
      <Button title="Close" onPress={() => navigation.goBack()} />
    </View>
  );
}

// ---------------------
// 📦 Product Stack
// ---------------------
function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Catalog" component={ProductCatalogScreen} />
      <Stack.Screen
        name="CheckoutModal"
        component={CheckoutModal}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

// ---------------------
// 📂 Drawer Navigation
// ---------------------
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#111" },
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#000" },
        drawerLabelStyle: { color: "#fff" },
      }}
    >
      <Drawer.Screen name="Home" component={ProductStack} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

// ---------------------
// 🚀 App Root
// ---------------------
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
