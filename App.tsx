import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignUpScreen from './src/screens/SignUpScreen';














const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Fitness For Life">
        <Stack.Screen name="Fitness For Life" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
