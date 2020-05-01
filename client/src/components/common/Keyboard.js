/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const DeviceWidth = Dimensions.get('window').width;

const Keyboard = ({ onPress }) => {
    return (
        <View style={styles.viewContainer}>
            <View style={{
                flexDirection: 'row',
                marginTop: 30
            }}>
                <View>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => onPress(1)}
                    >
                        <Text style={styles.number}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress(4)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress(7)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress('.')}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number} >.</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => onPress(2)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress(5)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress(8)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress(0)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>0</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => onPress(3)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress(6)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress(9)}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress('=')}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>=</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => onPress('+')}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress('-')}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress('x')}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onPress('/')}
                        style={styles.iconContainer}
                    >
                        <Text style={styles.number}>/</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        marginTop: 30,
        flexDirection: 'column',
        height: 390,
        width: 400
    },
    iconContainer: {
        width: DeviceWidth * 0.23,
        height: DeviceWidth * 0.19,
        marginBottom: 10,
        marginLeft: 5,
        borderColor: '#3CB371',
        borderWidth: 1.5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 40,
        textAlignVertical: 'center',
        color: '#373535'
    }
});

export { Keyboard };

