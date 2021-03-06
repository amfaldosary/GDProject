import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
import Styles from './../../StyleSheet';

import MyButton from './../../ReusableComponents/Button';
import MyTextInput from './../../ReusableComponents/TextInput';


export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    navigateToHome = () => {
        this.props.navigation.navigate('Home')
    };

    navigateToRegistration = () => {
        this.props.navigation.navigate('Registration')  
      };
  render() {
    return (
      <View style={Styles.container}>
      <View style={Styles.LoginScreen}>
        <Text style={Styles.textFont}>
        Username
        </Text>
            <MyTextInput
                placeholder={'example@domain.com'}
            />
        <Text style={Styles.textFont}>
        Password
        </Text>
            <MyTextInput
                secureTextEntry = {true}
                placeholder={'xxxxxxxxx'}
            />
       <MyButton onPress={this.navigateToHome}>Login</MyButton>
       <View>
           <Button 
            title="create an account"
            color="#000"
            onPress = {this.navigateToRegistration}
           />
       </View>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({


});