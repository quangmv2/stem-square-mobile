import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import UserAvatar from "@muhzi/react-native-user-avatar";

const data = [
    {
        id: 1,
        position: 'admin',
        info: [
            {
                id: 1,
                name: 'Nguyễn Viết Hoàng',
                teamName: 'manager',
                avatarName: 'H',
                avatarImage: 'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1545050015523-3BUJ7SL0BUD6TLN499GP/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/chup-anh-san-pham-apo-8.jpeg',
                avatarColor: '#fe8394'
            },
            {
                id: 2,
                name: 'Võ Hiệp',
                teamName: 'manager',
                avatarName: 'H',
                avatarImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                avatarColor: '#71cbd1'
            },

        ]

    },
    {
        id: 2,
        position: 'dev',
        info: [
            {
                id: 1,
                name: 'Quỳnh Nga',
                teamName: 'reactjs',
                avatarName: 'N',
                avatarImage: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                avatarColor: '#7160ee'
            },
            {
                id: 2,
                name: 'Mai Quang',
                teamName: 'manager',
                avatarName: 'Q',
                avatarImage: 'https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                avatarColor: '#53d575'
            },

        ]


    },
    {
        id: 3,
        position: 'test',
        info: [
            {
                id: 1,
                name: 'Việt Long',
                teamName: 'automation',
                avatarName: 'L',
                avatarImage: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                avatarColor: '#ffd430'
            },
            {
                id: 2,
                name: 'Cường Nguyễn',
                teamName: 'internship',
                avatarName: 'C',
                avatarImage: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                avatarColor: '#464964'
            },

        ]


    }
]

const renderItem = (name, teamName, avatarName, avatarColor, avatarImage) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 20, borderRadius: 5, marginTop: 10,

        }}>
            <UserAvatar
                userName={avatarName}
                size={40}
                src={avatarImage}
                backgroundColor={avatarColor}
            />
            <View style={{ paddingLeft: 10 }}>
                <Text>{name}</Text>
                <Text style={{ color: '#dbdbe4', fontWeight: 'bold', paddingTop: 5, textTransform: 'uppercase' }}>{teamName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const renderEmp = (position, info) => {
    return (
        <View>
            <Text style={{ textTransform: 'uppercase', paddingTop: 10, color: '#b9bac7', fontWeight: 'bold' }}>{position}</Text>
            <FlatList
                scrollEnabled={false}
                keyExtractor={item => item.id}
                data={info}
                renderItem={itemData => renderItem(itemData.item.name, itemData.item.teamName, itemData.item.avatarName, itemData.item.avatarColor, itemData.item.avatarImage)}
            />
        </View>
    )
}
const App = () => {
    return (
        <View style={{ backgroundColor: '#f5f6fa', flex: 1, paddingHorizontal: 10, paddingTop: 60 }}>
            <View >
                <Text style={{ color: '#bdbfcb', fontWeight: 'bold' }}>Suggest Invitation</Text>
                <View style={styles.cardContainer}>
                    <View>
                        <Text style={{ fontSize: 18 }}>Quỳnh Nga</Text>
                        <Text style={{ color: '#d7d7e0', paddingTop: 6 }}>quynhnganav@gmail.com</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <AntDesign name="closecircle" size={24} color="#f87372" />
                        <AntDesign name="checkcircle" size={24} color="#58d57a" style={{ marginLeft: 10 }} />
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 20 }}>
                <FlatList

                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={itemData => renderEmp(itemData.item.position, itemData.item.info)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

    }

})
export default App;