import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative'
    }
});

export { CardSection };
