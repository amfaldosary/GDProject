import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
import Styles from './../../StyleSheet';

export default class Login extends React.Component {
    navigateToHome = () => {
        this.props.navigation.navigate('Home')
    }
  render() {
    return (
      <View style={Styles.container}>
        <Text>
        Username
        </Text>
            <TextInput
                style={Styles.textInput}
        
            />
        <Text>
        Password
        </Text>
            <TextInput
                style={Styles.textInput}
            />
       
       <Button 
       title="Login"
       onPress = {this.navigateToHome}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});