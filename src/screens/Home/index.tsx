import React from 'react';
import { FlatList, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import moment from "moment";
import UserAvatar from "@muhzi/react-native-user-avatar";
import { EvilIcons, Ionicons, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../store';


const yourDate = new Date()
const date = new Date();

const data = [
  {
    name: 'library',
    id: 1,
    icon: <Ionicons name='library' size={30} color="white" />,
    color: '#12162a',
    screen: null
  },
  {
    name: 'MyUni',
    id: 2,
    color: '#b7aaf0',
    icon: <FontAwesome name="graduation-cap" size={30} color="white" />,
    screen: null

  },
  {
    name: 'Learning Hub',
    id: 3,
    color: '#acdac5',
    icon: <FontAwesome name="leanpub" size={30} color="white" />,
    screen: "LearningHub"

  },
  {
    name: 'Chat',
    id: 4,
    color: '#eec2a3',
    icon: <Entypo name="chat" size={30} color="white" />,
    screen: null

  },
]

const renderClassItem = () => {
  return (
    <View style={{ backgroundColor: '#f9f9fc', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderRadius: 20, marginVertical: 5 }}>
      <View style={{ width: '20%', alignItems: 'center', borderRightColor: '#cfcfd6', borderRightWidth: 1 }}>
        <Text>07:00</Text>
        <Text style={{ color: '#acacb3' }}>AM</Text>
      </View>
      <View style={{ paddingLeft: 20, flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={{ textTransform: 'uppercase' }}>spike level 2: 11111</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={{ color: '#acacb3', paddingLeft: 5 }}>Room 22 Floor 3 NDC school</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <UserAvatar
            userName="John Samuel"
            size={25}
            backgroundColor="#0be881"
            src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg"
          />
          <Text style={{ color: '#acacb3', paddingLeft: 5 }}>Phan Lê Thái Duy</Text>
        </View>
      </View>
    </View>
  )
}
const App = () => {

  const navigation = useNavigation();
  const { user } = useAuth()

  const renderItem = (color, iconName, name, screen) => {
    return (
      <TouchableOpacity style={{ width: '48%', backgroundColor: color, padding: 15, borderRadius: 20, marginTop: 10 }}
        onPress={() => {
          screen && navigation.navigate(screen)
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          {iconName}
          <AntDesign name="plussquareo" size={24} color="white" /></View>
        <Text style={{ textTransform: 'capitalize', color: 'white', fontSize: 20, paddingTop: 20 }}>{name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#d5e7ff', flex: 1 }}>
      <TouchableOpacity style={{
        position: "absolute",
        left: 15,
        top: 45
      }}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <EvilIcons name="navicon" size={30} color="black" />
      </TouchableOpacity>
      <View style={{ maxHeight: 300, minHeight: '20%', paddingTop: 40, paddingHorizontal: 10, paddingBottom: 30 }}>
        <Text style={{ textAlign: 'right' }} >{moment().format('DD-MM-YYYY')} </Text>
        <View style={{ flexDirection: 'row', paddingTop: 40, paddingLeft: 10 }}>
          <UserAvatar
            userName="John Samuel"
            size={40}
            backgroundColor="#0be881"
            src={
              user&&user.image ? user.image :
              "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1545050015523-3BUJ7SL0BUD6TLN499GP/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/chup-anh-san-pham-apo-8.jpeg"
            }
          />
          <View style={{ paddingLeft: 10 }} >
            <Text style={{ color: '#434f93', fontWeight: 'bold', fontSize: 30, letterSpacing: 0.7 }}>Hi {user?.fullname}</Text>
            <Text style={{ color: '#b5c6e6', paddingTop: 10 }}>Here is a list of schedule</Text>
            <Text style={{ color: '#b5c6e6' }}>you need to check</Text>
          </View>
        </View>

      </View>
      <View style={{ backgroundColor: 'white', height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 12, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, paddingVertical: 20, }}>
          <Text style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>today classes(2)</Text>
          <TouchableOpacity>
            <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: 12, color: '#847ed9' }}>see all</Text>
          </TouchableOpacity>
        </View>
        {renderClassItem()}
        {renderClassItem()}
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, paddingVertical: 20, }}>
            <Text style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>essential</Text>
            <TouchableOpacity>
              <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: 12, color: '#847ed9' }}>view </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            scrollEnabled={false}
            keyExtractor={(item: any) => item.id}
            data={data}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between"
            }}
            renderItem={itemData => renderItem(itemData.item.color, itemData.item.icon, itemData.item.name, itemData.item.screen)}
          />

        </View>
      </View>


    </SafeAreaView>
  )
}

export default App;

