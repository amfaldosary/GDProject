import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
import Styles from './../../StyleSheet';

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
        <Text style={Styles.textFont}>
        Username
        </Text>
            <TextInput
                style={Styles.textInput}
                placeholder={'example@domain.com'}
                
        
            />
        <Text style={Styles.textFont}>
        Password
        </Text>
            <TextInput
                style={Styles.textInput}
                secureTextEntry = {true}
                placeholder={'xxxxxxxxx'}
            />
       <View style={Styles.buttonView}>
       <Button 
       style={Styles.textFont}
       title="Login"
       size={20}
       color="#fff"
       onPress = {this.navigateToHome}
       />
       </View>
       <View>
           <Button 
            title="create an account"
            color="#000"
            onPress = {this.navigateToRegistration}
           />
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({


});