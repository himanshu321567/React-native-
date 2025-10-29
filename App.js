import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Schedule from './screens/Schedule';
import Stats from './screens/Stats';
import Profile from './screens/Profile';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 70, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingBottom: 10, paddingTop: 10 },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
