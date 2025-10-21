import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { MenuContext } from '../context/MenuContext';

export default function AddDishScreen() {
  const { addDish } = useContext(MenuContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
      image: imageUri || '', // Use selected image
      isVegetarian: false,
    });

    Alert.alert('Success', 'Dish added!');
    setName('');
    setDescription('');
    setPrice('');
    setImageUri(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>

      <TextInput placeholder="Dish Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      
      <Picker selectedValue={category} onValueChange={(value) => setCategory(value)} style={styles.picker}>
        <Picker.Item label="Starters" value="Starter" />
        <Picker.Item label="Mains" value="Main" />
        <Picker.Item label="Desserts" value="Dessert" />
      </Picker>

      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />

      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.buttonText}>{imageUri ? 'Change Image' : 'Pick an Image'}</Text>
      </TouchableOpacity>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.previewImage} />}

      <TouchableOpacity style={styles.button} onPress={handleAddDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FDF6F0',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4A3F35',
    marginBottom: 20,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DAB68C',
  },
  picker: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#DAB68C',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  imageButton: {
    backgroundColor: '#A1866F',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
});