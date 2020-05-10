/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { changeShowExpanseKeyboard, deleteExpense, errorMsgChanged, expenseChanged, submitExpense, updateExpense } from '../actions';
import { Category } from '../util/Category';
import { Button, Card, CardSection } from './common';
import { Keyboard } from './common/Keyboard';
const DeviceWidth = Dimensions.get('window').width;
class NewExpense extends Component {
    constructor(props) {
        super(props);
        this.keyDown = this.keyDown.bind(this);
    }

    handleKeyPress() {
        const { expense } = this.props;
        this.props.expenseChanged(expense);
    }

    keyDown(key) {
        this.props.expenseChanged(key);
    }

    onBackspace() {
        this.props.deleteExpense();
    }

    chooseCategory() {
        const { expense, showExpanseKeyboard } = this.props;
        if (!expense) {
            this.props.errorMsgChanged('You must enter a value!');
            return;
        }
        this.props.changeShowExpanseKeyboard(showExpanseKeyboard);
    }

    submit(category) {
        const { expense, showExpanseKeyboard, itemForUpdate, date } = this.props;
        if (!expense) {
            this.props.errorMsgChanged('You must enter a value!');
            return;
        }
        if (Object.keys(itemForUpdate).length !== 0) {
            this.props.updateExpense({ ...itemForUpdate, expense: expense });
        } else {
            console.log('submit');
            this.props.submitExpense({ expense, category, showExpanseKeyboard, date });
        }
    }

