import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';



export default function Login({ navigation }) {
  const [name, setName] = useState('');
  const [pswd, setPswd] = useState('');
  const [mail, setMail] = useState('');
  const [dob, setDob] = useState('');

   async function check(){
    if(name==''){
      alert('enter valid name!');
    }else{
      if(mail==''){
        alert('enter valid mail!');
      }else{
        if(dob==''){
          alert('enter valid date!');
        }else{
          if(pswd==''){
            alert('enter valid password!');
          }else{
            await AsyncStorage.setItem('@isLogin','1');
            navigation.reset({
              index:0,
              routes:[{name:'SOCIAL NETWORK'}],
            });
          }
        }
      }
    }
  }
  return (
    <View style={Styles.main}>
      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={(data) => setName(data)}
        style={Styles.txtinp}
      />
      <TextInput
        placeholder="E-mail"
        value={mail}
        onChangeText={(data) => setMail(data)}
        style={Styles.txtinp}
      />
      <TextInput
        placeholder="Date of Birth"
        value={dob}
        onChangeText={(data) => setDob(data)}
        style={Styles.txtinp}
      />
      <TextInput
        placeholder="Password"
        value={pswd}
        onChangeText={(data) => setPswd(data)}
        style={Styles.txtinp}
      />
      <View style={Styles.view}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9VF6_E6SnEd2_cajn-zNVVFG_odBVBrjfg&usqp=CAU',
          }}
          style={{ width: 50, height: 40, marginTop: 20 }}
        />
        <Text style={Styles.phtxt}>Upload your photo</Text>
      </View>
      <View style={Styles.button}>
        <Button
          title="NEXT"
          color="purple"
          onPress={()=>check()}
        />
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  view: { flexDirection: 'row', justifyContent: 'center' },
  txtinp: {
    borderWidth: 1,
    marginTop: 20,
    fontSize: 20,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#f1f1f1',
  },
  phtxt: {
    fontSize: 20,
    marginTop: 25,
  },
  main: { justifyContent: 'center', flex: 1, backgroundColor: 'white' },

  button: {
    marginTop: 30,
    marginLeft: 100,
    borderColor: 'purple',
    borderWidth: 1,
    height: 50,
    width: 200,
    backgroundColor: 'purple',
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },
});
