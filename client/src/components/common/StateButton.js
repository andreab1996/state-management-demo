/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CategoryIcon } from '../../util/CategoryIcon';

class StateButton extends Component {
    // let icon = CategoryIcon.find(ci => ci.name === children.category);

    render() {
        let icon = CategoryIcon.find(ci => ci.name === this.props.children.category);

        return (
            <View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.props.onPress}
                >
                    <View
                        style={{ flexDirection: 'row', margin: 5 }}
                    >
                        <Icon
                            name={this.props.children.collapse === false ? 'chevron-down' : 'chevron-up'}
                            style={{ fontSize: 15, color: 'gray', textAlignVertical: 'center' }}
                        />
                        <Icon
                            name={icon.icon}
                            style={{ fontSize: 30, color: `${icon.color}`, marginLeft: 10 }}
                        />
                        <Text style={styles.textsStyle}>
                            <Text style={{ fontSize: 18, color: `${icon.color}` }}>
                                {this.props.children.category.charAt(0).toUpperCase() + this.props.children.category.slice(1)}
                            </Text>
                        </Text>
                        <Text style={this.props.children.type === 'income' ? styles.textsStyleIncome : styles.textsStyleExpense}>
                            <Text style={{ fontSize: 10 }}>BAM</Text>
                            <Text style={{ fontSize: 18 }}>{this.props.children.total.toFixed(2)}</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                {this.props.children.collapse === true ?
                    <View style={{ flexDirection: 'column' }}>
                        {this.props.children.items.map(i => {
                            let value = i.expense ? i.expense : i.income;
                            return (
                                <TouchableOpacity
                                    style={{ flexDirection: 'row' }}
                                    onPress={() => this.props.updateItem(i)}
                                >
                                    <View style={i.expense ? styles.circleExpense : styles.circleIncome} />
                                    <Text style={styles.textsStyle}>
                                        <Text style={{ fontSize: 10 }}>BAM</Text>
                                        <Text>{Number(value).toFixed(2)}</Text>
                                    </Text>
                                    <Text style={{ fontSize: 14, textAlign: 'center', paddingTop: 10, paddingBottom: 10, color: 'gray' }}>
                                        {i.date}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textsStyle: {
        color: '#3CB371',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 5,
        flex: 1
    },
    textsStyleIncome: {
        color: '#3CB371',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10
    },
    textsStyleExpense: {
        color: '#F04545',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10
    },
    textStyle: {
        color: 'green',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5,
    },
    itemsNumber: {
        fontSize: 14,
        backgroundColor: '#3CB371',
        color: 'white',
        borderRadius: 50,
        marginLeft: 50
    },
    circleExpense: {
        marginLeft: 50,
        marginRight: 10,
        borderRadius: 50,
        backgroundColor: '#F04545',
        width: 10,
        height: 10,
        alignSelf: 'center'
    },
    circleIncome: {
        marginLeft: 50,
        marginRight: 10,
        borderRadius: 50,
        backgroundColor: '#3CB371',
        width: 10,
        height: 10,
        alignSelf: 'center'
    },
    circle: {
        borderRadius: 50,
        backgroundColor: '#3CB371',
        width: 25,
        height: 25,
        alignSelf: 'center',
        textAlign: 'auto',
        color: 'white',
        textAlignVertical: 'center',
        fontSize: 14
    }
});

export default StateButton;

