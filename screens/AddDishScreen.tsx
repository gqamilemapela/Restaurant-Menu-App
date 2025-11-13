import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { MenuContext, MenuItem } from '../context/MenuContext';

export default function AddDishScreen() {
  const { addDish } = useContext(MenuContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleAddDish = () => {
    if (!name || !description || !price) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    addDish({
      id: Date.now().toString(),
      name,
      description,
      category,
      price: parseFloat(price),
      image: imageUri || '',
      isVegetarian: false,
    });

    Alert.alert('Success', 'Dish added successfully!');
    setName('');
    setDescription('');
    setPrice('');
    setImageUri(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>

      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 90 }]}
        multiline
      />

      <Picker
        selectedValue={category}
        onValueChange={(value: string) => setCategory(value as 'Starter' | 'Main' | 'Dessert')}
        style={styles.picker}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>
          {imageUri ? 'Change Image' : 'Pick an Image'}
        </Text>
      </TouchableOpacity>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}

      <TouchableOpacity style={styles.submitButton} onPress={handleAddDish}>
        <Text style={styles.submitText}>Add Dish</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF6F0',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4A3F35',
    marginBottom: 25,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DAB68C',
  },
  picker: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderColor: '#DAB68C',
    borderWidth: 1,
    marginBottom: 15,
  },
  imageButton: {
    backgroundColor: '#A67C52',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 15,
  },
  imageButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#DAB68C',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  submitText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18,
  },
});