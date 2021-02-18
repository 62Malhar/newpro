import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';
import { addTodo } from '../../Redux/Actions';
const { height, width } = Dimensions.get('window');

function AddTodo({ text, selected, addTodo, editAddTodo }) {
    const [name, setName] = useState("")
  
    const handleSubmit = () => {
        if (selected || selected === 0) {
          editAddTodo({
            value: name,
            selected: selected
          });
        } else addTodo(name);
      };   
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={text}
                        onChangeText={(text)=>setName(text)}
                        placeholder="Add Todo"
                    />
                </View>
                <View style={styles.addBtnView}>
                    <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
                        <Text style={styles.addBtnText}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textInput: {
        width: 300,
        height: width * 0.1,
        borderWidth: 1,
        borderColor: "black",
        borderBottomColor: 'black',
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 20
    },
    addBtnView: {
        marginLeft: 20,
        marginTop: 20
    },
    addBtn: {
        backgroundColor: "#175FFF",
        borderRadius: 5,
        height: width * 0.1,
    },
    addBtnText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: "#FFF",
        fontSize: 25,
        fontWeight: 'bold'
    }
})

const mapStateToProps = ({ text, selected }) => ({
    text,
    selected
  });

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text)),
    editAddTodo: (obj) => dispatch(editAddTodo(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)