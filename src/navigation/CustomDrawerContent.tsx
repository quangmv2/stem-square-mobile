import React from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Linking } from 'react-native';
import { View } from 'native-base';

const CustomDrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = (props) => {
    return (
        <View style={{
            height: "100%"
        }}>
            <View
                style={{
                    height: 200,
                    backgroundColor: "#f5f6fa"
                }}
            ></View>
            <DrawerContentScrollView {...props} style={{
            }}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Help"
                    onPress={() => Linking.openURL('https://mywebsite.com/help')}
                />
            </DrawerContentScrollView>
        </View>
    );
}

export default CustomDrawerContent;