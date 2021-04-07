import { RouteProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
// import { RootStackParamList } from '../../../types';

import { Text, View } from '../../components/Themed';



const Contact = ({

}) => {

  const navigation = useNavigation();

  React.useEffect(() => {
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
    </View>
  );
}
export default Contact;

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
