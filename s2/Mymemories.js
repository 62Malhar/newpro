import { StackActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import { createStackNavigator } from '@react-navigation/stack';

let Memo = [
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDEElfXr-huCic72Db0beO7owu9HBeIF5yA&usqp=CAU',
    txt1: 'Lorem Ipsum Dorol',
    txt2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXY5O2YpqZV5EgQnuqbJ-pdCZlZxhzlHaSwA&usqp=CAU',
    txt1: 'Lorem Ipsum Dorol',
    txt2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSODeFV-mS4nGC6IkNPofeT-W89bEKXSG-A&usqp=CAU',
    txt1: 'Lorem Ipsum Dorol',
    txt2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3toWW0_3Q6yXkaja2yuPA_1CUPUFr3gsvA&usqp=CAU',
    txt1: 'Lorem Ipsum Dorol',
    txt2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDEElfXr-huCic72Db0beO7owu9HBeIF5yA&usqp=CAU',
    txt1: 'Lorem Ipsum Dorol',
    txt2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];

function Mymemories1({ navigation }) {
  const [count, setCount] = useState(0);
  return (
    <ScrollView style={{}}>
      <FlatList
        data={Memo}
        renderItem={({ item }) => (
          <View>
            <View style={{ backgroundColor:'#a6e3c1',flexDirection: 'row', marginTop: 20,marginRight:5, marginLeft: 5, borderBottomWidth: 3,borderBottomColor:'#79b5c7' }}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 120, height: 120,marginTop:8,borderRadius:10,borderWidth:1,borderColor:'black' }}
              />
              <View style={{ flexDirection: 'column',marginLeft:10 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{item.txt1}</Text>
                <Text numberOfLines={5} ellipsizeMode='tail' style={{ marginRight: 80,fontSize:15 }}>{item.txt2}</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <TouchableHighlight onPress={() => setCount(count + 1)}>
                    <AntDesign name='hearto' color='black' size={20} /></TouchableHighlight><Text style={{marginLeft:10}}>{count}</Text>
                  <Foundation name='comment' color='blue' size={25} style={{ marginLeft: 80 }} /><Text style={{marginLeft:10}}>{count}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}
const Stack = createStackNavigator();
export default function Mymemories() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='My Memories' component={Mymemories1} />
    </Stack.Navigator>
  );
}