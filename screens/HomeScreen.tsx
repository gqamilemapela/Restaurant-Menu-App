import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuContext } from '../context/MenuContext';

// Array for looping and organizing categories
const courseLabels = ['Starter', 'Main', 'Dessert'] as const;
type Course = typeof courseLabels[number];

// Function demonstrates loops, functions, and organization
function computeAverageByCourse(menuItems: any[]) {
  const sums: Record<Course, number> = { Starter: 0, Main: 0, Dessert: 0 };
  const counts: Record<Course, number> = { Starter: 0, Main: 0, Dessert: 0 };

  // for...of loop (Part 3 requirement)
  for (const item of menuItems) {
    if (courseLabels.includes(item.category)) {
      sums[item.category as Course] += item.price;
      counts[item.category as Course]++;
    }
  }

  const averages: Record<Course, number> = { Starter: 0, Main: 0, Dessert: 0 };

  for (const course in sums) {
    const key = course as Course;
    averages[key] = counts[key] > 0 ? sums[key] / counts[key] : 0;
  }

  return averages;
}

export default function HomeScreen() {
  const { menuItems } = useContext(MenuContext);
  const averages = computeAverageByCourse(menuItems);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Table</Text>
      <Text style={styles.subtitle}>Average Price by Course</Text>

      {courseLabels.map((course) => (
        <View key={course} style={styles.row}>
          <Text style={styles.course}>{course}:</Text>
          <Text style={styles.price}>R{averages[course].toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4A3F35',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#A1866F',
    marginBottom: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#DAB68C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  course: { fontSize: 18, fontWeight: '600', color: '#4A3F35' },
  price: { fontSize: 18, fontWeight: '700', color: '#DAB68C' },
});