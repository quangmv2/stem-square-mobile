import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/Home';
import Salary from "../screens/salary";
import TabUserScreen from '../screens/user';
import { BottomTabParamList, TabUserParamList, TabHomeParamList, AttendanceStackParamsList } from '../../types';
import ListClass from "../screens/list-class";
import Attendance from "../screens/attendance";
import LearningHub from "../screens/learning-hub";
import Header from '../components/header';
import { useAuth } from '../store';

export const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { user } = useAuth()

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
      {
        user && user.role != "student" && <BottomTab.Screen
          name="Attendance"
          component={TabAttendanceNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-checkbox" color={color} />,
          }}
        />
      }

      {
        user && user.role != "student" && <BottomTab.Screen
          name="Salary"
          component={TabSalaryNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-list" color={color} />,
          }}
        />
      }

      <BottomTab.Screen
        name="User"
        component={TabUserNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-people" color={color} />,
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
          headerShown: false
        }}
      />
      <TabHomeStack.Screen
        name="LearningHub"
        component={LearningHub}
        options={{
          headerTitle: 'Learning',
        }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabUserStack = createStackNavigator<TabUserParamList>();

export function TabUserNavigator() {
  return (
    <TabUserStack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      <TabUserStack.Screen
        name="User"
        component={TabUserScreen}
        options={{
          headerTitle: 'User',
          headerShown: false
        }}
      />
    </TabUserStack.Navigator>
  );
}

const TabSalaryStack = createStackNavigator()

export const TabSalaryNavigator = () => {
  return (
    <TabSalaryStack.Navigator>
      <TabSalaryStack.Screen
        name="Salary"
        component={Salary}
        options={{
          headerTitle: 'Salary',
          headerShown: false
        }}
      />
    </TabSalaryStack.Navigator>
  )
}

const TabAttendanceStack = createStackNavigator<AttendanceStackParamsList>()

export const TabAttendanceNavigator = () => {
  return (
    <TabAttendanceStack.Navigator>
      <TabAttendanceStack.Screen
        name="ListClass"
        component={ListClass}
        options={{
          headerTitle: 'ListClass',
          headerShown: false
        }}
      />

      <TabAttendanceStack.Screen
        name="Attendance"
        component={Attendance}
        options={{
          headerTitle: 'Attendance',
          headerShown: false
        }}
      />
    </TabAttendanceStack.Navigator>
  )
}


