import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Splash({ navigation }) {
  return (
    <View style={Styles.back}>
      <Text style={{ textAlign: 'center', fontSize: 30 }}>SOCIAL NETWORK</Text>
      <View style={Styles.button}>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={Styles.txt}>GET STARTED</Text>
      </TouchableOpacity>
       
      </View>
      <Image
        style={Styles.img}
        source={{
          uri:
            'https://previews.123rf.com/images/irwanjos/irwanjos1506/irwanjos150600118/41721992-cute-cartoon-boy-and-girl.jpg',
        }}
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  img: { width: '100%', height: 400, marginTop: 80 },
  back: { backgroundColor: 'white',flex:1,justifyContent:'center' },
button: {
    marginTop: 30,
    marginLeft: 70,
    borderWidth: 1,
    height: 50,
    width: 250,
    borderColor: 'purple',
    backgroundColor: 'purple',
    alignItems: 'center',
    borderRadius: 100,
  },
  txt:{borderWidth:1,borderColor:'purple',backgroundColor:'purple',color:'white',fontSize:20,marginTop:9}
});
