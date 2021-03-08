import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import { useNavigation, useRoute } from '@react-navigation/native';
import withObservables from '@nozbe/with-observables';

const AddBranch = ({branch}) => {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const database = useDatabase();
    let navigation = useNavigation();
    let route = useRoute();

    const onSubmit = async () => {
       
        const userCollection = await database.collections.get('users');
        
        await database.action(async () => {
            const newBranch = await userCollection.create(branch => {

                branch.note = firstName
                branch.weight = lastName
            })
        })
            navigation.navigate("BranchList");
    }
    return (
        <View>
            {/* <View style={styles.textInputView}>
                <TextInput
                    style={styles.textInputStyles}
                    value={userId}
                    onChangeText={(text) => setUserId(text)}
                    placeholder="Id"
                    placeholderTextColor="gray"
                // keyboardType='number-pad'
                />
            </View> */}
            <View>
                <TextInput
                    style={{borderWidth:2,marginHorizontal:20}}
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                    placeholder="branch Name"
                    placeholderTextColor="gray"
                />
            </View>
            <View>
                <TextInput
                    style={{borderWidth:2,marginVertical:20,marginHorizontal:20}}
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                    placeholder="branch code"
                    placeholderTextColor="gray"
                />
            </View>
           
            <View>
                <TouchableOpacity  onPress={onSubmit}>
                    <Text style={{fontSize:20,textAlign:'center'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddBranch;