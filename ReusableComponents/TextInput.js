import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const myTextInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                autoCapitalize={"none"}
                autoCorrect={false}
            />
       </View>
    );
}

export default myTextInput;


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
    },
    textInput: {
        backgroundColor: '#fff',
        height: 44,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 12,
    },
   });
