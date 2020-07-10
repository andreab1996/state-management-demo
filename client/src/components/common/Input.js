/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, icon }) => {
    return (
        <View style={styles.containerStyle}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'gray',
                marginLeft: 30
            }}>
                <Icon
                    name={icon}
                    style={{ fontSize: 30, color: 'rgba(243,217,23, 0.8)', align: 'center', alignItems: 'center', margin: 30 }}
                />
                <TextInput
                    style={styles.inputStyle}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={onChangeText}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder={placeholder}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };
