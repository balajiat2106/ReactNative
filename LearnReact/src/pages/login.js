import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

import Logo from '../components/logo';
import Form from '../components/form';

const login=()=>{
    return(
        <View style={styles.container}>
        <Logo/>
        <Text style={styles.TxtHighlight}>Base App</Text>
        <Form/>
        </View>
    );
};

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#455a64',
        alignItems:"center",
        justifyContent:"center"
        
      },

TxtHighlight:{
    color:'#fff',
    fontSize:25
}
});

export default login;