import React, { useState } from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
function Auth({route,navigation}) {

async function  callApiLogin() {
    await AsyncStorage.setItem('@isUserLogin','1');
    navigation.reset({
        index:0,
        routes:[{name:'Splash'}],
    });
}

    return(
        <View>
            <Text>Login screen</Text>
            <Text>enter your details</Text>        
            <Button title='home' onPress={()=>callApiLogin()}/>
            <Text style={{fontFamily:'MetalMania-Regular',fontSize:70}}>HEllO THERE!</Text>
        </View>
    );
}
export default Auth;