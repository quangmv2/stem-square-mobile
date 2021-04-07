import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/Home';
import Salary from "../screens/salary";
import TabContactScreen from '../screens/Contact';
import { BottomTabParamList, TabContactParamList, TabHomeParamList } from '../../types';
import Header from '../components/header';

export const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={TabContactNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-call" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      <TabHomeStack.Screen
        name="Home"
        component={TabHomeScreen}
        options={{ 
          headerTitle: 'Home',
          //if you hidden header
          // headerShown: false 
       }}
      />
      <TabHomeStack.Screen
        name="Salary"
        component={Salary}
        options={{ 
          headerTitle: 'Salary',
       }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabContactStack = createStackNavigator<TabContactParamList>();

export function TabContactNavigator() {
  return (
    <TabContactStack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      <TabContactStack.Screen
        name="Contact"
        component={TabContactScreen}
        options={{ headerTitle: 'Contact' }}
      />
    </TabContactStack.Navigator>
  );
}
