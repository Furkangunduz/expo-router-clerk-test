import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon_sb',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name="search" />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: 'wishlist',
          tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name="heart-outline" />,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: 'trips',
          tabBarIcon: ({ color, size }) => <FontAwesome5 color={color} size={size} name="airbnb" />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: 'inbox',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} size={size} name="message-outline" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name="person-circle-outline" />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
