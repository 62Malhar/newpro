import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import withObservables from '@nozbe/with-observables';
import { useNavigation } from '@react-navigation/native';
import { Q } from '@nozbe/watermelondb';

type Props = {
    user: {
        _raw: {
            id: string,
            // user_id: number,
            note: string,
            weight: string,
        },
        deleteUser: () => void,
    },
}

const userListItem = ({user,student}: Props) => {
    const [studentA, setStudentA] = useState(null);
    const database = useDatabase();
    let navigation = useNavigation();

    useEffect(() => {
        setStudentA(student && student)
    }, [student])
    const onDeleteuser = async () => {
        user.deleteUser();
    }
    return (
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('StudentList',{user,students:studentA})}>
                <View style={{backgroundColor:'#f1f1f1',borderWidth:1,marginHorizontal:10,marginTop:10}} >
                    <Text style={{fontSize:20}}>user Name: {user._raw.note}</Text>
                    <Text style={{fontSize:20}}>user Code: {user._raw.weight}</Text>
                    <View>
                        <TouchableOpacity  onPress={onDeleteuser}>
                            <Text style={{fontSize:20,backgroundColor:'red',color:'white'}} >Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
    )
}

const enhance = withObservables(['user'], ({ user, database }) => (
    {
        user: user.observe(), // shortcut syntax for `comment: comment.observe()`
        student:user.student.observe(),
    }));

export default enhance(userListItem);

