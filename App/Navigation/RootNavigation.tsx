import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BranchList from '../Screen/BranchList/index';
import AddBranch from '../Screen/AddBranch/index';
import AddStudent from '../Screen/AddStudent/index';
import StudentList from '../Screen/StudentList/index';
function RootNavigation({database}: any) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BranchList">
        <Stack.Screen name="BranchList" component={() => (<BranchList database={database} />)} />
        <Stack.Screen name='AddBranch' component={() => (<AddBranch database={database} />)} />
        <Stack.Screen name='AddStudent' component={() => (<AddStudent database={database} />)} />
        <Stack.Screen name='StudentList' component={() => (<StudentList database={database} />)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;