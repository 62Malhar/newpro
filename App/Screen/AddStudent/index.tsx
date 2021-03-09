import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import { useNavigation, useRoute } from '@react-navigation/native';
import withObservables from '@nozbe/with-observables';

const AddStudent = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState('');
    const [tag, setTag] = useState(null);
    const database = useDatabase();
    let navigation = useNavigation();
    let route = useRoute();
    let user = route.params.user;//beacuse user has action addStudent

    React.useEffect(() => {
        let student = route.params.student;
        if (student) {
            setId(student._raw.id);
            setName(student._raw.name);
            setTag(student._raw.tag)
        }
    }, [])
    const onSubmit = async () => {
       let data={
           id,name,tag
       }
       if(id!==''){
        let student = route.params.student;
        await database.action(async () => {
        student.updateStudent(data, user);
        });
        navigation.navigate("StudentList");

       }else{
        await database.action(async () => {
            user.addStudent({name,tag})
        })
        navigation.navigate("BranchList");
    }
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

export default AddStudent;