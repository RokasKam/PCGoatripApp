import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AddPlaceScreen from '../screens/AddPlaceScreen/AddPlaceScreen';
import ProfileScreen from '../screens/ProfileScreen./ProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <>
      <NavigationContainer independent={true}>
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
            component={HomeScreen}
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
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
