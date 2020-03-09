import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { VirtualKeyboard } from 'react-native-screen-keyboard';
import { Card, CardSection, Button } from './common';
import { expenseChanged, errorMsgChanged } from '../actions';
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';


class NewExpense extends Component {
    handleKeyPress() {
        const { expense } = this.props;
        this.props.expenseChanged(expense);
    }

    keyDown(key) {
        console.log(key);
        this.props.expenseChanged(key);
    }

    chooseCategory() {
        const { expense } = this.props;
        if (!expense) {
            this.props.errorMsgChanged('You must enter a value!');
            return;
        }
        console.log('actions');
        Actions.chooseCategory();
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput value={this.props.expense} style={styles.expense} />
                </CardSection>
                <Text style={styles.errorMsg}>{this.props.errorMsg}</Text>

                <VirtualKeyboard
                    keyboardStyle={styles.keyboard}
                    onRef={ref => (this.keyboard = ref)}
                    // keyDown={this.keyDown.bind(this)}
                    onChange={this.keyDown.bind(this)}
                />

                <CardSection>
                    <Button
                        onPress={this.chooseCategory.bind(this)}
                    >
                        CHOOSE CATEGORY
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    keyboard: {
        backgroundColor: 'red'
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center'
    },
    expense: {
        backgroundColor: '#3CB371',
        width: 390,
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});

const mapStateToProps = ({ monefy }) => {
    const { expense, errorMsg } = monefy;

    return { expense, errorMsg };
}

export default connect(mapStateToProps, { expenseChanged, errorMsgChanged })(NewExpense);
