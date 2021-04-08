import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Ionicons } from '@expo/vector-icons';

const AttendanceItem = props => {

    const [ isAttendance, setIsAttendance ] = useState(true);
    return (
        <View>
        <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <UserAvatar
        userName={props.avatar}
        size={40}
        src = {props.img}
        backgroundColor="#0be881"
      />
        <View style={{ paddingLeft: 10}}>
        <Text>{props.name}</Text>
        <Text style={{ color: '#ccc', fontSize: 14}}>School: {props.school}</Text>
        </View>
        </View>
        <TouchableOpacity onPress={() => {setIsAttendance(!isAttendance)}}>
     { isAttendance ?   <Ionicons name="md-checkmark-circle" size={32} color="green" /> : <Ionicons name="md-close-circle" size={32} color="red" /> }
        </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
}


})
export default AttendanceItem;