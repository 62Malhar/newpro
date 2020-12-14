import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Homie({navigation}) {
    return(
        <View>
            <Text>Home screen</Text>
            <Button title='Login' onPress={()=>navigation.navigate('Login')}/>
        </View>
    );
    
}
export default Homie;