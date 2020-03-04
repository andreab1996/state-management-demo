import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const RoundButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            style={children === 'Expense' ? styles.buttonStyleExpence : styles.buttonStyleIncome}
            onPress={onPress}>
            <Text style={children === 'Expense' ? styles.textsStyleExpence : styles.textsStyleIncome}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textsStyleExpence: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textsStyleIncome: {
        alignSelf: 'center',
        color: 'green',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyleExpence: {
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderColor: 'red'
    },
    buttonStyleIncome: {
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderColor: 'green'
    }
});

export { RoundButton };