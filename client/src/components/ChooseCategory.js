/* eslint-disable react-native/no-inline-styles */
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
                            <Icon
                                name="money-bill-alt"
                                style={{ fontSize: 45, color: "orange" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: 'orange', textAlign: 'center' }}>Bills</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon
                                name="car"
                                style={{ fontSize: 45, color: "gray" }}
                                onPress={() => console.log("car")}
                            />
                            <Text style={{ color: 'gray', textAlign: 'center' }}>Car</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon
                                name="phone"
                                style={{ fontSize: 45, color: "#D2481D" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#D2481D', textAlign: 'center' }}>Communications</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="gift"
                                style={{ fontSize: 45, color: "#FF69B4" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#FF69B4', textAlign: 'center' }}>Gifts</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="glass-martini-alt"
                                style={{ fontSize: 45, color: "#DC143C" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#DC143C', textAlign: 'center' }}>Entertainmment</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="home"
                                style={{ fontSize: 45, color: "#6495ED" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#6495ED', textAlign: 'center' }}>House</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon
                                name="dog"
                                style={{ fontSize: 45, color: "#800000" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#800000', textAlign: 'center' }}>Pets</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon
                                name="taxi"
                                style={{ fontSize: 45, color: "#CCCC00" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#CCCC00', textAlign: 'center' }}>Taxi</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="train"
                                style={{ fontSize: 45, color: "purple" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: 'purple', textAlign: 'center' }}>Transport</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="pizza-slice"
                                style={{ fontSize: 45, color: "orange" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: 'orange', textAlign: 'center' }}>Food</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="notes-medical"
                                style={{ fontSize: 45, color: "red" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: 'red', textAlign: 'center' }}>Health</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon
                                name="running"
                                style={{ fontSize: 45, color: "gray" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: 'gray', textAlign: 'center' }}>Sports</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Icon
                                name="tshirt"
                                style={{ fontSize: 45, color: "#DB7093" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#DB7093', textAlign: 'center' }}>Clothes</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="utensils"
                                style={{ fontSize: 45, color: "#A52A2A" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#A52A2A', textAlign: 'center' }}>Eating out</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="taxi"
                                style={{ fontSize: 45, color: "#483D8B" }}
                                onPress={() => console.log("bills")}
                            />
                            <Text style={{ color: '#483D8B', textAlign: 'center' }}>Taxi</Text>
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
