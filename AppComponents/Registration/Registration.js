import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
import Styles from './../../StyleSheet';

import MyButton from './../../ReusableComponents/Button';
import MyTextInput from './../../ReusableComponents/TextInput';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Registration',
  };
  navigateToLogin = () => {
    this.props.navigation.navigate('Login')
  };
  
  render() {
    return (
        <View style={Styles.container}>
        <Text style={Styles.textFont}>
         Email
        </Text>
            <MyTextInput
                placeholder={'example@domain.com'}
            />
        <Text style={Styles.textFont}>
        Full name
        </Text>
            <MyTextInput
                placeholder={''}
            />
        <Text style={Styles.textFont}>
        Password
        </Text>
            <MyTextInput
                secureTextEntry = {true}
                placeholder={''}
            />
        <Text style={Styles.textFont}>
        Password confirmation
        </Text>
            <MyTextInput
                secureTextEntry = {true}
                placeholder={''}
            />
       
       <MyButton onPress = {this.navigateToLogin}>Done</MyButton>
       
      </View>
    );
  }
}
