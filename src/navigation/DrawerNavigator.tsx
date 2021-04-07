import { View } from 'native-base';
import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from './BottomTabNavigator';
import { RootNavigator } from '.';
import Header from '../components/header';
import CustomDrawerContent from './CustomDrawerContent';

interface DrawNavigateProps {

}

const MainDrawerNavigator = createDrawerNavigator();

const DrawNavigate: React.FC<DrawNavigateProps> = () => {
    return (
        <MainDrawerNavigator.Navigator
            statusBarAnimation="slide"
            drawerContent={CustomDrawerContent}
            drawerStyle={{
                // backgroundColor: "red"
            }}
        >
            <MainDrawerNavigator.Screen
                name="Home"
                component={BottomTabNavigator}
            />
        </MainDrawerNavigator.Navigator>
    );
}

export default DrawNavigate;