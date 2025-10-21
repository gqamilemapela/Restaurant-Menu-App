import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuContext } from '../context/MenuContext';

// Optional helper for formatting Rand
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Dashboard</Text>

      <View style={styles.statsContainer}>
        <Text>Total Dishes: {totalDishes}</Text>
        <Text>Average Price: {formatRand(averagePrice)}</Text>
        <Text>Categories: {categoriesCount}</Text>
        <Text>Vegetarian Dishes: {vegetarianCount}</Text>
      </View>

      <Button
        title="Add New Dish"
        onPress={() => navigation.navigate('AddDish')}
      />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishCard}>
            <Text style={styles.dishName}>{item.name} ({formatRand(item.price)})</Text>
            <Text>{item.description}</Text>
            <Text>Category: {item.category}</Text>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  statsContainer: { marginBottom: 20 },
  list: { marginTop: 10 },
  dishCard: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    marginBottom: 12,
  },
  dishName: { fontWeight: 'bold', fontSize: 16 },
});