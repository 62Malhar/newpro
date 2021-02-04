import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
let Int = [
  { name: 'Music' },
  { name: 'Food' },
  { name: 'Culture' },
  { name: 'Drinks' },
  { name: 'Sports' },
  { name: 'Books' },
  { name: 'Travel' },
  { name: 'Fun' },
  { name: 'Art' },
];

function M1({ navigation }) {

  const [count, setCount] = useState(0);
  return (
    <ScrollView style={Styles.main}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHS4YqFQ213jgyaYBsBY-rJYSus8M-XwxrNg&usqp=CAU',
          }}
          style={Styles.img1}
        />
        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
          <Text style={Styles.txt1}>Tony Fox</Text>
          <TouchableOpacity onPress={() => setCount(1)}>
            <Text style={Styles.txt}>View Profile</Text>
          </TouchableOpacity>
          <Text style={Styles.txt}>Ney York</Text>
          <Text style={Styles.txt}>Student</Text>
        </View>
      </View>
      <View
        style={Styles.main1}>
        <Text
          style={Styles.txt2}>
          My Interests
        </Text>
        <FlatList
          numColumns={3}
          data={Int}
          renderItem={({ item, index }) => (
            <View style={{}}>
              <Text
                style={Styles.txt3}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={Styles.main2}>
        <Button title="MORE" color="purple" onPress={() => navigation.navigate('Contact Form')} />
      </View>
    </ScrollView>
  );
}
function M2() {
  return (
    <View style={Styles.m2}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Contact Form</Text>
      <View style={Styles.m3}>
        <View style={Styles.m4}>
          <AntDesign name='mail' color='black' size={30} style={{paddingTop:5}} />
          <TextInput
            placeholder="Your Email"
            value={null}
          />
        </View>
        <View style={Styles.m5}>
          <AntDesign name='questioncircleo' color='black' size={30} style={{paddingTop:5}}/>
          <TextInput
            placeholder="Question"
            value={null}
          />
        </View>
        <View>
          <TextInput
            placeholder='Write your thoughts'
            value={null}
            style={{ height: 100 }}
          />
        </View>
      </View>
      <View
        style={Styles.main3}>
        <Button title="SEND" color="purple" />
      </View>
    </View>
  );
}
export default function Home() {
  return (
    <Stack.Navigator initialRoteName='My Profile'>
      <Stack.Screen name='My Profile' component={M1} />
      <Stack.Screen name='Contact Form' component={M2} />
    </Stack.Navigator>
  );
}
const Styles=StyleSheet.create({
main:{backgroundColor: 'white', marginTop: 15, marginLeft: 10},
img1:{
  width: 150,
  height: 150,
  borderWidth: 5,
  borderColor: '#f1f1f1',
  borderRadius: 75,
},
txt:{ fontSize: 20, marginLeft: 5 },
txt1:{ fontSize: 40, fontWeight: 'bold' },
main1:{
  flex: 1,
  backgroundColor: '#f1f1f1',
  justifyContent: 'center',
  borderWidth: 3,
  marginHorizontal: 10,
  marginTop: 30,
  borderColor: 'white',
  borderRadius: 20,
  height: 250,
  width: 350,
  justifyContent: 'center'
},
txt2:{
  textAlign: 'center',
  fontSize: 30,
  backgroundColor: 'yellow',
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  fontWeight: 'bold',
  width:344,
},
txt3:{
  marginHorizontal: 30,
  marginVertical: 20,
  fontWeight: 'bold',
  color: 'purple',
  fontSize: 15,
  borderWidth: 1,
  borderRadius: 7,
  height: 30,
  backgroundColor: 'white',
  fontSize: 20
},
main2:{
  marginTop: 13,
  marginLeft: 90,
  borderWidth: 1,
  height: 50,
  width: 200,
  borderColor: 'purple',
  backgroundColor: 'purple',
  alignItems: 'center',
  borderRadius: 100,
  justifyContent: 'center',
},
main3:{
  marginTop: 13,
  marginHorizontal: 59,
  borderWidth: 1,
  height: 50,
  width: 200,
  borderColor: 'purple',
  backgroundColor: 'purple',
  alignItems: 'center',
  borderRadius: 100,
  justifyContent: 'center',
},
m2:{  alignItems: 'center', marginTop: 30, backgroundColor: 'white' },
m3:{ borderWidth: 4, width: 350,height:350, borderRadius: 10, borderColor: '#f1f1f1', backgroundColor: '#cbd6d6', borderLeftColor: 'yellow' },
m4:{ flexDirection: 'row', borderBottomWidth: 1, marginHorizontal: 7 },
m5:{ flexDirection: 'row', borderBottomWidth: 1, marginHorizontal: 7 },

});