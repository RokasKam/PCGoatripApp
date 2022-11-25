import React from 'react';
import type {Node} from 'react';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: Platform.OS === 'ios',
            headerTransparent: true,
            title: '',
            headerTintColor: 'white',
          }}
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
