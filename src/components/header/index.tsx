import { DrawerHeaderProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { StackHeaderProps } from '@react-navigation/stack';
import { Text, View } from 'native-base';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native';

interface HeaderProps {

}

const Header: React.FC<StackHeaderProps> = ({
    navigation,
    scene,
}) => {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
                <EvilIcons name="navicon" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text>{
                    !scene.descriptor.options.headerTitle ? scene.route.name : scene.descriptor.options.headerTitle
                }</Text>
            </View>
        </SafeAreaView>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 75,
        paddingTop: Platform.OS === 'android' ? 25 : 10,
        backgroundColor: "#f5f6fa",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    content: {
        flexGrow: 1,
        height: "100%",
        alignItems: 'center',
        justifyContent: "center"
    }
})  