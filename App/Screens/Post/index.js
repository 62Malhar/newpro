import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet,TextInput,Button } from 'react-native'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getData, fetchPostAction } from '../../Redux/Actions';
import PostItem from './PostItem';
import {change} from '../../Redux/Actions';
function Post(props) {
    const { posts } = props;
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    console.log("post===", posts)
   
    useEffect(() => {
        fetchData()
    })

    const fetchData = () => {
        props.fetchPost();
    }
    const handleSubmit=()=>{
        props.change({
          first:title,
          second:body,
        });
        setTitle('');
        setBody('');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingVertical: 20 }}>
                <TextInput
                    placeholder='enter title'
                    value={title}
                    onChangeText={data => setTitle(data)}
                    style={{ borderWidth: 2 }}
                />
                <TextInput
                    placeholder='enter body'
                    value={body}
                    onChangeText={data => setBody(data)}
                    style={{ borderWidth: 2 }}
                />
                <Button title='SUBMIT' onPress={handleSubmit} />
            </View>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center'
    },
    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    }
})

const mapStateToProps = state => ({
    posts: state.posts, 
})

const mapDispatchToPros = (dispatch) => ({
    fetchPost: () => dispatch(fetchPostAction()),
    change:(obj)=>dispatch(change(obj))
})

export default connect(mapStateToProps, mapDispatchToPros)(Post)