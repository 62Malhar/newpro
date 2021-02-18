import React,{useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet,TextInput,Button } from 'react-native'
import { connect } from 'react-redux';
import { getData, fetchPostAction, addTitle } from '../../Redux/Actions';
import PostItem from './PostItem';
import {change} from '../../Redux/Actions';

function Form({props}){
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const handleSubmit=()=>{
        props.change({
          first:title,
          second:body,
        });
    }
return(
<View style={{paddingVertical:20}}>
<TextInput
placeholder='enter title'
value={title}
onChangeText={data=>setTitle(data)}
style={{borderWidth:2}}
/>
<TextInput
placeholder='enter body'
value={body}
onChangeText={data=>setBody(data)}
style={{borderWidth:2}}
/>
<Button title='SUBMIT' onPress={handleSubmit} />
</View>
);
}
const mapStateToProps=(state)=>({
 
})
const mapDispatchToPros = (dispatch) => ({
  change: (obj) => dispatch(change(obj))

})

export default connect(mapStateToProps,mapDispatchToPros)(Form)