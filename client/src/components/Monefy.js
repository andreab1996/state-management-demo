/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Pie from 'react-native-pie';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { changeItemStatus, changeShowState, expensesFetch, incomeFetch } from '../actions';
import { Card, CardSection, RoundButton } from './common';
import { BalanceButton } from './common/BalanceButton';
import { StateButton } from './common/StateButton';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

class Monefy extends Component {
	componentWillMount() {
		this.props.expensesFetch();
		this.props.incomeFetch();
	}

	onExpensesFetch() {
		this.props.expensesFetch();
	}

	showState() {
		const { showState } = this.props;
		this.props.changeShowState(showState);
	}

	changeItemStatus(item) {
		this.props.changeItemStatus(item);
	}

	render() {

		return (
			<Card>
				<Text style={styles.currentDate}>{this.props.currentDate}</Text>

				{this.props.showState !== true ?
					<View style={{
						flexDirection: 'column'
					}}>
						{/* 1. */}
						<View style={{
							flexDirection: 'row',
						}}>
							<View style={styles.iconContainer}>
								<Icon
									name="money-bill-alt"
									style={{ fontSize: 40, color: 'orange' }}
								/>
								<Text style={{ color: 'orange', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'bills').percentage.toFixed(2)}%
							</Text>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="car"
									style={{ fontSize: 40, color: 'gray' }}
								/>
								<Text style={{ color: 'gray', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'car').percentage.toFixed(2)}%
							</Text>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="phone"
									style={{ fontSize: 40, color: "#D2481D" }}
								/>
								<Text style={{ color: 'gray', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'phone').percentage.toFixed(2)}%
							</Text>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="gift"
									style={{ fontSize: 40, color: "#FF69B4" }}
								/>
								<Text style={{ color: '#FF69B4', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'gift').percentage.toFixed(2)}%
							</Text>
							</View>
						</View>

						{/* 2. */}
						<View style={{
							flexDirection: 'row'
						}}>
							<View style={{
								flexDirection: 'column'
							}}>
								<View style={styles.iconContainer}>
									<Icon
										name="glass-martini-alt"
										style={{ fontSize: 40, color: "#DC143C" }}
									/>
									<Text style={{ color: '#DC143C', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'glass-martini-alt').percentage.toFixed(2)}%
								</Text>
								</View>
								<View style={styles.iconContainer}>
									<Icon
										name="home"
										style={{ fontSize: 40, color: "#6495ED" }}
									/>
									<Text style={{ color: '#6495ED', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'home').percentage.toFixed(2)}%
								</Text>
								</View>
								<View style={styles.iconContainer}>
									<Icon
										name="dog"
										style={{ fontSize: 40, color: "#800000" }}
									/>
									<Text style={{ color: '#800000', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'dog').percentage.toFixed(2)}%
								</Text>
								</View>
							</View>
							<View style={{
								flexDirection: 'column',
								marginRight: 20
							}}>
								<Pie
									radius={100}
									innerRadius={70}
									sections={this.props.sections}
									strokeCap={'butt'}
								/>
							</View>

							<View style={{
								flexDirection: 'column'
							}}>
								<View style={styles.iconContainer}>
									<Icon
										name="taxi"
										style={{ fontSize: 40, color: "#CCCC00" }}
									/>
									<Text style={{ color: '#CCCC00', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'taxi').percentage.toFixed(2)}%
								</Text>
								</View>
								<View style={styles.iconContainer}>
									<Icon
										name="train"
										style={{ fontSize: 40, color: "purple" }}
									/>
									<Text style={{ color: 'purple', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'train').percentage.toFixed(2)}%
								</Text>
								</View>
								<View style={styles.iconContainer}>
									<Icon
										name="pizza-slice"
										style={{ fontSize: 40, color: "#FF4500" }}
									/>
									<Text style={{ color: '#FF4500', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'pizza-slice').percentage.toFixed(2)}%
								</Text>
								</View>
							</View>
						</View>

						{/* 3. */}
						<View style={{
							flexDirection: 'row'
						}}>
							<View style={styles.iconContainer}>
								<Icon
									name="tshirt"
									style={{ fontSize: 40, color: "#DB7093" }}
								/>
								<Text style={{ color: '#DB7093', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'tshirt').percentage.toFixed(2)}%
								</Text>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="utensils"
									style={{ fontSize: 40, color: "#A52A2A" }}
								/>
								<Text style={{ color: '#A52A2A', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'utensils').percentage.toFixed(2)}%
							</Text>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="running"
									style={{ fontSize: 40, color: "#708090" }}
								/>
								<Text style={{ color: '#708090', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'running').percentage.toFixed(2)}%
							</Text>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="notes-medical"
									style={{ fontSize: 40, color: "red" }}
								/>
								<Text style={{ color: 'red', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'notes-medical').percentage.toFixed(2)}%
							</Text>
							</View>
						</View>
					</View>
					: []}

				<CardSection>
					<Icon
						name="bars"
						onPress={() => this.showState()}
						style={{
							fontSize: 30,
							textAlignVertical: 'center',
							marginRight: 15,
							marginLeft: 15,
							color: "#3CB371"
						}}
					/>
					<BalanceButton
						onPress={() => this.showState()}
					>
						{(this.props.totalIncome - this.props.totalExpense).toFixed(2)}
					</BalanceButton>
					<Icon
						name="bars"
						onPress={() => this.showState()}
						style={{
							fontSize: 30,
							textAlignVertical: 'center',
							marginRight: 15,
							marginLeft: 15,
							color: "#3CB371"
						}}
					/>
				</CardSection>

				{this.props.showState === true ?
					<ScrollView
						style={{ height: 383 }}
					>
						{
							this.props.stateList.map(el => {
								return (
									<StateButton
										onPress={() => this.changeItemStatus(el)}
									>
										{el}
									</StateButton>
								);
							})
						}
					</ScrollView>
					: []}

				<View style={{
					flexDirection: 'row',
					marginTop: 10
				}}>
					<RoundButton
						onPress={() => Actions.newExpense()}
					>
						-
            		</RoundButton>
					<View
						style={{
							flex: 1,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Text>
							<Text style={{ color: 'green', fontSize: 10 }}>BAM</Text>
							<Text style={{ color: 'green', fontSize: 18, fontWeight: 'bold' }}>
								{this.props.totalIncome}
							</Text>
						</Text>
						<Text>
							<Text style={{ color: 'red', fontSize: 10 }}>BAM</Text>
							<Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>
								{this.props.totalExpense}
							</Text>
						</Text>
					</View>
					<RoundButton
						onPress={() => Actions.newIncome()}
					>
						+
            				</RoundButton>
				</View>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	currentDate: {
		padding: 5,
		textAlign: 'center',
		color: '#20B2AA'
	},
	iconContainer: {
		width: DeviceWidth * 0.15,
		height: DeviceWidth * 0.15,
		marginBottom: 15,
		marginLeft: 10,
		marginRight: 37,
		alignItems: 'center'
	}
});

const mapStateToProps = ({ monefy }) => {
	const { currentDate, totalIncome, totalExpense, sections, expenses, showState, stateList } = monefy;

	return { currentDate, totalIncome, totalExpense, sections, expenses, showState, stateList };
};

export default connect(mapStateToProps, {
	expensesFetch,
	incomeFetch,
	changeShowState,
	changeItemStatus
})(Monefy);
