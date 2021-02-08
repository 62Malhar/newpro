import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
let king = [];
let Msg = [
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXwTb5z0NlcwU8kaSIeV1DOmZtPgadUZiBA&usqp=CAU',
    name: 'James',
    txt: 'How are you?',
    time: '3pm',
    key: '1'
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaIBGjQXotQNadmFrvhZK60-VSBHwAIcdCQ&usqp=CAU',
    name: 'Steve',
    txt: 'Lets go to play',
    time: '4pm',
    key: '2'
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO06pOmBndDO0isERXC_9xx43Y3YB7rDDnBg&usqp=CAU',
    name: 'Bob',
    txt: 'When Will you come back?',
    time: '5pm',
    key: '3'
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgnA7-hYNCoWrwQ06oJNZIeu42d-hndUqMg&usqp=CAU',
    name: 'Ricky',
    txt: 'Happy Birthday dear',
    time: '6pm',
    key: '4'
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKqGgDU7ueNdtCwqFcr4DgsNkfnKBHt-4-g&usqp=CAU',
    name: 'Carter',
    txt: 'Happy new year',
    time: '7pm',
    key: '5'
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle7CIpf_CtDpxbNkuKQHIJxRuXWlNMTv1lw&usqp=CAU',
    name: 'Shane',
    txt: 'Hello there',
    time: '8pm',
    key: '6'
  },
];
function Main({ navigation }) {
  const [index, setIndex] = useState(0);
  return (
    <ScrollView>
      <FlatList
        data={Msg}
        renderItem={({ item, index }) => (
          <View style={{flexDirection:'row',borderBottomWidth:1}}>
          <View
            style={Styles.main2}>
            <Image
              source={{ uri: item.img1 }}
              style={Styles.imgin}
            />
            <View
              style={Styles.img2}>
              <TouchableOpacity
                onPress={
                  (() =>
                    navigation.navigate('Next', { user: index }))
                }>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 20 }}>{item.txt}</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View>
            <Text style={{ fontSize: 20, paddingTop: 20, paddingLeft: 150 }}>
              {item.time}
            </Text>
          </View>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </ScrollView>
  );
}
function Next({ route }) {
  const [list, setList] = useState(king);
  const [value, setValue] = useState('');
  const [text, setText] = useState('');
  return (
    <View>
      <View style={Styles.main3}>
        <Image source={{ uri: Msg[route.params.user].img1 }} style={{ width: 60, height: 60, borderColor: 'black', borderWidth: 2, borderRadius: 30, marginTop: 5, marginLeft: 10 }} />
        <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 30 }}>{Msg[route.params.user].name}</Text>

      </View>
      <ScrollView style={{ height: 440, marginTop: 70 }}>
        <Text style={Styles.txt1}>{Msg[route.params.user].txt}</Text>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View style={Styles.main}>
              <Text style={{ fontSize: 30, marginLeft: 7 }}>{item.txt}</Text>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </ScrollView>
      <View style={Styles.main1}>
        <TextInput
          placeholder='type here'
          value={text}
          onChangeText={(data) => setText(data)}
          style={{ borderWidth: 2, width: 330 }}
        />
        <Ionicons
          name='send'
          color='blue'
          style={{ marginLeft: 5, height: 50 }}
          size={40}
          onPress={() => {
            if (text != '') {

              setValue("");
              let item = { txt: text };
              let arrayList = [...list];
              arrayList.push(item);
              setText('');
              setList(arrayList);
            }
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
const Styles = StyleSheet.create({
  main: { borderBottomRightRadius:30,borderWidth: 2, marginTop: 10, backgroundColor: '#adc5c7', marginLeft: 70, marginRight: 10, borderRadius: 10 },
  main1: { flexDirection: 'row', marginTop: 520, marginHorizontal: 10, position: 'absolute' },
  imgin: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 40,
  },
  main2: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    width:200
  },
  img2:{
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
  },
  txt1: { borderWidth: 2, marginTop: 10, backgroundColor: '#adc5c7', marginRight: 70, marginLeft:5,borderRadius: 10,borderBottomLeftRadius:30, fontSize: 30 },
  main3: { flexDirection: 'row', backgroundColor: '#6dd689', position: 'absolute', borderTopWidth: 1, borderBottomWidth: 1, width: 390 },

})