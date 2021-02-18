import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux';

function Todos(props) {
    return(
        <View>
            <AddTodo />
            <TodoList />
        </View>
    )
}

const mapState = state => ({
    todos: state.todos
})

export default connect(mapState)(Todos)