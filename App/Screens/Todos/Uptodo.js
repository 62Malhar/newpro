import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { updateTodo } from '../../Redux/Actions';
function Uptodo(props) {
    const { todo } = props;
    const onUpdateTodo = (id) => {
        props.updateTodo(id);
    }
    return (
        <View>
            <TouchableOpacity style={styles.deleteBtn} onPress={(id) => onUpdateTodo(todo.id)}>
                <Text style={styles.deleteBtnText}>UPDATE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    itemRow: {
        flexDirection: 'row',
    },
    textView: {
        width: 200,
        justifyContent: 'center',
    },
    textStyles: {
        color: '#000',
        fontSize: 20
    },
    deleteBtn: {
        backgroundColor: 'red',
        borderRadius: 5,
    },
    deleteBtnText: {
        color: "#FFF",
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})

const mapStateToProps = state => ({
    Jamal: state.todos.array
})


const mapDispatchToProps = (dispatch) => ({
    updateTodo: (id) => dispatch(updateTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Uptodo)