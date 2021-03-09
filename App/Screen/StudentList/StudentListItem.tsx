import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import withObservables from '@nozbe/with-observables';
import { useNavigation } from '@react-navigation/native';
import { Q } from '@nozbe/watermelondb';

type ContactInfoListItemProps = {
    user: {
        _raw: {
            id: string,
            // user_id: number,
            first_name: string,
            last_name: string,
        },
    },
    onEdit: (arg1, arg2) => void,
    onDelete: (arg) => void,
}

const StudentListItem = ({ user, onEdit, student, onDelete }: ContactInfoListItemProps) => {
    const [studentArray, setStudentArray] = useState(student);
    const database = useDatabase();
    let navigation = useNavigation();

    useEffect(() => {
        // const data = getContactInfo().then(response => {
        //     console.log("contactData===", response[0]._raw);
        //     setContactInfo(response[0]._raw);
        // })
        //console.log("contactData===", contact_info);
        setStudentArray(student)
    },[student])

    return (
        <View >
            <View style={{borderWidth:1,backgroundColor:'#f1f1f1',marginTop:20}}>
                <Text style={{fontSize:20}}>Student Name: {studentArray._raw.name}</Text>
                <Text style={{fontSize:20}}>Student Tag : {studentArray._raw.tag}</Text>
                <View>
                    <TouchableOpacity onPress={()=>onDelete(student)}>
                        <Text style={{fontSize:20,color:'white',textAlign:'center',backgroundColor:'red'}}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onEdit(user, studentArray)}>
                        <Text style={{fontSize:20,color:'white',textAlign:'center',backgroundColor:'blue'}}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const enhance = withObservables(['user'], ({ student, database }) => (
    {
    student: student.observe(),
}));

export default enhance(StudentListItem);