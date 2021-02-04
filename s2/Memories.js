import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

let Ev1 = [
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXY5O2YpqZV5EgQnuqbJ-pdCZlZxhzlHaSwA&usqp=CAU',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88LAxmbOWk73dZw7QHWFNaakdSWGLiAdfBA&usqp=CAU',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3toWW0_3Q6yXkaja2yuPA_1CUPUFr3gsvA&usqp=CAU',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDEElfXr-huCic72Db0beO7owu9HBeIF5yA&usqp=CAU',
  },
];
let Ev3 = [
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXY5O2YpqZV5EgQnuqbJ-pdCZlZxhzlHaSwA&usqp=CAU',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88LAxmbOWk73dZw7QHWFNaakdSWGLiAdfBA&usqp=CAU',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3toWW0_3Q6yXkaja2yuPA_1CUPUFr3gsvA&usqp=CAU',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDEElfXr-huCic72Db0beO7owu9HBeIF5yA&usqp=CAU',
  },
];
let Ev2 = [
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDEElfXr-huCic72Db0beO7owu9HBeIF5yA&usqp=CAU',
  },

  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3toWW0_3Q6yXkaja2yuPA_1CUPUFr3gsvA&usqp=CAU',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88LAxmbOWk73dZw7QHWFNaakdSWGLiAdfBA&usqp=CAU',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXY5O2YpqZV5EgQnuqbJ-pdCZlZxhzlHaSwA&usqp=CAU',
  },
];

function Memories1({ navigation }) {

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View
        style={Styles.main}>
        <AntDesign
          name="search1"
          color="black"
          size={30}
          style={{ marginLeft: 7, marginTop: 9 }}
        />
        <TextInput placeholder="Search..." value={null} />
      </View>
      <View style={Styles.main1}>
        <Text style={Styles.txt}>
          Event 1 January 2019
        </Text>
        <FlatList
          horizontal={true}
          data={Ev1}
          renderItem={({ item, index }) => (
            <View>
              <Image
                source={{ uri: item.img }}
                style={Styles.img}
              />
            </View>
          )}
        />
      </View>
      <View style={Styles.main1}>
        <Text style={Styles.txt}>
          Event 2 February 2019
        </Text>
        <FlatList
          horizontal={true}
          data={Ev2}
          renderItem={({ item, index }) => (
            <View>
              <Image
                source={{ uri: item.img }}
                style={Styles.img}

              />
            </View>
          )}
        />
      </View>
      <View style={Styles.main1}>
        <Text style={Styles.txt}>
          Event 3 March 2019
        </Text>
        <FlatList
          horizontal={true}
          data={Ev3}
          renderItem={({ item, index }) => (
            <View>
              <Image
                source={{ uri: item.img }}
                style={Styles.img}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
const Stack=createStackNavigator();
export default function Memories(){
  return(
    <Stack.Navigator>
<Stack.Screen name='Experience Memories' component={Memories1}/>
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    width: 370,
    borderRadius: 25,
    marginTop: 10,
    alignContent: 'center',
    marginLeft: 15,
    backgroundColor: '#f1f1f1'
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 5,
    marginTop: 7,
    marginHorizontal: 15,
  },
main1:{ marginTop: 20, backgroundColor: '#f1f1f1', marginHorizontal: 5 },
txt:{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' },
})