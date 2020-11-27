import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const Final=()=>{
    return (
        <View>
            <Text style={styles.final}>60 Likes</Text>
            <Text style={styles.final}>6 minutes ago</Text>
        </View>
    );
};

const styles=StyleSheet.create({
   final:{
     fontSize:20,
     paddingLeft:3,
   },
});
export default Final;