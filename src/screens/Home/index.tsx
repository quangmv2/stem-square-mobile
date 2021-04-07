import { RouteProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TabHomeParamList } from '../../../types';

import { Text, View } from '../../components/Themed';

const Home: React.FunctionComponent<RouteProp<TabHomeParamList, 'Home'>> = ({
  
}) => {

  const navigate = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigate.navigate("Salary")}
      >
        <Text style={styles.title}>Salary</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
