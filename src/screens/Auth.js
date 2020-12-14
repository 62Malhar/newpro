import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
function Auth({navigation}) {

async function  callApiLogin() {
    await AsyncStorage.setItem('@isUserLogin','1');
    navigation.reset({
        index:0,
        routes:[{name:'Home'}],
    });
}

    return(
        <View>
            <Text>Home screen</Text>
            <Button title='home' onPress={()=>callApiLogin()}/>
        </View>
    );
}
export default Auth;