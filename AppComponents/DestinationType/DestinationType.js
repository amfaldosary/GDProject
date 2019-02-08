import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
import Styles from './../../StyleSheet';
import MyButton from './../../ReusableComponents/Button';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Destination Type',
      };
 
  render() {
    return (
      <View style={Styles.container}>
      <MyButton>Hospitals</MyButton>
      <MyButton>Clinics</MyButton>
      <MyButton>Pharmacy</MyButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({


});