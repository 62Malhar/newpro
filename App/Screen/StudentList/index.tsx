import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import { useNavigation, useRoute } from '@react-navigation/native';
import withObservables from '@nozbe/with-observables';
import StudentListItem from './StudentListItem';
import { Q } from '@nozbe/watermelondb';

const StudentList = ({ users }: any) => {
    let navigation = useNavigation();
    let route = useRoute();
    const database = useDatabase();
    let user = route.params.user;
    let students = route.params.students;
    const [dataList, setDataList] = useState(students);

    React.useEffect(() => {
         const data = getContactInfo().then(response => {
            setDataList(response);
        })
    }, [students])

    const getContactInfo = async () => {
        let contact_info = database.collections.get('students').query(Q.where('user_id', user._raw.id)).fetch();
        return contact_info;
    }

    /*const onEditContactInfo = (user, student) => {
        navigation.navigate("AddContactInfo", { user, contactInfo });
    }*/


    const onDeleteContactInfo = async(student) => {
        await student.deleteStudent();
        getContactInfo().then(response => {
            setDataList(response);
        })
    }

    return (
        <View>
            <TouchableOpacity  onPress={() => navigation.navigate("AddStudent", {user})}>
                <Text style={{fontSize:20,backgroundColor:'green',textAlign:'center'}} >Add Contact Info</Text>
            </TouchableOpacity>
            <FlatList
                data={dataList}
                renderItem={({ item, index }) => <StudentListItem student={item} onDelete={(student) => onDeleteContactInfo(student)}  database={database} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default StudentList;

