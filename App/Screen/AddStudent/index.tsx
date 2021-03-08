import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { observer } from "mobx-react";
import { useDatabase } from '@nozbe/watermelondb/hooks';
import styles from './styles';
import { UserList } from '../UserList';
import { store } from '../../MST/Store';
import { useNavigation, useRoute } from '@react-navigation/native';
import withObservables from '@nozbe/with-observables';

const AddContactInfo = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState('');
    const [tag, setTag] = useState(null);
    const database = useDatabase();
    let navigation = useNavigation();
    let route = useRoute();
    let user = route.params.user;//beacuse user has action addStudent


    const onSubmit = async () => {
       
        await database.action(async () => {
            user.addStudent({name,tag})
        })
        navigation.navigate("BranchList");
    }
    return (
        <View>
            <View >
                <TextInput
                    style={{borderWidth:2,marginHorizontal:20}}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="student name"
                    placeholderTextColor="gray"
                />
            </View>
            <View >
                <TextInput
                    style={{borderWidth:2,marginVertical:20,marginHorizontal:20}}
                    value={tag}
                    onChangeText={(text) => setTag(text)}
                    placeholder="student Id"
                    placeholderTextColor="gray"
                    keyboardType='number-pad'
                />
            </View>
            <View >
                <TouchableOpacity  onPress={onSubmit}>
                    <Text style={{textAlign:'center'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddContactInfo;