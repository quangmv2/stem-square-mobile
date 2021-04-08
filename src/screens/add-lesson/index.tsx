import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const App = () => {
    const [lesson, setLesson] = useState('')
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ width: 120, height: 120, marginTop: 100 }}
                    source={require('./assets/open-book.png')}
                />
            </View>
            <View>
                <Text style={{ textTransform: 'uppercase', textAlign: 'center', paddingVertical: 20, fontWeight: 'bold', letterSpacing: 2, paddingTop: 30 }}>Điền nội dung bài học</Text>
                <View style={{ paddingTop: 10, height: '60%' }}>
                    <DropDownPicker
                        items={[
                            { label: 'Place Your Order', value: 'placeYourOrder', icon: () => <AntDesign name="book" size={24} color="#d2deed" />, },
                            { label: 'Help', value: 'help', icon: () => <AntDesign name="book" size={24} color="#d2deed" /> },
                            { label: 'keep it safe', value: 'keepItSafe', icon: () => <AntDesign name="book" size={24} color="#d2deed" /> },
                        ]}
                        defaultValue={lesson}
                        containerStyle={{ height: 40 }}
                        style={{
                            borderColor: '#98b3cd'
                        }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{}}
                        onChangeItem={item =>
                            setLesson(item.value)
                        }
                    /></View>
                <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#4786eb', borderRadius: 10, marginTop: 10, paddingVertical: 15 }}>
                    <Text style={{ color: 'white', textTransform: 'uppercase', fontWeight: 'bold' }}>Thêm bài học</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center', borderColor: '#4786eb', borderRadius: 10, borderWidth: 1,
                    paddingVertical: 10, marginTop: 10, flexDirection: 'row',
                    justifyContent: 'space-between', paddingHorizontal: 10
                }}>
                    <View></View>
                    <Text style={{ color: '#4786eb', textTransform: 'uppercase', fontWeight: 'bold' }}>Điểm danh</Text>
                    <MaterialIcons name="arrow-forward" size={24} color="#4786eb" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default App;