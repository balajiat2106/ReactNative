import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

import Logo from '../components/logo';

const login=()=>{
    return(
        <View>
        <Logo/>
        <Text style={styles.TxtHighlight}>Base App</Text>
        </View>
    );
};

const styles=StyleSheet.create({
TxtHighlight:{
    backgroundColor:'#fff123'
}
});

export default login;