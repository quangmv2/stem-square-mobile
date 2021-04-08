import React from "react";
import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Feather, AntDesign, Entypo, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { useAuth } from "../../store";


const data = [
    {
        id: 1,
        title: 'Adress',
        work: 'Front-end developer',
        date: 'Septmeber 2020',
        color: '#3f52e3'
    },
    {
        id: 2,
        title: 'Position',
        work: 'Teacher',
        date: 'Septmeber 2020',
        color: '#3c87ff'
    },
    {
        id: 3,
        title: 'TaxId',
        work: 'Design',
        date: 'Septmeber 2020',
        color: '#dd5371'
    },
    {
        id: 4,
        title: 'Date of birth',
        work: 'Tester',
        date: 'Septmeber 2020',
        color: '#a6aee8'
    },

]

const process = [
    {
        id: 1,
        processName: 'Project1',
        tag: <Entypo name="code" size={24} color="#ed5baa" />,
        time: '1 days ago'
    },
    {
        id: 2,
        processName: 'Teacher',
        tag: <Entypo name="code" size={24} color="#ed5baa" />,
        time: '2 days ago'
    },
    {
        id: 3,
        processName: 'Test',
        tag: <Entypo name="code" size={24} color="#ed5baa" />,
        time: '3 days ago'
    },
    {
        id: 4,
        processName: 'Design',
        tag: <Entypo name="code" size={24} color="#ed5baa" />,
        time: '4 days ago'
    },
]

const renderItemProcess = (processName, time, tag) => {
    return (
        <View style={{ backgroundColor: '#d3dff6', width: '100%', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginBottom: 10, paddingVertical: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    {tag}
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ color: '#1c222e', fontWeight: 'bold', fontSize: 17 }}>{processName}</Text>
                    <Text style={{
                        color: '#b6bfca', fontWeight: 'bold', paddingTop: 5
                    }}>{time}</Text>
                </View>
            </View>

            <MaterialIcons name="more-vert" size={24} color="#b6bfca" />

        </View>
    )
}

const renderItem = (title, work, color, date) => {
    return (
        <View style={{ backgroundColor: color, width: 150, borderRadius: 15, padding: 15, height: 180, justifyContent: 'space-between', marginRight: 20, paddingVertical: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <AntDesign name="codesquareo" size={30} color="white" />
                <Text style={{ paddingLeft: 10, letterSpacing: 2, color: 'white', fontWeight: 'bold' }}>{title}</Text>
            </View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{work}</Text>
            <Text style={{ color: '#dadbe3', fontWeight: 'bold' }}>{date}</Text>
        </View>
    )
}

const App = () => {

    const { user } = useAuth()

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView style={{ backgroundColor: '#f5f6fa', flex: 1, paddingHorizontal: 10 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 120, alignItems: 'center' }}>
                    <View style={{ position: 'absolute', top: -35, zIndex: 2 }}>
                        <UserAvatar
                            userName="L"
                            size={80}
                            backgroundColor="#71cde5"
                            src={
                                user && user.image ? user.image :
                                    "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1545050015523-3BUJ7SL0BUD6TLN499GP/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/chup-anh-san-pham-apo-8.jpeg"
                            }
                        />
                    </View>
                    <View style={{}}>
                        <View style={{ alignItems: 'center', paddingTop: 70 }}>
                            <Text style={{ color: '#7c7c96', fontWeight: 'bold', fontSize: 20, letterSpacing: 1.5 }}>
                                {user && user.fullname}
                            </Text>
                            <Text style={{ color: '#dadbe3', paddingTop: 5, letterSpacing: 1 }}>
                                { user?.email }
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 30 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRightColor: '#f8f8fa', borderRightWidth: 2, width: '50%' }}>
                                <Text style={{ color: '#d8d8e1', fontWeight: 'bold' }}>Role</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 8 }}>
                                    <Text>Teacher</Text>
                                    <Feather name="edit-2" size={13} color="black" style={{ paddingLeft: 5 }} />
                                </View>
                            </View>
                            <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#d8d8e1', fontWeight: 'bold' }}>Team</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 8 }}>
                                    <Text >Product</Text>
                                    <Feather name="edit-2" size={13} color="black" style={{ paddingLeft: 5 }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ minWidth: '100%', alignItems: 'center', paddingBottom: 30 }}>
                            <View style={{ minWidth: '60%', maxWidth: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Entypo name="mail-with-circle" size={40} color="#6c5aee" />
                                <View style={{ width: 40, height: 40, backgroundColor: '#068efe', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                                    <Fontisto name="messenger" size={20} color="white" />
                                </View>
                                <View style={{ width: 40, height: 40, backgroundColor: '#53d575', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                                    <Entypo name="phone" size={20} color="white" />
                                </View>


                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingTop: 25, paddingLeft: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#7c7c96' }}>Project</Text>
                    <FlatList
                        horizontal={true}
                        style={{ paddingTop: 10 }}
                        keyExtractor={(item: any) => item.id}
                        data={data}
                        renderItem={itemData => renderItem(itemData.item.title, itemData.item.work, itemData.item.color, itemData.item.date)}

                    />
                </View>
                <View style={{ paddingTop: 25, paddingLeft: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#7c7c96' }}>Process</Text>
                    <FlatList

                        style={{ paddingTop: 10 }}
                        keyExtractor={(item: any) => item.id}
                        data={process}
                        renderItem={itemData => renderItemProcess(itemData.item.processName, itemData.item.time, itemData.item.tag)}

                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default App;




