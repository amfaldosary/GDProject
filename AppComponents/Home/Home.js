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
       <Text style={Styles.textFont}> Home screen SUCKERS! </Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});