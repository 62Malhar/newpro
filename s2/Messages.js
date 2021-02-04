import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
let king=[];
let Msg = [
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXwTb5z0NlcwU8kaSIeV1DOmZtPgadUZiBA&usqp=CAU',
    name: 'James',
    txt: '3 days ago',
    time: '3pm',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaIBGjQXotQNadmFrvhZK60-VSBHwAIcdCQ&usqp=CAU',
    name: 'Steve',
    txt: '5 days ago',
    time: '4pm',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO06pOmBndDO0isERXC_9xx43Y3YB7rDDnBg&usqp=CAU',
    name: 'Bob',
    txt: '4 days ago',
    time: '5pm',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgnA7-hYNCoWrwQ06oJNZIeu42d-hndUqMg&usqp=CAU',
    name: 'Ricky',
    txt: '2 days ago',
    time: '6pm',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKqGgDU7ueNdtCwqFcr4DgsNkfnKBHt-4-g&usqp=CAU',
    name: 'Carter',
    txt: '7 days ago',
    time: '7pm',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle7CIpf_CtDpxbNkuKQHIJxRuXWlNMTv1lw&usqp=CAU',
    name: 'Shane',
    txt: '6 days ago',
    time: '8pm',
  },
];
function Main({ navigation }) {
  const [index, setIndex] = useState(0);
  return (
    <View>
      <FlatList
        data={Msg}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingTop: 10,
            }}>
            <Image
              source={{ uri: item.img1 }}
              style={{
                width: 60,
                height: 60,
                borderWidth: 1,
                borderRadius: 30,
                paddingBottom: 20,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                paddingTop: 10,
                paddingLeft: 10,
              }}>
              <TouchableOpacity
                onPress={
                  (() => setIndex(index),
                  navigation.navigate('Next', { user: index }))
                }>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 15 }}>{item.txt}</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 15, paddingTop: 20, paddingLeft: 150 }}>
              {item.time}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
function Next({ route }) {
const[list,setList]=useState(king);
const[value,setValue]=useState('');
const[text,setText]=useState('');
  return (
    <View>
      <Text style={{backgroundColor:'cyan',alignSelf:'n'}}>{Msg[route.params.user].txt}</Text>
      <FlatList
      data={list}
      renderItem={({item})=>(
        <View>
        <Text>{item.txt}</Text>
        </View>
      )}
      />
      <View style={{flexDirection:'row'}}>
      <TextInput
      placeholder='type here'
      value={null}
      onChangeText={(data)=>setText(data)}
      style={{borderWidth:1,marginTop:250,position:'absolute'}}
      />
       <Button
        title={"Submit"}
        onPress={() => {
          setValue("");
          let item = { txt: text };
          let arrayList = [...list];
           arrayList.push(item);
          setList(arrayList);
        }}
      />
      </View>
    </View>
  );
}
const Stack = createStackNavigator();
export default function Messages() {
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Next" component={Next} />
    </Stack.Navigator>
  );
}
