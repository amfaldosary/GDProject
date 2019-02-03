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
            <View style={styles.ServiceButton}>
              <Button 
              style={Styles.textFont}
              title="Service"
              size={20}
              color="#fff"
              onPress = {this.navigateToDestinationType}
              />
            </View>
            <View style={styles.EmergencyButton}>
              <Button 
              style={Styles.textFont}
              title="Emergency"
              size={20}
              color="#fff"
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
  ServiceButton: {
    backgroundColor: '#964d4d',
    position: 'absolute',
    borderRadius: 12,
    bottom: 50,
    left: '15%',
  },
  EmergencyButton: {
    backgroundColor: '#964d4d',
    position: 'absolute',
    borderRadius: 12,
    bottom: 50,
    right: '15%',
  },
 });