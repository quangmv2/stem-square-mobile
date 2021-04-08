import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const Salary = () => {
  const [isChoosen, setIsChoosen] = useState(true);
  const [tab, setTab] = useState('main');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const data = [
    {
      id: 1,
      status: 'paid',
      job: 'dev',
      date: '29 jun 21',
      money: '330',
      icon: 'dev'
    },
    {
      id: 2,
      status: 'overdue',
      job: 'teacher',
      date: '29 jun 21',
      money: '330',
      icon: 'chalkboard-teacher'
    },
    {
      id: 3,
      status: 'bonus',
      job: 'teacher',
      date: '29 jun 21',
      money: '330',
      icon: 'user-plus'
    },
  ]
  const renderItem = (icon, job, date, money, status) => {
    return (
      <View style={{ alignItems: 'flex-start', flexDirection: 'row', paddingTop: 20 }}>

        <View style={{ width: '20%', alignItems: 'center', paddingTop: 8 }}>
          <FontAwesome5 name={icon} size={24} color={status == 'overdue' ? '#e16e6d' : "#325481"} />
        </View>
        <View style={{ borderBottomColor: '#f9f9f9', borderBottomWidth: 2 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
            <View style={{ width: '70%' }}>
              <Text style={{ textTransform: 'capitalize', fontSize: 20, fontWeight: 'bold' }}>
                {job}
              </Text>
              <View style={{ paddingTop: 5, alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ color: '#b8b8b8', paddingRight: 4 }}>
                  Due date:
      </Text>
                <Text style={status == 'overdue' ? styles.textOverdue : {}}>
                  {date}
                </Text>
              </View>
              <Text style={[styles.statusText, status == 'overdue' ? styles.textOverdue : {}]}>{status}</Text>
            </View>
            <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{money}</Text>
              <MaterialIcons name="attach-money" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={{ paddingTop: '15%', paddingHorizontal: 20, paddingBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => { setIsChoosen(!isChoosen) }}
            style={isChoosen ?
              { backgroundColor: '#2381f6', borderRadius: 20, padding: 10, paddingHorizontal: 15 } :
              { padding: 10, paddingHorizontal: 15 }} >
            <Text style={isChoosen ?
              { color: 'white', fontWeight: 'bold' } :
              { color: '#5a5a5a', fontWeight: 'bold' }}>This month</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity><Text style={{ color: '#5a5a5a', fontWeight: 'bold' }}>2019</Text></TouchableOpacity>
            <TouchableOpacity onPress={showDatePicker}>
              <MaterialIcons name="calendar-today" size={25} color="#5a5a5a" style={{ paddingLeft: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: 30 }}>
          <Text style={{ textTransform: 'uppercase', color: '#b8b8b8', fontWeight: 'bold' }}>salary balance</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
            <Text style={{ fontWeight: '800', fontSize: 30 }}>2092.00</Text>
            <MaterialIcons name="attach-money" size={30} color="black" />
          </View>

        </View>
        <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: '30%', borderRightColor: '#ccc', borderRightWidth: 1 }}>
            <Text style={{ textTransform: 'uppercase', color: '#b8b8b8', fontWeight: 'bold', fontSize: 14 }} >bonus</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
              <Text style={{ fontWeight: '800' }}>2092.00</Text>
              <MaterialIcons name="attach-money" size={15} color="black" />
            </View>
          </View>
          <View style={{ width: '70%', paddingLeft: 20 }}>
            <Text style={{ textTransform: 'uppercase', color: '#b8b8b8', fontWeight: 'bold', fontSize: 14 }} >main salary</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
              <Text style={{ fontWeight: '800' }}>2092.00</Text>
              <MaterialIcons name="attach-money" size={15} color="black" />
            </View>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', height: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingHorizontal: 10 }}>
          <View style={{ width: '50%', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                setTab('main')
              }}
              style={[styles.tab, tab == 'main' ? styles.tabChoosen : {}]}>
              <Text style={[styles.text, tab == 'main' ? styles.textWhite : styles.textGrey]}>Main</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '50%', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                setTab('detail')
              }}
              style={[styles.tab, tab == 'detail' ? styles.tabChoosen : {}]}>
              <Text style={[styles.text, tab == 'detail' ? styles.textWhite : styles.textGrey]}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          keyExtractor={(item: any) => item.id}
          data={data}
          renderItem={itemData => renderItem(itemData.item.icon, itemData.item.job, itemData.item.date, itemData.item.money, itemData.item.status)}

        />
      </View>
    </View>
  )


}

const styles = StyleSheet.create({
  tab: {
    borderRadius: 20,
    paddingVertical: 10,
    width: '80%',
  },
  tabChoosen: {
    backgroundColor: '#2786ff'
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textWhite: {
    color: 'white'
  },
  textGrey: {
    color: '#797979'
  },
  statusText: {
    marginTop: 11, padding: 5, borderRadius: 15, borderColor: '#e6e6e6', width: 80, borderWidth: 1, alignSelf: 'flex-start', textAlign: 'center'
  },
  textOverdue: {
    color: '#e16e6d'
  }
})

export default Salary;