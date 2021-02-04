import React,{useState,useEffect} from 'react';
import {View,Text,Image,TextInput,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './s2/Splash';
import Login from './s2/Login';
import MyProfile from './s2/MyProfile';
const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();

export default function App(){
  return(
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SOCIAL NETWORK" component={MyProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}