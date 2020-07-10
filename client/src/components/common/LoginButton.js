import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginButton = ({ onPress, children }) => {
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
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        height: 50,
        backgroundColor: '#3CB371',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00FF7F',
        marginLeft: 100,
        marginRight: 100,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { LoginButton };

