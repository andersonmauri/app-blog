import react from 'react';

import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routs from './src/routs'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#232630" barStyle='light-content' />

      <Routs />

    </NavigationContainer>
  );
}

