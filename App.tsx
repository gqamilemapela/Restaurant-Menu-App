import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import ChefLoginScreen from './screens/ChefLoginScreen';
import ChefDashboardScreen from './screens/ChefDashboardScreen';
import AddDishScreen from './screens/AddDishScreen';
import GuestMenuScreen from './screens/GuestMenuScreen';
import GuestFilterScreen from './screens/GuestFilterScreen';
import { MenuProvider } from './context/MenuContext';

export type RootStackParamList = {
  Welcome: undefined;
  ChefLogin: undefined;
  ChefDashboard: undefined;
  AddDish: undefined;
  GuestMenu: undefined;
  GuestFilter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="ChefLogin" component={ChefLoginScreen} />
          <Stack.Screen name="ChefDashboard" component={ChefDashboardScreen} />
          <Stack.Screen name="AddDish" component={AddDishScreen} />
          <Stack.Screen name="GuestMenu" component={GuestMenuScreen} />
          <Stack.Screen name="GuestFilter" component={GuestFilterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}