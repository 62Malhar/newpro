import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

function PostItem(props) {
    const { post } = props;
    return(
        <View style={styles.itemContainer}>
            <View style={styles.itemRow}>
                <View style={styles.textView}>
                    <Text style={styles.textStyles}>{post.id}</Text>
                </View>
            </View>
        </View>
    )
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
        width: width,
        justifyContent: 'center',
    },
    textStyles: {
        color: '#000',
        fontSize: 20
    },
})

export default PostItem