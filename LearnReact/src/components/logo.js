import React from 'react';
import {Image,View} from 'react-native';

const logo=()=>{
    return(
            <Image style={{width:40,height:70}} 
            source={require('../images/MyLogo.png')}/>
    );
}

export default logo;