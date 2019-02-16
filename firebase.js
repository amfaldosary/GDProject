import firebase from 'react-native-firebase';

firebase.auth().login()
  .then((user) => {
    console.log(user.isAnonymous);
  });

const login = (user) => {

}