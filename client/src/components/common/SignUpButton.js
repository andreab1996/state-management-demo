import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SignUpButton = ({ onPress, children }) => {
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
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        height: 50,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00FF7F',
        marginLeft: 50,
        marginRight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    }
});

export { SignUpButton };

