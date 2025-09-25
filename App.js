import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppNav from './src/navigation/AppNav';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <AppNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}