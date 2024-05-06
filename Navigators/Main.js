import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen 
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='home' style={{ position: "relative" }} color={color} size={30} />
          ),
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='shopping-cart' color={color} size={30} />
          ),
          tabBarLabel: 'Cart'
        }}
      />
      <Tab.Screen
        name='Admin'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='cog' color={color} size={30} />
          ),
          tabBarLabel: 'Admin'
        }}
      />
      <Tab.Screen
        name='User'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='user' color={color} size={30} />
          ),
          tabBarLabel: 'User'
        }}
      />
    </Tab.Navigator>
  )
}

export default Main;
