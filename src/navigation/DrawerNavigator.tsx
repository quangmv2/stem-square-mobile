import React from 'react';
import { View } from 'native-base';
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from './BottomTabNavigator';
import Login from "../screens/login";
import Register from "../screens/register";
import { RootNavigator } from '.';
import Header from '../components/header';
import CustomDrawerContent from './CustomDrawerContent';
import { useAuth } from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Admin from "../screens/list-employee";

interface DrawNavigateProps {

}

const MainDrawerNavigator = createDrawerNavigator();

const DrawNavigate: React.FC<DrawNavigateProps> = () => {

    const { isAuth, setUser, setIsAuth, user } = useAuth();

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        AsyncStorage.clear();

    }

    return (
        <MainDrawerNavigator.Navigator
            statusBarAnimation="fade"
            screenOptions={{
                swipeEnabled: true
            }}
            drawerContent={props => <CustomDrawerContent {...props} logout={isAuth ? logout : null} />}
            drawerStyle={{
                // backgroundColor: "red"
            }}
            initialRouteName={isAuth ? "Login" : "Home"}
        >
            {
                isAuth &&
                <MainDrawerNavigator.Screen
                    name="Home"
                    component={BottomTabNavigator}
                />
            }
            {
                isAuth && user && user.role == "admin" && < MainDrawerNavigator.Screen
                    name="Admin"
                    component={Admin}
                />
            }
            {
                !isAuth && <MainDrawerNavigator.Screen
                    name="Login"
                    component={Login}
                />
            }
            {
                !isAuth && <MainDrawerNavigator.Screen
                    name="Register"
                    component={Register}
                />
            }
        </MainDrawerNavigator.Navigator>
    );
}

export default DrawNavigate;