import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
import Styles from './../../StyleSheet';
import MapView from 'react-native-maps';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  navigateToDestinationType = () => {
    this.props.navigation.navigate('DestinationType')
};
  render() {
    return (
      <View style={Styles.container}>
          <View style={styles.container} >
              <MapView
              style={styles.map}
              showsUserLocation = {true}
              showsMyLocationButton = {true}
            >
            </MapView>
            <View style={styles.buttonView}>
            <Button 
            style={Styles.textFont}
            title="Service"
            size={20}
            color="#fff"
            onPress = {this.navigateToDestinationType}
            />
       </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonView: {
    backgroundColor: '#979797',
    position: 'absolute',
    bottom:   50,
}
 });