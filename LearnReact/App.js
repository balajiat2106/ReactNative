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
      <StatusBar backgroundColor="grey" barStyle="light"/>
    <Login/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#455a67',
    alignItems:"center",
    justifyContent:"center"
  }
});

export default App;
