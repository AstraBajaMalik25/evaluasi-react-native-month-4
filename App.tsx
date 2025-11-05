import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const App: React.FC = () => {
  // product state
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59,
      image:
        "https://macstore.id/wp-content/uploads/2024/01/MQTP3.jpeg",
      description: "High-quality sound and comfortable over-ear design.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 129,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAML-SZB3WrH_uffWnDTD7KMMVxDTXbrySjg&s",
      description: "Track your fitness, heart rate, and notifications.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79,
      image:
        "https://images.tokopedia.net/img/JFrBQq/2023/6/14/413e1750-d1d8-441c-a2bb-3fde9e21a384.jpg",
      description: "Portable and waterproof with great bass performance.",
    },
        {
      id: 4,
      name: "Smart TV",
      price: 79,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIjM-dB8DmMT4IGa2PI7L2uOY8rDmI36v-w&s",
      description: "4K Smart TV, featuring voice control and built-in apps for all your favorite content.",
    },
            {
      id: 5,
      name: "larry the wizard cat",
      price: 79,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa665g6nPKWYeg3MawEo6pKBAU3zgBSlRbkhamn585AH7EwW1aj3Ht6xT_XaXMM4jYJg&usqp=CAU",
      description: "larry",
    },
    
  ]);

  // form state
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  // refs for navigation
  const scrollRef = useRef<ScrollView | null>(null);
  const productRef = useRef<View | null>(null);
  const formRef = useRef<View | null>(null);

  // scroll handler
  const scrollToSection = (ref: React.RefObject<View | null>) => {
    if (ref.current && scrollRef.current) {
      ref.current.measure((x, y, width, height, pageX, pageY) => {
        scrollRef.current?.scrollTo({ y: pageY - 80, animated: true });
      });
    }
  };

  // add product
  const handleAddProduct = () => {
    if (!form.name || !form.price || !form.image) {
      Alert.alert("Success", "Product added!");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      image: form.image,
      description: form.description,
    };

    setProducts((prev) => [...prev, newProduct]);
    setForm({ name: "", price: "", image: "", description: "" });
    scrollToSection(productRef);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>@astraastore</Text>
        <View style={styles.navButtons}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => scrollToSection(productRef)}
          >
            <Text style={styles.navButtonText}>Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => scrollToSection(formRef)}
          >
            <Text style={styles.navButtonText}>Add Product</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollContent}>
        {/* Product List */}
        <View ref={productRef}>
          <Text style={styles.sectionTitle}>Available Products</Text>
          {products.map((p) => (
            <View key={p.id} style={styles.card}>
              <Image source={{ uri: p.image }} style={styles.image} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.productName}>{p.name}</Text>
                <Text style={styles.productDesc}>{p.description}</Text>
                <Text style={styles.productPrice}>${p.price}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Add Product Form */}
        <View ref={formRef} style={{ marginTop: 40 }}>
          <Text style={styles.sectionTitle}>Add New Product</Text>

          <TextInput
            placeholder="Product Name"
            value={form.name}
            onChangeText={(v) => setForm({ ...form, name: v })}
            style={styles.input}
          />
          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            value={form.price}
            onChangeText={(v) => setForm({ ...form, price: v })}
            style={styles.input}
          />
          <TextInput
            placeholder="Image URL"
            value={form.image}
            onChangeText={(v) => setForm({ ...form, image: v })}
            style={styles.input}
          />
          <TextInput
            placeholder="Description (optional)"
            multiline
            value={form.description}
            onChangeText={(v) => setForm({ ...form, description: v })}
            style={[styles.input, { height: 80 }]}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
            <Text style={styles.addButtonText}>Add Product</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  header: {
    backgroundColor: "#222",
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  navButtons: {
    flexDirection: "row",
    gap: 12,
  },
  navButton: {
    backgroundColor: "#444",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  navButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  scrollContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
  },
  productDesc: {
    color: "#666",
    marginTop: 4,
  },
  productPrice: {
    marginTop: 6,
    color: "#2E8B57",
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#2E8B57",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default App;
