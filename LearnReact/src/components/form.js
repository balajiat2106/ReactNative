import React from 'react';

import {View,TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native';

const form=()=>{
return(
    <View style={styles.container}>
    <TextInput style={styles.inputBox} placeholder="Email" placeholderTextColor="#fff"></TextInput>
    <TextInput style={styles.inputBox} placeholder="Password" secureTextEntry={true} placeholderTextColor="#fff"></TextInput>
    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
    <View style={styles.signUpTextView}>
        <Text style={styles.noAccountSetup}>Don't have an account?</Text><Text style={styles.signUpText}> Signup</Text>
        </View>
    </View>);
};

const styles=StyleSheet.create({
    inputBox:{
        width:300,
        backgroundColor:"#90a4ae",
        borderRadius:20,
        paddingHorizontal:20,
        margin:10,
        fontSize:20
    },

    container:{
        flex:1,
        backgroundColor:'#455a64',
        alignItems:"center",
        justifyContent:"flex-end"
      },

    buttonText:{
        fontSize:20,
        fontWeight:"700",
        color:"#e2f1f8",
        textAlign:"center",
        paddingVertical:10
    },

    button:{
        backgroundColor:"#1c313a",
        width:300,
        marginTop:30
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

export default form;