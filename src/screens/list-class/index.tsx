import React, { FunctionComponent, useRef } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useScrollToTop } from "@react-navigation/native";
import { AttendanceStackParamsList } from "../../../types";
const App: FunctionComponent<RouteProp<AttendanceStackParamsList, 'ListClass'>> = () => {
    const data = [
        {
            id: 1,
            title: 'Lớp học hôm nay',
            backgroundColor: '#f39c48',
            class: [
                {
                    id: 1,
                    className: 'SPIKE',
                    level: 'Level 3',
                    student: 20,
                    week: 3,
                    assignment: 20,
                    icon: <FontAwesome5 name="robot" size={40} color="yellow" />
                },
                {
                    id: 2,
                    className: 'WE DO',
                    level: 'Level 1',
                    student: 8,
                    week: 3,
                    assignment: 12,
                    icon: <FontAwesome5 name="robot" size={40} color="red" />
                }


            ]
        },
        {
            id: 2,
            title: 'Lớp học các ngày khác',
            backgroundColor: '#2f8af7',
            class: [
                {
                    id: 1,
                    className: 'SPIKE',
                    level: 'Level 3',
                    student: 20,
                    week: 3,
                    assignment: 20,
                    icon: <FontAwesome5 name="robot" size={40} color="yellow" />
                },
                {
                    id: 2,
                    className: 'WE DO',
                    level: 'Level 1',
                    student: 8,
                    week: 3,
                    assignment: 12,
                    icon: <FontAwesome5 name="robot" size={40} color="red" />
                },
                {
                    id: 3,
                    className: 'WE DO',
                    level: 'Level 1',
                    student: 8,
                    week: 3,
                    assignment: 12,
                    icon: <FontAwesome5 name="robot" size={40} color="red" />
                }


            ]
        }
    ]

    const navigation = useNavigation()
    const listRef = useRef(null)
    useScrollToTop(listRef)

    const renderClass = (title, classData, backgroundColor) => {
        return (
            <View style={{ paddingTop: 10 }}>
                <Text style={{ backgroundColor: backgroundColor, alignSelf: "flex-start", paddingHorizontal: 20, paddingVertical: 5, color: '#fff', fontWeight: 'bold' }}>{title}</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    data={classData}
                    renderItem={itemData => renderItem(itemData.item.icon, itemData.item.className, itemData.item.level, itemData.item.student, itemData.item.week, itemData.item.assignment)}
                />
            </View>
        )
    }

    const renderItem = (icon, className, level, student, week, assignment) => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 10, padding: 20, borderRadius: 5 }}
                onPress={() => {
                    navigation.navigate('Attendance', {
                        classname: `${className}`
                    });
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {icon}
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ textTransform: 'uppercase', color: '#9c9dbc', fontWeight: 'bold', fontSize: 20, letterSpacing: 2 }}>{className}</Text>
                        <Text style={{ color: '#646797', fontSize: 20, paddingTop: 8, fontWeight: 'bold' }}>{level}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 30 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="people-alt" size={20} color="#b2b4d0" />
                        <Text style={{ textTransform: 'uppercase', color: '#b2b4d0', fontWeight: 'bold', paddingLeft: 1 }}>{student}</Text>
                        <Text style={{ textTransform: 'uppercase', color: '#b2b4d0', paddingLeft: 4 }}>học sinh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="view-week" size={20} color="#b2b4d0" />
                        <Text style={{ textTransform: 'uppercase', color: '#b2b4d0', fontWeight: 'bold', paddingLeft: 1 }}>{week}</Text>
                        <Text style={{ textTransform: 'uppercase', color: '#b2b4d0', paddingLeft: 4 }}>Tuần</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="assignment" size={20} color="#b2b4d0" />
                        <Text style={{ textTransform: 'uppercase', color: '#b2b4d0', fontWeight: 'bold', paddingLeft: 1 }}> {assignment}</Text>
                        <Text style={{ textTransform: 'uppercase', color: '#b2b4d0', paddingLeft: 4 }}> assignment</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#f7f7f7', paddingHorizontal: 10 }}>
            <View style={{ paddingTop: 60 }}>
                <FlatList
                    ref={listRef}
                    keyExtractor={(item: any) => item.id}
                    data={data}
                    renderItem={itemData => renderClass(itemData.item.title, itemData.item.class, itemData.item.backgroundColor)}
                />
            </View>

        </View>
    )

};

export default App;