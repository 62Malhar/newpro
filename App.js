import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homie from './src/screens/Homie';
import Auth from './src/screens/Auth';
import Splash from './src/screens/Splash';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Login() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Auth' component={Auth}/>
    </Stack.Navigator>
  );
}
function Home() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Homie' component={Homie}/>
    </Stack.Navigator>
  );
}


export default App;
