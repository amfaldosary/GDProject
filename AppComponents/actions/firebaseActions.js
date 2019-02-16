import {LOGIN_USER, FETCH_PLACES , REGISTER_USER} from './types';
import firebase from 'react-native-firebase';

export const loginUser = () => dispatch => {
    firebase.auth()
    .signInAnonymously()
    .then(credential => {
      if (credential) {
        console.log('default app user ->', credential.user.toJSON());
        payload: user;
      }
    });
}