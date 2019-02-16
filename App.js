/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Navigator from './AppNavigation/Navigator';
import {Provider} from 'react-redux';
import store from './store' 

export default class App extends React.Component {
  render() {
    return (  
      <Provider store = {store}>
        <Navigator/> 
      </Provider>
      );
  }
}