import React from 'react';
import{View,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';

const App=()=>{

  return(
    <View style={{flex:1,backgroundColor:'#d834eb'}}>
     <Text style={styles.txt}>FOOBAR</Text>
     <Text style={{fontSize:25,color:'white',marginTop:150,paddingLeft:20}}>Email</Text>
     <Text style={{borderBottomWidth:2,borderColor:'white',marginLeft:20,marginRight:20}}></Text>
     <Text style={{fontSize:25,color:'white',marginTop:10,paddingLeft:20}}>Password</Text>
     <Text style={{borderBottomWidth:2,borderColor:'white',marginLeft:20,marginRight:20}}></Text>
      <TouchableOpacity style={styles.button}><Text style={{fontSize:35,color:'white',textAlign:'center',justifyContent:'center'}}>LOGIN</Text></TouchableOpacity>
       
       <Text style={{fontSize:20,textDecorationLine:'underline',color:'white',textAlign:'center'}}>Sign up</Text>
       </View>
  );
  };

  const styles=StyleSheet.create({
    txt:{
      fontSize:40,
      color:'white',
      textAlign:'center',
      paddingTop:130,
    },
    button:{
      backgroundColor:'purple',
      height:50,
      width:350,
      paddingBottom:20,
      marginLeft:20,
      marginTop:20,
    },
    
       
  });
export default App;