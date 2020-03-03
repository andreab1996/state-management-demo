import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardSection, Button, RoundButton } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Monefy extends Component {
	onExpencePress() {

	}

	onIncomePress() {
		Actions.newIncome();
	}

	render() {
		return (
			<Card>
				<Text style={styles.currentDate}>{this.props.currentDate}</Text>

				<CardSection>
					<Button>
						Balance
            		</Button>
				</CardSection>

				<CardSection>
					<RoundButton
						onPress={() => Actions.newExpence()}
					//style={styles.leftRoundButton}
					>
						Expence
            		</RoundButton>
					<RoundButton
						onPress={() => Actions.newIncome()}
					>
						Income
            		</RoundButton>
				</CardSection>
			</Card >
		);
	}
}

const styles = StyleSheet.create({
	currentDate: {
		padding: 5,
		textAlign: 'center',
		color: '#20B2AA'
	},
	// leftRoundButton: {
	// 	// position: 'absolute',
	// 	// left: 100,
	// 	// paddingLeft: 50
	// },
});

const mapStateToProps = ({ monefy }) => {
	const { currentDate, expense, income } = monefy;

	return { currentDate, expense, income };
};

export default connect(mapStateToProps, null)(Monefy);
