/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Routes from "./src/routes";
import Signup from "./src/pages/signup";
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light"/>
    <Routes/>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#455a64',
    alignItems:"center",
    justifyContent:"center"
  }
});

export default App;
