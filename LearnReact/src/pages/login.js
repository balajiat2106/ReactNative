import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

const login=()=>{
    return(
        <View>
            <Text style={loginStyle.innertext}>Login</Text>
        </View>
    );
};

const loginStyle=StyleSheet.create({
    
    innertext:{
        fontSize:30
        
    }
});

export default login;