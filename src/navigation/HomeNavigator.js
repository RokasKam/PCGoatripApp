import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';
import MapScreen from '../screens/MapScreen/MapScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: Platform.OS === 'ios',
          headerTransparent: true,
          title: '',
          headerTintColor: 'black',
        }}
        name="Map"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
