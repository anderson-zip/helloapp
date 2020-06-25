import React from 'react';
import {View, Image} from 'react-native';
import Logo from '../assets/logo.png';

export default function Home(){
    return(
        <View>
            <Image source={Logo}></Image>
        </View>
    );
}