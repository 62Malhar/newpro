import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import { useNavigation } from '@react-navigation/native';
import withObservables from '@nozbe/with-observables';
import { Q } from '@nozbe/watermelondb';
import BranchListItem from './BranchListItem';


const BranchList = ({ users }: any) => {
    // const id: number = route.params.id;
    // const firstName: string = route.params.firstName;
    // const lastName: string = route.params.lastName;
    let navigation = useNavigation();
    const database = useDatabase();
    const [dataList, setDataList] = useState(users);

    React.useEffect(() => {
        const data = getData().then(response => {
           // console.log("userData: ---", response)
            setDataList(response);
        });
    }, [users])
    const getData = async () => {
        const userCollection = await database.collections.get('users');
        let userData = await userCollection.query().fetch()
        return userData;
    }

    return (
        <View>
            <TouchableOpacity  onPress={() => navigation.navigate("AddBranch")}>
                <Text style={{fontSize:30,backgroundColor:'cyan',textAlign:'center'}} >Add user</Text>
            </TouchableOpacity>
            <FlatList
                data={dataList}
                renderItem={({ item, index }) => <BranchListItem user={item} database={database} />}
                keyExtractor={item => item.id}
               
            />
        </View>
    )
}

const enhance = withObservables(['user'], ({ database }: any) => (
    {
        users: database.collections.get('users').query() // shortcut syntax for `comment: comment.observe()`
    }));

export default enhance(BranchList);

// export default UserList;