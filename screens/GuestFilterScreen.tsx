import React, { useContext, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext, MenuItem } from '../context/MenuContext';

export default function GuestFilterScreen() {
  const { menuItems } = useContext(MenuContext);
  const [selectedCategory, setSelectedCategory] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');

  const filteredItems: typeof menuItems = [];
  let i = 0;
  while (i < menuItems.length) {
    if (menuItems[i].category === selectedCategory) {
      filteredItems.push(menuItems[i]);
    }
    i++;
  }

  const renderDish = ({ item }: { item: MenuItem }) => (
    <View style={styles.card}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.dishImage} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <Text style={styles.dishName}>{item.name}</Text>
      <Text style={styles.dishDescription}>{item.description}</Text>
      <Text style={styles.dishPrice}>R{item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Dishes by Course</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starter" />
        <Picker.Item label="Mains" value="Main" />
        <Picker.Item label="Desserts" value="Dessert" />
      </Picker>

      <FlatList
        data={filteredItems}
        renderItem={renderDish}
                keyExtractor={(item: MenuItem) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDF6F0', padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4A3F35',
    marginBottom: 15,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  picker: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dishImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 10 },
  placeholder: {
    width: '100%', height: 180, borderRadius: 12,
    backgroundColor: '#E2D8C3', justifyContent: 'center', alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: { color: '#7A6652', fontSize: 16 },
  dishName: { fontSize: 20, fontWeight: '700', color: '#4A3F35', marginBottom: 5 },
  dishDescription: { fontSize: 16, color: '#7A6652', marginBottom: 5 },
  dishPrice: { fontSize: 16, fontWeight: '600', color: '#4A3F35', marginBottom: 5 },
});