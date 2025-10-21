import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Christoffel's Table</Text>

      <TouchableOpacity
        style={[styles.button, styles.guestButton]}
        onPress={() => navigation.navigate('GuestMenu')}
      >
        <Text style={styles.buttonText}>I'm a Guest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.chefButton]}
        onPress={() => navigation.navigate('ChefLogin')}
      >
        <Text style={styles.buttonText}>I'm the Chef</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#FDF6F0', // soft, elegant cream
  },
  title: { 
    fontSize: 32, 
    fontWeight: '700', 
    marginBottom: 50, 
    textAlign: 'center', 
    color: '#4A3F35', // deep brown, classy
    fontFamily: 'serif', // elegant feel
  },
  button: { 
    paddingVertical: 18, 
    paddingHorizontal: 50, 
    borderRadius: 12, 
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  guestButton: {
    backgroundColor: '#DAB68C', // soft gold
  },
  chefButton: {
    backgroundColor: '#A67C52', // rich brown
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 20, 
    fontWeight: '600', 
    textAlign: 'center' 
  },
});