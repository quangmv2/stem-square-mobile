import React from 'react';
import { View } from 'native-base';
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from './BottomTabNavigator';
import Login from "../screens/login";
import Register from "../screens/register";
import { RootNavigator } from '.';
import Header from '../components/header';
import CustomDrawerContent from './CustomDrawerContent';

interface DrawNavigateProps {

}

const MainDrawerNavigator = createDrawerNavigator();

const DrawNavigate: React.FC<DrawNavigateProps> = () => {
    return (
        <MainDrawerNavigator.Navigator
            statusBarAnimation="fade"
            screenOptions={{
                swipeEnabled: true
            }}
            drawerContent={CustomDrawerContent}
            drawerStyle={{
                // backgroundColor: "red"
            }}
        >
            <MainDrawerNavigator.Screen
                name="Home"
                component={BottomTabNavigator}
            />
            <MainDrawerNavigator.Screen
                name="Login"
                component={Login}
            />
            <MainDrawerNavigator.Screen
                name="Register"
                component={Register}
            />
        </MainDrawerNavigator.Navigator>
    );
}

export default DrawNavigate;