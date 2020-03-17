/* eslint-disable quotes */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
const DeviceWidth = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/FontAwesome5';


class ChooseCategory extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={{
                    flexDirection: 'row',
                }} >
                    <View>
                        <View style={styles.iconContainer}>
                            <Icon name="money-bill-alt" style={{ fontSize: 45, color: "orange" }} />
                            <Text style={{ color: 'orange', textAlign: 'center' }}>Bills</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon name="car" style={{ fontSize: 45, color: "gray" }} />
                            <Text style={{ color: 'gray', textAlign: 'center' }}>Car</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon name="phone" style={{ fontSize: 45, color: "red" }} />
                            <Text style={{ color: 'red', textAlign: 'center' }}>Communications</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="gift" style={{ fontSize: 45, color: "pink" }} />
                            <Text style={{ color: 'pink', textAlign: 'center' }}>Gifts</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="glass-martini-alt" style={{ fontSize: 45, color: "blue" }} />
                            <Text style={{ color: 'blue', textAlign: 'center' }}>House</Text>
                        </View>
                    </View>
                    <View>
                        {/* <View style={styles.iconContainer} />
                        <View style={styles.iconContainer} />
                        <View style={styles.iconContainer} />
                        <View style={styles.iconContainer} /> */}
                        <View style={styles.iconContainer}>
                            <Icon name="home" style={{ fontSize: 45, color: "blue" }} />
                            <Text style={{ color: 'blue', textAlign: 'center' }}>House</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon name="paw" style={{ fontSize: 45, color: "green" }} />
                            <Text style={{ color: 'green', textAlign: 'center' }}>Pets</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon name="taxi" style={{ fontSize: 45, color: "yellow" }} />
                            <Text style={{ color: 'yellow', textAlign: 'center' }}>Taxi</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="train" style={{ fontSize: 45, color: "purple" }} />
                            <Text style={{ color: 'purple', textAlign: 'center' }}>Transport</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="pizza-slice" style={{ fontSize: 45, color: "orange" }} />
                            <Text style={{ color: 'orange', textAlign: 'center' }}>Food</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.iconContainer}>
                            <Icon name="notes-medical" style={{ fontSize: 45, color: "red" }} />
                            <Text style={{ color: 'red', textAlign: 'center' }}>Health</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon name="running" style={{ fontSize: 45, color: "gray" }} />
                            <Text style={{ color: 'gray', textAlign: 'center' }}>Sports</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon name="tshirt" style={{ fontSize: 45, color: "red" }} />
                            <Text style={{ color: 'red', textAlign: 'center' }}>Clothes</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="utensils" style={{ fontSize: 45, color: "green" }} />
                            <Text style={{ color: 'green', textAlign: 'center' }}>Eating out</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="taxi" style={{ fontSize: 45, color: "black" }} />
                            <Text style={{ color: 'black', textAlign: 'center' }}>Taxi</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        width: DeviceWidth * 0.3,
        height: DeviceWidth * 0.2,
        marginBottom: 10,
        marginLeft: 10,
        borderLeftColor: '#3CB371',
        borderBottomColor: '#3CB371',
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 10,
        alignItems: 'center'
    },
    keyboard: {
        backgroundColor: 'red'
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center'
    },
    expenseInput: {
        flexDirection: 'row',
        backgroundColor: '#3CB371',
        width: 400,
        padding: 5,
        textAlign: 'center'
    },
    expense: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default ChooseCategory;