    render() {
        return (
            <Card>
                <View style={styles.expenseInput}>
                    <View style={{ justifyContent: 'center' }}>
                        <Icon name="money-bill-alt" style={{ fontSize: 40, color: "white", alignSelf: 'center' }} />
                        <Text style={{ color: 'white', fontSize: 10, textAlign: 'center' }}>BAM</Text>
                    </View>
                    <TextInput value={this.props.expense} style={styles.expense} />
                    <Icon
                        onPress={() => this.onBackspace()}
                        name="backspace"
                        style={{ fontSize: 30, color: "white", alignSelf: 'center' }}
                    />
                </View>

                <Text style={styles.errorMsg}>
                    {this.props.errorMsg}
                </Text>

                {this.props.showExpanseKeyboard === true ?
                    <View style={{ flexDirection: 'column' }}>
                        <Keyboard
                            onPress={this.keyDown}
                        />
                        <CardSection>
                            {this.props.category !== null ?
                                (
                                    <TouchableOpacity
                                        style={styles.buttonCategory}
                                        onPress={() => this.submit(this.props.category.name)}
                                    >
                                        <Icon
                                            name={this.props.category.icon}
                                            style={{ fontSize: 35, color: `${this.props.category.color}` }}
                                        />
                                        <Text style={{ marginLeft: 10 }}>ADD '{this.props.category.name.toUpperCase()}'</Text>
                                    </TouchableOpacity>
                                ) :
                                <Button
                                    style={{ marginBottom: 0 }}
                                    onPress={this.chooseCategory.bind(this)}
                                >
                                    CHOOSE CATEGORY
                                </Button>
                            }
                        </CardSection>
                    </View>
                    : []
                }

                {
                    this.props.showExpanseKeyboard !== true ?
                        <View style={styles.viewContainer}>
                            <View style={{
                                flexDirection: 'row',
                            }} >
                                <View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="money-bill-alt"
                                            style={{ fontSize: 45, color: "orange" }}
                                            onPress={() => this.submit('bills')}
                                        />
                                        <Text style={{ color: 'orange', textAlign: 'center' }}>{Category.Bills}</Text>
                                    </View>

                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="car"
                                            style={{ fontSize: 45, color: "gray" }}
                                            onPress={() => this.submit('car')}
                                        />
                                        <Text style={{ color: 'gray', textAlign: 'center' }}>{Category.Car}</Text>
                                    </View>

                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="phone"
                                            style={{ fontSize: 45, color: "#9370DB" }}
                                            onPress={() => this.submit('phone')}
                                        />
                                        <Text style={{ color: '#9370DB', textAlign: 'center' }}>{Category.Communications}</Text>
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="gift"
                                            style={{ fontSize: 45, color: "#FF00FF" }}
                                            onPress={() => this.submit('gift')}
                                        />
                                        <Text style={{ color: '#FF00FF', textAlign: 'center' }}>{Category.Gifts}</Text>
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="glass-martini-alt"
                                            style={{ fontSize: 45, color: "#DC143C" }}
                                            onPress={() => this.submit('glass-martini-alt')}
                                        />
                                        <Text style={{ color: '#DC143C', textAlign: 'center' }}>{Category.Entertainment}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="home"
                                            style={{ fontSize: 45, color: "#6495ED" }}
                                            onPress={() => this.submit('home')}
                                        />
                                        <Text style={{ color: '#6495ED', textAlign: 'center' }}>{Category.House}</Text>
                                    </View>

                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="dog"
                                            style={{ fontSize: 45, color: "#8B4513" }}
                                            onPress={() => this.submit('dog')}
                                        />
                                        <Text style={{ color: '#8B4513', textAlign: 'center' }}>{Category.Pets}</Text>
                                    </View>

                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="taxi"
                                            style={{ fontSize: 45, color: "#CCCC00" }}
                                            onPress={() => this.submit('taxi')}
                                        />
                                        <Text style={{ color: '#CCCC00', textAlign: 'center' }}>{Category.Taxi}</Text>
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="train"
                                            style={{ fontSize: 45, color: "purple" }}
                                            onPress={() => this.submit('train')}
                                        />
                                        <Text style={{ color: 'purple', textAlign: 'center' }}>{Category.Transport}</Text>
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="pizza-slice"
                                            style={{ fontSize: 45, color: "#FFD700" }}
                                            onPress={() => this.submit('pizza-slice')}
                                        />
                                        <Text style={{ color: '#FFD700', textAlign: 'center' }}>{Category.Food}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="notes-medical"
                                            style={{ fontSize: 45, color: "red" }}
                                            onPress={() => this.submit('notes-medical')}
                                        />
                                        <Text style={{ color: 'red', textAlign: 'center' }}>{Category.Health}</Text>
                                    </View>

                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="running"
                                            style={{ fontSize: 45, color: "#708090" }}
                                            onPress={() => this.submit('running')}
                                        />
                                        <Text style={{ color: '#708090', textAlign: 'center' }}>{Category.Sports}</Text>
                                    </View>

                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="tshirt"
                                            style={{ fontSize: 45, color: "#DB7093" }}
                                            onPress={() => this.submit('tshirt')}
                                        />
                                        <Text style={{ color: '#DB7093', textAlign: 'center' }}>{Category.Clothes}</Text>
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="utensils"
                                            style={{ fontSize: 45, color: "#A52A2A" }}
                                            onPress={() => this.submit('utensils')}
                                        />
                                        <Text style={{ color: '#A52A2A', textAlign: 'center' }}>{Category.EatingOut}</Text>
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                            name="taxi"
                                            style={{ fontSize: 45, color: "#483D8B" }}
                                            onPress={() => this.submit('taxi')}
                                        />
                                        <Text style={{ color: '#483D8B', textAlign: 'center' }}>{Category.Taxi}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        : []
                }
            </Card >
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
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
        marginTop: 150
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center'
    },
    expenseInput: {
        flexDirection: 'row',
        backgroundColor: '#3CB371',
        width: 400,
        height: 80,
        padding: 5,
        marginTop: 10
    },
    expense: {
        flex: 1,
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'center'
    },
    buttonCategory: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3CB371',
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = ({ monefy }) => {
    const { expense, errorMsg, showExpanseKeyboard, category, itemForUpdate, date } = monefy;

    return { expense, errorMsg, showExpanseKeyboard, category, itemForUpdate, date };
}

export default connect(mapStateToProps, {
    expenseChanged,
    errorMsgChanged,
    changeShowExpanseKeyboard,
    submitExpense,
    deleteExpense,
    updateExpense
})(NewExpense);
