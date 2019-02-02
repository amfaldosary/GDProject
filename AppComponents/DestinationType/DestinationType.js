import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
import Styles from './../../StyleSheet';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Destination Type',
      };
 
  render() {
    return (
      <View style={Styles.container}>
      <View style={Styles.buttonView}>
            <Button 
            style={Styles.textFont}
            title="Hospitals"
            size={20}
            color="#fff"
            onPress = {this.navigateToHome}
            />
        </View>
        <View style={Styles.buttonView}>
            <Button 
            style={Styles.textFont}
            title="Clinics"
            size={20}
            color="#fff"
            onPress = {this.navigateToHome}
            />
        </View>
        <View style={Styles.buttonView}>
            <Button 
            style={Styles.textFont}
            title="Pharmacy"
            size={20}
            color="#fff"
            onPress = {this.navigateToHome}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({


});