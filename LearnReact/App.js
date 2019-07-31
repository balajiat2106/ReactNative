/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './src/pages/login';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light"/>
    <Login/>
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
