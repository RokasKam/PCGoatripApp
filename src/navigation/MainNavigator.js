import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPlaceScreen from '../screens/AddPlaceScreen/AddPlaceScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7DA38D',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {paddingBottom: 5, fontSize: 10},
      }}>
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name={'Home'}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={'AddPlace'}
        component={AddPlaceScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="plus" size={size} color={color} />
          ),
          tabBarLabel: 'Add a place',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
