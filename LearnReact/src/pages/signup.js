import React, {Component} from 'react';

import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

import Logo from '../components/logo';
import Form from '../components/form';
import {Actions} from 'react-native-router-flux';

export default class signup extends Component{
    signIn(){
        Actions.login();
    }
      render(){
    return(
        <View style={styles.container}>
        <Logo/>
        <Form name="Signup"/>
        <View style={styles.signUpTextView}>
            <Text style={styles.noAccountSetup}>Already have an account?</Text>
            <TouchableOpacity onPress={this.signIn}><Text style={styles.signUpText}> SignIn</Text></TouchableOpacity>
        </View>
        </View>
    );
      }
};

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#455a64',
        alignItems:"center",
        justifyContent:"center"
        
      },
      signUpTextView:{
        marginBottom:10,
        flexDirection:"row",
        justifyContent:"center",
        paddingVertical:15
    },
    noAccountSetup:{
        color:"#90a4ae",
        fontSize:15
    },
    signUpText:{
        color:"#fff",
        marginBottom:10,
        fontSize:18
    }
});