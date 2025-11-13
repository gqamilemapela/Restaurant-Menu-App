import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type ChefLoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'ChefLogin'>;

export default function ChefLoginScreen() {
  const navigation = useNavigation<ChefLoginScreenProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    navigation.navigate('ChefDashboard');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.box}>
        <Text style={styles.title}>Chef Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A1866F"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A1866F"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FDF6F0', 
    padding: 20 
  },
  box: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: { 
    fontSize: 30, 
    fontWeight: '700', 
    textAlign: 'center', 
    color: '#4A3F35', 
    marginBottom: 30,
    fontFamily: 'serif',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DAB68C',
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    backgroundColor: '#FFF',
    color: '#4A3F35',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#DAB68C',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  loginText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
});