import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
import Styles from './../../StyleSheet';
import MyButton from './../../ReusableComponents/Button';

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
            <TextInput
                style={Styles.textInput}
                placeholder={'example@domain.com'}
            />
        <Text style={Styles.textFont}>
        Full name
        </Text>
            <TextInput
                style={Styles.textInput}
                placeholder={''}
            />
        <Text style={Styles.textFont}>
        Password
        </Text>
            <TextInput
                style={Styles.textInput}
                secureTextEntry = {true}
                placeholder={''}
            />
        <Text style={Styles.textFont}>
        Password confirmation
        </Text>
            <TextInput
                style={Styles.textInput}
                secureTextEntry = {true}
                placeholder={''}
            />
       
       <MyButton onPress = {this.navigateToLogin}>Done</MyButton>
       
      </View>
    );
  }
}
