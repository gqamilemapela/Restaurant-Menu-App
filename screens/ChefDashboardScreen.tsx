import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuContext, MenuItem } from '../context/MenuContext';

const formatRand = (amount: number) =>
  new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(amount);

export default function ChefDashboard() {
  const { menuItems } = useContext(MenuContext);
  const navigation = useNavigation<any>();

  const totalDishes = menuItems.length;
  const averagePrice =
    totalDishes > 0
      ? menuItems.reduce((sum, item) => sum + item.price, 0) / totalDishes
      : 0;

  const categoriesCount = new Set(menuItems.map(item => item.category)).size;
  const vegetarianCount = menuItems.filter(item => item.isVegetarian).length;

  const { removeDish } = useContext(MenuContext);

  const handleRemoveDish = (id: string) => {
    Alert.alert(
      'Remove Dish',
      'Are you sure you want to remove this dish?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => removeDish(id) },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Dashboard</Text>

      <View style={styles.statsBox}>
        <Text style={styles.stat}>🍴 Total Dishes: <Text style={styles.value}>{totalDishes}</Text></Text>
        <Text style={styles.stat}>💰 Average Price: <Text style={styles.value}>{formatRand(averagePrice)}</Text></Text>
        <Text style={styles.stat}>📂 Categories: <Text style={styles.value}>{categoriesCount}</Text></Text>
        <Text style={styles.stat}>🥦 Vegetarian Dishes: <Text style={styles.value}>{vegetarianCount}</Text></Text>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddDish')}>
        <Text style={styles.addButtonText}>+ Add New Dish</Text>
      </TouchableOpacity>

      <FlatList
        data={menuItems}
                keyExtractor={(item: MenuItem) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.dishInfo}>
                <Text style={styles.dishName}>
                  {item.name} <Text style={styles.price}>({formatRand(item.price)})</Text>
                </Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.category}>Category: {item.category}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveDish(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FDF6F0',
    padding: 20,
  },
  title: { 
    fontSize: 30, 
    fontWeight: '700', 
    color: '#4A3F35', 
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'serif',
  },
  statsBox: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#DAB68C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stat: {
    fontSize: 18,
    color: '#4A3F35',
    marginBottom: 8,
  },
  value: {
    fontWeight: '700',
    color: '#A67C52',
  },
  addButton: {
    backgroundColor: '#DAB68C',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18,
  },
  list: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5C9A1',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  dishInfo: {
    flex: 1,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A3F35',
    marginBottom: 5,
  },
  price: {
    color: '#DAB68C',
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    color: '#5E5145',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#A67C52',
    fontWeight: '600',
  },
  removeButton: {
    backgroundColor: '#D9534F',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    minWidth: 70,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
});