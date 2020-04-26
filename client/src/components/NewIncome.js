/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { VirtualKeyboard } from 'react-native-screen-keyboard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { changeShowIncomeKeyboard, errorMsgChanged, incomeChanged, submitIncome } from '../actions';
import { Button, Card, CardSection } from './common';
import { Category } from '../util/Category';
const DeviceWidth = Dimensions.get('window').width;

class NewIncome extends Component {
    handleKeyPress() {
        const { income } = this.props;
        this.props.incomeChanged(income);
    }

    keyDown(key) {
        console.log(key);
        this.props.incomeChanged(key);
    }

    chooseCategory(show) {
        const { income, showIncomeKeyboard } = this.props;
        if (!income) {
            this.props.errorMsgChanged('You must enter a value!');
            return;
        }
        this.props.changeShowIncomeKeyboard(showIncomeKeyboard);
    }

    submit(category) {
        const { income, showIncomeKeyboard } = this.props;

        this.props.submitIncome({ income, category, showIncomeKeyboard });
        // this.props.changeShowExpanseKeyboard(showExpanseKeyboard);
    }

    render() {
        return (
            <Card>
                <View style={styles.incomeInput}>
                    <Icon name="money-bill-alt" style={{ fontSize: 40, color: "white", paddingTop: 5, alignSelf: 'center' }} />
                    <TextInput value={this.props.income} style={styles.income} />
                </View>

                <Text style={styles.errorMsg}>
                    {this.props.errorMsg}
                </Text>

                {this.props.showIncomeKeyboard &&
                    <View style={styles.keyboard}>
                        <VirtualKeyboard
                            // keyboardStyle={styles.keyboard}
                            onRef={ref => (this.keyboard = ref)}
                            onChange={this.keyDown.bind(this)}
                        />
                    </View>
                }
                {this.props.showIncomeKeyboard &&
                    <CardSection>
                        <Button
                            onPress={this.chooseCategory.bind(this)}
                        >
                            CHOOSE CATEGORY
                        </Button>
                    </CardSection>
                }

                {this.props.showIncomeKeyboard !== true ?
                    <View style={styles.viewContainer}>
                        <View style={{
                            flexDirection: 'row',
                        }} >
                            <View>
                                <View style={styles.iconContainer}>
                                    <Icon
                                        name="dollar-sign"
                                        style={{ fontSize: 45, color: "orange" }}
                                        onPress={() => this.submit('deposits')}
                                    />
                                    <Text style={{ color: 'orange', textAlign: 'center' }}>{Category.Deposits}</Text>
                                </View>
                            </View>

                            <View>
                                <View style={styles.iconContainer}>
                                    <Icon
                                        name="coins"
                                        style={{ fontSize: 45, color: "#6495ED" }}
                                        onPress={() => this.submit('salary')}
                                    />
                                    <Text style={{ color: '#6495ED', textAlign: 'center' }}>{Category.Salary}</Text>
                                </View>
                            </View>

                            <View>
                                <View style={styles.iconContainer}>
                                    <Icon
                                        name="piggy-bank"
                                        style={{ fontSize: 45, color: "#DB7093" }}
                                        onPress={() => this.submit('savings')}
                                    />
                                    <Text style={{ color: '#DB7093', textAlign: 'center' }}>{Category.Savings}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    : []}
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    hide: {
        height: 0
    },
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
    incomeInput: {
        flexDirection: 'row',
        backgroundColor: '#3CB371',
        width: 400,
        height: 80,
        padding: 5,
        textAlign: 'center',
        marginTop: 10
    },
    income: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});


const mapStateToProps = ({ monefy }) => {
    const { income, errorMsg, showIncomeKeyboard } = monefy;

    return { income, errorMsg, showIncomeKeyboard };
}

export default connect(mapStateToProps, {
    incomeChanged,
    errorMsgChanged,
    changeShowIncomeKeyboard,
    submitIncome
})(NewIncome);
