import React, { useState,useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
function  Splash({navigation}) {
useEffect(()=>{
    setTimeout(() => {
        checklog();
    }, 5000);
},)
 async function checklog() {
     const value=await AsyncStorage.getItem('@isUserLogin');
     if(value && Number(value) == 1){
         navigation.reset({
             index:0,
             routes:[{name:'Home'}],
         });
     }else{
         navigation.reset({
             index:0,
             routes:[{name:'Login'}],
         });
     }
}
 return(
    <View><Text>Splashscreeen</Text><Text>Hello and Welcome!</Text>
    <Text style={{fontSize:30}}>React Native</Text>
    <Button title='goto log' onPress={()=>navigation.navigate('Login')}/></View>
 );
}
export default Splash;