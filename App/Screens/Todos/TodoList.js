import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';
import { deleteTodo } from '../../Redux/Actions';
import { updateTodo } from '../../Redux/Actions';

function TodoList(props) {
    const { Jamal } = props;

const onDeleteTodo = (id) => {
    props.deleteTodo(id);
}
const onUpdateTodo = (id) => {
    props.updateTodo(id);
}
    return (

        <View style={styles.container}>
        <FlatList
            data={Jamal}
            renderItem={({ item, index }) => (
                <View style={styles.itemContainer}>


                    <View style={styles.itemRow}>
                        <View style={styles.textView}>
                            <Text style={styles.textStyles}>{item}</Text>
                        </View>


                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <TouchableOpacity style={styles.deleteBtn} onPress={(id) => onDeleteTodo(item.id)}>
                                <Text style={styles.deleteBtnText}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteBtn} onPress={(id) => onUpdateTodo(item.id)}>
                                <Text style={styles.deleteBtnText}>UPDATE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    line: {
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
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


const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    updateTodo: (id) => dispatch(updateTodo(id))

})
const mapStateToProps = ({todos}) => ({
    Jamal:todos
  });
  export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

