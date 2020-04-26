import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}>
            <Text style={styles.textsStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textsStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#3CB371',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00FF7F',
        marginLeft: 5,
        marginRight: 5,
    }
});

export { Button };

