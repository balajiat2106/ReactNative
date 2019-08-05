import React from 'react';
import {Image,Text,View,StyleSheet} from 'react-native';

const logo=()=>{
    return(
        <View>
            <Image style={{width:40,height:70}} 
            source={require('../images/MyLogo.png')}/>
            <Text style={styles.TxtHighlight}>Base App</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    
    TxtHighlight:{
        color:'#fff',
        fontSize:25
    }
});

export default logo;