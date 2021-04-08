import { View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { FlatList } from 'react-native-gesture-handler';

const renderItem = (title, level, student, progress) => {
    return (
        <View style={{ backgroundColor: 'white', padding: 20, marginTop: 50, borderRadius: 30, height: 190 }}>
            <Image
                style={{ width: 140, height: 190, position: 'absolute', bottom: 0, borderRadius: 30 }}
                source={{
                    uri: 'https://source.unsplash.com/random',
                }}
            />
            <View style={{ paddingLeft: 140 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', letterSpacing: 1.5 }}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="infocirlceo" size={24} color="#bdeae2" />
                        <Text style={{ color: '#8c8b9c', textTransform: 'uppercase', paddingLeft: 4 }}>{level}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                        <AntDesign name="user" size={24} color="#f4b199" />
                        <Text style={{ color: '#8c8b9c', textTransform: 'uppercase', paddingLeft: 4 }}>{student} students</Text>
                    </View>
                </View>
                <View >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#8c8b9c', fontWeight: 'bold' }}>Learned to</Text>
                        <Text style={{ color: '#7190fe', fontWeight: 'bold', fontSize: 24, paddingLeft: 10 }}>{progress * 100} %</Text>
                    </View>
                    <Progress.Bar progress={progress} width={200} height={6} color='#7190fe' />
                </View>
            </View>

        </View>
    )
}

const data = [
    {
        id: 1,
        title: 'Poster font design',
        level: 'SPIKE',
        student: 30,
        progress: 0.87
    },
    {
        id: 2,
        title: 'HELP',
        level: 'SPIKE',
        student: 2,
        progress: 0.87
    },
    {
        id: 3,
        title: 'PLACE YOUR ORDER',
        level: 'we do',
        student: 8,
        progress: 0.3
    },
    {
        id: 4,
        title: 'Poster font design',
        level: 'SPIKE',
        student: 10,
        progress: 0.5
    },


]
const App = () => {
    return (

        <View style={{ backgroundColor: '#f4f5f9', flex: 1, paddingTop: 20 }}>

            <Text style={{paddingHorizontal: 20,textTransform: 'uppercase', fontWeight: 'bold', fontSize: 30, letterSpacing: 2, paddingTop: 10 }}>
                progress
            </Text>

            <FlatList
                keyExtractor={item => item.id}
                data={data}
                style={{
                    paddingHorizontal: 20,
                }}
                renderItem={itemData => renderItem(itemData.item.title, itemData.item.level, itemData.item.student, itemData.item.progress)}
            />

        </View>
    )
};

export default App;