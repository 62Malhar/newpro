import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,TextInput, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';


let items=[
  { label: 'male', value: 'male' },
  { label: 'female', value: 'female'},
  
];
const App=()=>{
  const[name,setName]=useState('');
  const[pass,setPass]=useState('');
  const[count,setCount]=useState(0);
  const[date,setDate]=useState('');
  const[pick,setPick]=useState('');
  const[list,setList]=useState(items);
  const[no,setNo]=useState('');
  const submit=()=>{
    if(name=='')
    {
      alert('Please Enter Valid Email');
    }
    else
    {
      if(pass=='')
      {
        alert('Please Enter Valid Password');
      }
      else{
        if(no!='male' &&  no!='female')
        {
          alert('Please Enter Valid gender');
        }
        else{
          if(date==''){
            alert('Please enter date');
          }else
            setCount(count+1);
      }
      }
  }
};
 
const click=()=>{
  alert('enter your mobile number')
};
  return(
      <SafeAreaView style={{flex:1,backgroundColor:'#a9cfcb',}}>
      <Text style={styles.top}>LOGIN </Text>
      <View style={styles.main}>
      <Text style={styles.txt}>Email</Text>
      <TextInput style={styles.input}
        placeholder={"Enter mail"}
        value={name}
        onChangeText={text => {
          setName(text);
        }}/></View>

        
        <View style={styles.main}><Text style={styles.txt}>Password</Text>
      <TextInput style={styles.input}
        placeholder={"Enter password"}
        value={pass}
        onChangeText={text => {
          setPass(text);
        }}/></View>
        


        <View style={styles.main}>
          <Text style={styles.txt}> Gender</Text>
          <RNPickerSelect 
    placeholder={{label:'select'}}
    items={items}
    value={pick}
    onValueChange={value=>setPick(value)}
    /></View>


<View>
  <Text style={styles.txt}>Date of birth</Text>
  <DatePicker style={styles.date}
          date={date}
          mode="date" 
          placeholder="select date"
          format="DD-MM-YYYY"
          onDateChange={(date) => {
            setDate(date);
          }}
        />
</View>        
       <View style={styles.button}><Button title='SIGN UP' onPress={submit}/></View>
       <TouchableOpacity onPress={click}><Text style={{fontSize:15,textDecorationLine: 'underline',textAlign:'center',paddingTop:10,}}>forgot password?</Text>
      </TouchableOpacity></SafeAreaView>

  );
};
const styles=StyleSheet.create({
  date:{
    width:370,
    marginHorizontal:10,
    marginRight:100,
    borderWidth:1,
  },
  pick:{
    borderBottomWidth:1,
  },
  top:{fontSize:30,textAlign:'center',paddingTop:3,fontFamily:'MetalMania-Regular',backgroundColor:'cyan'},
  txt:{
    paddingLeft:5,
    fontSize:30,
    paddingTop:10,
  },
  input:{
    marginHorizontal:10,
    borderWidth:2,
    
  },
    main:{
      paddingTop:15,
    },
    button:{
      paddingTop:20,
      marginHorizontal:70,
    },
});
export default App;