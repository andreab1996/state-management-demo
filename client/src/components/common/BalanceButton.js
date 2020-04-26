/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BalanceButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            style={children.startsWith('-') ? styles.buttonStyleMinus : styles.buttonStylePlus}
            onPress={onPress}>
            <Text style={styles.textsStyle}>
                <Text style={{ fontSize: 18 }}>Balance </Text>
                <Text style={{ fontSize: 10 }}>BAM</Text>
                <Text style={{ fontSize: 18 }}>{children}</Text>
            </Text>
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
    buttonStylePlus: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#3CB371',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00FF7F',
        marginLeft: 5,
        marginRight: 5,
    },
    buttonStyleMinus: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#F04545',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EC5353',
        marginLeft: 5,
        marginRight: 5,
    }
});

export { BalanceButton };

