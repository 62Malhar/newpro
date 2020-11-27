import React from 'react';
import {View,Text,Image,StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Final from './components/Final';
const App=()=>{
  return(
    <ScrollView>
    <SafeAreaView> 

     <Header/>
    <Image style={Styles.img} source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg '}}/>
    <Footer/>
    <Final/>
    <Header/>
    <Image style={Styles.img} source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg '}}/>
    <Footer/>
    <Final/>
    
    </SafeAreaView>
    </ScrollView>
  
    
  );
};
const Styles=StyleSheet.create({
  
    img:{
      marginTop:0,
      width:420,
      height:400,
    
    },
});

export default App;