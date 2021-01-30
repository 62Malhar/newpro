import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import {
    NavigationContainer,
    useFocusEffect,
  } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  let king={name:'mvp',tag:'123',id:'3'};

function Homie({navigation}) {
    React.useEffect(
        () => navigation.addListener('focus', () => alert('Screen was focused')),
        []
      );
        
    return(
        <View>
            <Text>Home screen</Text>
            <Text>WELCOME !</Text>
            <Button title='Login' onPress={()=>{navigation.navigate('Login')}}/>
            <AntDesign name='windows' size={50}/>
        </View>
    );
    
}
export default Homie;