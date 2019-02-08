import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const myButton = (props) => {
    return (
        <TouchableOpacity style={styles.Button} onPress={props.onPress}>
            <Text style={styles.textFont}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

export default myButton;

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#979797',
        marginTop: 10,
        height: 35,
        marginHorizontal: 30,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textFont: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});