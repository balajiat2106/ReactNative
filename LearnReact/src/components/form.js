import React, {Component} from 'react';

import {View,TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native';

export default class form extends Component{
    constructor(props) {
        super(props);
      };
      render(){
return(
    <View style={styles.container}>
    <TextInput style={styles.inputBox} placeholder="Email" placeholderTextColor="#fff"></TextInput>
    <TextInput style={styles.inputBox} placeholder="Password" secureTextEntry={true} placeholderTextColor="#fff"></TextInput>
    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>{this.props.name}</Text></TouchableOpacity>
    
    </View>);
      }
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
    
    
});
