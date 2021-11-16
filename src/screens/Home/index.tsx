import React from 'react';
import { FlatList, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import moment from "moment";
import UserAvatar from "@muhzi/react-native-user-avatar";
import { EvilIcons, Ionicons, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../store';

const App = () => {

  const navigation = useNavigation();
  const { user } = useAuth()

  return (
    <SafeAreaView style={{ backgroundColor: '#d5e7ff', flex: 1 }}>
      
    </SafeAreaView>
  )
}

export default App;

