import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuContext, MenuItem } from '../context/MenuContext';

export default function ManageMenuScreen() {
  const { menuItems, removeDish } = useContext(MenuContext);

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
      <Text style={styles.dishCategory}>{item.category}</Text>

      <TouchableOpacity style={styles.removeButton} onPress={() => removeDish(item.id)}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu ({menuItems.length} items)</Text>

      <FlatList
        data={menuItems}
        renderItem={renderDish}
        keyExtractor={(item: MenuItem) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F3EE', padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#3E2C24',
    marginBottom: 15,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5D7C6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  dishImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 10 },
  placeholder: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    backgroundColor: '#EBDDC8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: { color: '#7A6652', fontSize: 16 },
  dishName: { fontSize: 20, fontWeight: '700', color: '#3E2C24', marginBottom: 5 },
  dishDescription: { fontSize: 16, color: '#6C5C4B', marginBottom: 5 },
  dishPrice: { fontSize: 16, fontWeight: '600', color: '#4F3B2F', marginBottom: 5 },
  dishCategory: { fontSize: 14, fontStyle: 'italic', color: '#9C8265', marginBottom: 10 },
  removeButton: {
    backgroundColor: '#DAB68C',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  removeButtonText: { color: '#FFF', fontWeight: '600', fontSize: 16 },
});