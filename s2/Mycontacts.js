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
  TouchableHighlight,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

let List = [
  {
    name: 'james',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
  },
  {
    name: 'chris',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77x__4K9wHH5FPiw40aIMW-BIHMPFSe_fnA&usqp=CAU',
  },
  {
    name: 'edward',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
  },
  {
    name: 'king',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77x__4K9wHH5FPiw40aIMW-BIHMPFSe_fnA&usqp=CAU',
  },
  {
    name: 'paul',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
  },
];
let A = [
  {
    name: 'Aman',
    num: 'New York',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77x__4K9wHH5FPiw40aIMW-BIHMPFSe_fnA&usqp=CAU',
    game: 'football',
    place: 'Spain',
    food: 'Pizza',
    car: 'BMW',
    music: 'Hip Hop',
    movie: 'KGF',
  },
  {
    name: 'Akhil',
    num: 'London',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
    game: 'Cricket',
    place: 'Europe',
    food: 'Pizza',
    car: 'Suzuki',
    music: 'Jazz',
    movie: 'KGF2',
  },
  {
    name: 'Akshay',
    num: 'London',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
    game: 'Cricket',
    place: 'Europe',
    food: 'Pizza',
    car: 'Suzuki',
    music: 'Jazz',
    movie: 'KGF2',
  },
  {
    name: 'Anil',
    num: 'London',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
    game: 'Cricket',
    place: 'Europe',
    food: 'Pizza',
    car: 'Suzuki',
    music: 'Jazz',
    movie: 'KGF2',
  },
  {
    name: 'Ajay',
    num: 'London',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
    game: 'Cricket',
    place: 'Europe',
    food: 'Pizza',
    car: 'Suzuki',
    music: 'Jazz',
    movie: 'KGF2',
  },
];
let B = [
  {
    name: 'Baman',
    num: 'Japan',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77x__4K9wHH5FPiw40aIMW-BIHMPFSe_fnA&usqp=CAU',
      game: 'Cricket',
      place: 'Europe',
      food: 'Pizza',
      car: 'Suzuki',
      music: 'Jazz',
      movie: 'KGF2',},
  {
    name: 'bob',
    num: 'Africa',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
      game: 'football',
      place: 'Spain',
      food: 'Pizza',
      car: 'BMW',
      music: 'Hip Hop',
      movie: 'KGF',},
];
let C = [
  {
    name: 'chris',
    num: 'USA',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77x__4K9wHH5FPiw40aIMW-BIHMPFSe_fnA&usqp=CAU',
      game: 'Cricket',
      place: 'Europe',
      food: 'Pizza',
      car: 'Suzuki',
      music: 'Jazz',
      movie: 'KGF2',},
  {
    name: 'carry',
    num: 'India',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScj1w0UCdIr4kUblujW7B7IdaZoRmdHyZP5A&usqp=CAU',
      game: 'football',
      place: 'Spain',
      food: 'Pizza',
      car: 'BMW',
      music: 'Hip Hop',
      movie: 'KGF',},
];
const Stack = createStackNavigator();
function S1({ navigation }) {
  const [index, setIndex] = useState(0);
  return (
    <ScrollView style={{ backgroundColor: '#f1f1f1' }}>
      <View
        style={Styles.main}>
        <AntDesign
          name="search1"
          color="black"
          size={25}
          style={{ marginLeft: 7,marginTop:10 }}
        />
        <TextInput placeholder="Search Contact..." value={null} />
      </View>
      <View style={Styles.main1}>
        <View style={{ borderBottomWidth: 2, marginHorizontal: 10, borderBottomColor: '#d3dedd' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', paddingTop: 7, paddingleft: 10, textAlign: 'center' }}>
            Top Contacts
      </Text>
          <View>
            <FlatList
              horizontal={true}
              data={List}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginLeft: 20,
                    paddingTop: 5,
                  }}>
                  <Image
                    source={{ uri: item.img }}
                    style={Styles.img1}
                  />
                  <Text>{item.name}</Text>
                </View>
              )}
            />
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', paddingLeft: 20 }}>
            A
        </Text>
          <FlatList
            data={A}
            renderItem={({ item, index }) => (
              <View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                  <TouchableHighlight
                    onPress={
                      (() =>
                        navigation.navigate('About Contact', { user: A[index] }))
                    }>
                    <Image
                      style={Styles.img}
                      source={{ uri: item.img }}
                    />
                  </TouchableHighlight>
                  <View style={{ flexDirection: 'column',marginTop:5 }}>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>
                      {item.name}
                    </Text>

                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>
                      {item.num}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
          <Text style={{ fontSize: 40, fontWeight: 'bold', paddingLeft: 20 }}>
            B
        </Text>
          <FlatList
            data={B}
            renderItem={({ item, index }) => (
              <View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                <TouchableHighlight
                    onPress={
                      (() =>
                        navigation.navigate('About Contact', { user: B[index] }))
                    }>
                  <Image
                    style={Styles.img}
                    source={{ uri: item.img }}
                  /></TouchableHighlight>
                  <View style={{ flexDirection: 'column',marginTop:5 }}>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>
                      {item.name}
                    </Text>

                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>
                      {item.num}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
          <Text style={{ fontSize: 40, fontWeight: 'bold', paddingLeft: 20 }}>
            C
        </Text>
          <FlatList
            data={C}
            renderItem={({ item, index }) => (
              <View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                <TouchableHighlight
                    onPress={
                      (() =>
                        navigation.navigate('About Contact', { user: C[index] }))
                    }>
                  <Image
                    style={Styles.img}
                    source={{ uri: item.img }}
                  /></TouchableHighlight>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 20, paddingLeft: 10 }}>
                      {item.name}
                    </Text>

                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>
                      {item.num}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
function Second({ route }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Image
          source={{ uri: route.params.user.img }}
          style={Styles.igl}
        />
        <View style={{ flexDirection: 'column', marginLeft: 10 ,marginTop:20}}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            {route.params.user.name}
          </Text>
          <Text style={{ fontSize: 30 }}>{route.params.user.num}</Text>
        </View>
      </View>
      <View style={Styles.main2}>
        <Text style={Styles.txt1}>INTERESTS</Text>
     
            <View style={{flexDirection:'row'}}>
              <Text style={Styles.txt}>{route.params.user.game}</Text>
              <Text style={Styles.txt}>{route.params.user.place}</Text>
              <Text style={Styles.txt}>{route.params.user.car}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={Styles.txt}>{route.params.user.food}</Text>
              <Text style={Styles.txt}>{route.params.user.music}</Text>
              <Text style={Styles.txt}>{route.params.user.movie}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={Styles.txt}>{route.params.user.game}</Text>
              <Text style={Styles.txt}>{route.params.user.place}</Text>
              <Text style={Styles.txt}>{route.params.user.car}</Text>
              </View>
              <View style={Styles.button}>
        <Button
          title="MORE"
          color="purple"
        />
      </View>
        
      </View>
    </View>
  );
}
export default function Mycontacts() {
  return (
    <Stack.Navigator initialRouteName="S1">
      <Stack.Screen name="Top Contacts" component={S1} />
      <Stack.Screen name="About Contact" component={Second} />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 30,
  },
  img1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    width: 370,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 10,
    alignContent: 'center',
    marginLeft: 15,
  },
  main1: { marginHorizontal: 10, borderWidth: 3, borderRadius: 10, marginTop: 20, backgroundColor: 'white', borderColor: '#d3dedd' },
ig:{
  width: 100,
  height: 100,
  borderWidth: 4,
  borderRadius: 50,
  borderColor: 'white',
},
button: {
  marginTop: 30,
  borderColor: 'purple',
  borderWidth: 1,
  height: 50,
  width: 200,
  backgroundColor: 'purple',
  alignItems: 'center',
  borderRadius: 100,
  justifyContent: 'center',
},
igl:{
  width: 150,
  height: 150,
  borderWidth: 4,
  borderRadius: 75,
  borderColor: 'white',
},
main2:{ borderColor:'#e9f0ef',borderWidth: 4, alignItems: 'center',width:300,height:300,marginTop:20,borderRadius:30,backgroundColor:'white'},
txt:{marginHorizontal:20,borderRadius:10,marginVertical:25,backgroundColor:'#95bdbb',height:30,fontSize:20,color:'black'},
txt1:{ backgroundColor: 'yellow',color:'black',fontSize:30,fontWeight:'bold',width:290,height:50,marginHorizontal:5,textAlign:'center',borderTopRightRadius:20,borderTopLeftRadius:20 },
});