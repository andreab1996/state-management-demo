import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const RoundButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            style={children === '-' ? styles.buttonStyleExpence : styles.buttonStyleIncome}
            onPress={onPress}>
            <Text style={children === '-' ? styles.textsStyleExpence : styles.textsStyleIncome}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textsStyleExpence: {
        alignSelf: 'center',
        color: '#F04545',
        fontSize: 80,
        fontWeight: '800',
        paddingBottom: 15,
    },
    textsStyleIncome: {
        alignSelf: 'center',
        color: '#3CB371',
        fontSize: 50,
        fontWeight: '600',
        paddingBottom: 8,
    },
    buttonStyleExpence: {
        borderWidth: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: '#F04545'
    },
    buttonStyleIncome: {
        borderWidth: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: '#3CB371'
    }
});

export { RoundButton };