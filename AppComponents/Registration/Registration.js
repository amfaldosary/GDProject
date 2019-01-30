import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styles from './../../StyleSheet';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View style={Styles.container}>
       <Text style={Styles.textFont}> Registration screen FOOLS! </Text> 
      </View>
    );
  }
}
