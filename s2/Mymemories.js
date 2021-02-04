import { StackActions } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text, Button, Image, ScrollView, FlatList,TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';

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
];

function Mymemories1() {
  const[count,setCount]=useState(0);
  return (
    <ScrollView>
      <FlatList
        data={Memo}
        renderItem={({ item }) => (
          <View>
            <View style={{ flexDirection: 'row' ,marginTop:20,marginLeft:5,borderBottomWidth:3}}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 120, height: 120 }}
              />
              <View style={{flexDirection:'column'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>{item.txt1}</Text>
 <Text numberOfLines={4}>{item.txt2}</Text>
 <View style={{flexDirection:'row',marginTop:40}}> 
 <TouchableHighlight onPress={()=>setCount(count+1)}>
<AntDesign name='hearto' color='black' size={17} /></TouchableHighlight><Text>{count}</Text>
<Foundation name='comment' color='blue' size={18} style={{marginLeft:80}}/><Text>{count}</Text>
  </View>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}
const Stack=createStackNavigator();
export default function Mymemories(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='My Memories' component={Mymemories1}/>
    </Stack.Navigator>
  );
}