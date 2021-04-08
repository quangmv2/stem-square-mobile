import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent, useRef } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { AttendanceStackParamsList, BottomTabParamList, RootStackParamList } from '../../../types';
import AttendanceItem from '../../components/AttendanceItem'
import { useScrollToTop } from "@react-navigation/native";


const data = [
    {
        id: 1,
        avatar: 'A',
        name: 'Thái Thị Quỳnh Nga',
        isAttendance: true,
        school: 'NDC',
        image: 'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1545050015523-3BUJ7SL0BUD6TLN499GP/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/chup-anh-san-pham-apo-8.jpeg'

    },
    {
        id: 2,
        avatar: 'B',
        name: 'Phan Việt Long',
        isAttendance: true,
        school: 'NDC',

    },
    {
        id: 3,
        avatar: 'C',
        name: 'Nguyễn Việt Hoàng',
        isAttendance: true,
        school: 'NDC',
        image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    },
    {
        id: 4,
        avatar: 'D',
        name: 'Mai Văn Quang',
        isAttendance: true,
        school: 'NDC',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    },
    {
        id: 5,
        avatar: 'E',
        name: 'Nguyễn Cường',
        isAttendance: true,
        school: 'NDC',
        image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    },
    {
        id: 6,
        avatar: 'F',
        name: 'Thái Thị Quỳnh Nga',
        isAttendance: true,
        school: 'NDC',
        image: 'https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    },
    {
        id: 7,
        avatar: 'G',
        name: 'Thái Thị Quỳnh Nga',
        isAttendance: true,
        school: 'NDC',
        image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    },
    {
        id: 8,
        avatar: 'H',
        name: 'Thái Thị Quỳnh Nga',
        isAttendance: true,
        school: 'NDC',
        image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    }

]

type AttendanceProps = {
    classnam: string
}

const App: FunctionComponent<RouteProp<AttendanceStackParamsList, 'Attendance'>> = ({
    // params
}) => {

    const { params }: any = useRoute()
    

    return (
        <View style={{ marginTop: 50 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>
                Danh sách lớp {params && params.classname ? params.classname : ""}
            </Text>
            <View>
                <FlatList
                    style={{ height: '100%', paddingTop: 40 }}
                    keyExtractor={(item: any) => item.id}
                    data={data}
                    renderItem={itemData =>
                        <AttendanceItem
                            img={itemData.item.image}
                            avatar={itemData.item.avatar}
                            name={itemData.item.name}
                            school={itemData.item.school}

                        />}
                />
            </View>
        </View>
    )
}

export default App;
