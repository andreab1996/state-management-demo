/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';
import Pie from 'react-native-pie';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { addExpenseForCategory, changeDate, changeItemStatus, changeShowState, expensesFetch, incomeFetch, updateItem, deleteItem, addNewItem } from '../actions';
import { Card, CardSection, RoundButton } from './common';
import { BalanceButton } from './common/BalanceButton';
import StateButton from './common/StateButton';
const DeviceWidth = Dimensions.get('window').width;

class Monefy extends Component {
	constructor(props) {
		super(props);
		this.updateItem = this.updateItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	UNSAFE_componentWillMount() {
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
		this.setState({ collapsed: !item.collapsed })
	}

	onDateChange(date) {
		this.props.changeDate(date);
		this.props.expensesFetch();
		this.props.incomeFetch();
	}

	addExpenseForCategory(category) {
		this.props.addExpenseForCategory(category);
		Actions.newExpense();
	}

	addNewItem(text) {
		this.props.addNewItem(text);
	}

	updateItem(item) {
		this.props.updateItem(item);
		if (item.category !== 'deposits' && item.category !== 'salary' && item.category !== 'savings') {
			Actions.newExpense();
		}
		else {
			Actions.newIncome();
		}
	}

	deleteItem(item) {
		this.props.deleteItem(item);
	}

	render() {

		return (
			<Card>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<DatePicker
						style={{ width: 200 }}
						date={this.props.date} //initial date from state
						mode="date"
						placeholder="Select date"
						format="YYYY/MM/DD"
						minDate="2020/01/01"
						maxDate="2025/01/01"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={{
							dateIcon: {
								position: 'absolute',
								left: 0,
								top: 4,
								marginLeft: 0
							},
							dateInput: {
								marginLeft: 36
							}
						}}
						onDateChange={(date) => this.onDateChange(date)}
					/>
				</View>

				{this.props.showState !== true ?
					<View style={{
						flexDirection: 'column'
					}}>
						{/* 1. */}
						<View style={{
							flexDirection: 'row',
						}}>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => this.addExpenseForCategory('bills')}
							>
								<Icon
									name="money-bill-alt"
									style={{ fontSize: 40, color: 'orange' }}
								/>
								<Text style={{ color: 'orange', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'bills').percentage.toFixed(2)}%
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => this.addExpenseForCategory('car')}
							>
								<Icon
									name="car"
									style={{ fontSize: 40, color: 'gray' }}
								/>
								<Text style={{ color: 'gray', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'car').percentage.toFixed(2)}%
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => this.addExpenseForCategory('phone')}
							>
								<Icon
									name="phone"
									style={{ fontSize: 40, color: "#9370DB" }}
								/>
								<Text style={{ color: '#9370DB', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'phone').percentage.toFixed(2)}%
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => this.addExpenseForCategory('gift')}
							>
								<Icon
									name="gift"
									style={{ fontSize: 40, color: "#FF00FF" }}
								/>
								<Text style={{ color: '#FF00FF', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'gift').percentage.toFixed(2)}%
							</Text>
							</TouchableOpacity>
						</View>

						{/* 2. */}
						<View style={{
							flexDirection: 'row'
						}}>
							<View style={{
								flexDirection: 'column'
							}}>
								<TouchableOpacity
									style={styles.iconContainer}
									onPress={() => this.addExpenseForCategory('glass-martini-alt')}
								>
									<Icon
										name="glass-martini-alt"
										style={{ fontSize: 40, color: "#DC143C" }}
									/>
									<Text style={{ color: '#DC143C', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'glass-martini-alt').percentage.toFixed(2)}%
								</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.iconContainer}
									onPress={() => this.addExpenseForCategory('home')}
								>
									<Icon
										name="home"
										style={{ fontSize: 40, color: "#6495ED" }}
									/>
									<Text style={{ color: '#6495ED', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'home').percentage.toFixed(2)}%
								</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.iconContainer}
									onPress={() => this.addExpenseForCategory('dog')}
								>
									<Icon
										name="dog"
										style={{ fontSize: 40, color: "#8B4513" }}
									/>
									<Text style={{ color: '#8B4513', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'dog').percentage.toFixed(2)}%
								</Text>
								</TouchableOpacity>
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
								<TouchableOpacity
									style={styles.iconContainer}
									onPress={() => this.addExpenseForCategory('taxi')}
								>
									<Icon
										name="taxi"
										style={{ fontSize: 40, color: "#CCCC00" }}
									/>
									<Text style={{ color: '#CCCC00', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'taxi').percentage.toFixed(2)}%
								</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.iconContainer}
									onPress={() => this.addExpenseForCategory('train')}
								>
									<Icon
										name="train"
										style={{ fontSize: 40, color: "purple" }}
									/>
									<Text style={{ color: 'purple', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'train').percentage.toFixed(2)}%
								</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.iconContainer}
									onPress={() => this.addExpenseForCategory('pizza-slice')}
								>
									<Icon
										name="pizza-slice"
										style={{ fontSize: 40, color: "#FFD700" }}
									/>
									<Text style={{ color: '#FFD700', textAlign: 'center' }}>
										{this.props.sections.find(s => s.name === 'pizza-slice').percentage.toFixed(2)}%
								</Text>
								</TouchableOpacity>
							</View>
						</View>

						{/* 3. */}
						<View style={{
							flexDirection: 'row'
						}}>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => this.addExpenseForCategory('tshirt')}
							>
								<Icon
									name="tshirt"
									style={{ fontSize: 40, color: "#DB7093" }}
								/>
								<Text style={{ color: '#DB7093', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'tshirt').percentage.toFixed(2)}%
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => this.addExpenseForCategory('utensils')}
							>
								<Icon
									name="utensils"
									style={{ fontSize: 40, color: "#A52A2A" }}
								/>
								<Text style={{ color: '#A52A2A', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'utensils').percentage.toFixed(2)}%
							</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => this.addExpenseForCategory('running')}
							>
								<Icon
									name="running"
									style={{ fontSize: 40, color: "#708090" }}
								/>
								<Text style={{ color: '#708090', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'running').percentage.toFixed(2)}%
							</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => this.addExpenseForCategory('notes-medical')}
							>
								<Icon
									name="notes-medical"
									style={{ fontSize: 40, color: "red" }}
								/>
								<Text style={{ color: 'red', textAlign: 'center' }}>
									{this.props.sections.find(s => s.name === 'notes-medical').percentage.toFixed(2)}%
							</Text>
							</TouchableOpacity>
						</View>
					</View>
					: []
				}

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

				{
					this.props.showState ?
						<ScrollView
							style={{ height: 383 }}
						>
							{
								this.props.stateList.map(el => {
									return (
										<StateButton
											children={el}
											onPress={() => this.changeItemStatus(el)}
											updateItem={this.updateItem}
											deleteItem={this.deleteItem}
										/>
									);
								})
							}
						</ScrollView>
						: []
				}

				<View style={{
					flexDirection: 'row',
					marginTop: 10,
				}}>
					<RoundButton
						onPress={() => this.addNewItem("expense")}
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
						onPress={() => this.addNewItem("income")}
					>
						+
					</RoundButton>
				</View>
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
	const {
		currentDate,
		totalIncome,
		totalExpense,
		sections,
		expenses,
		showState,
		stateList,
		date
	} = monefy;

	return {
		currentDate,
		totalIncome,
		totalExpense,
		sections,
		expenses,
		showState,
		stateList,
		date
	};
};

export default connect(mapStateToProps, {
	expensesFetch,
	incomeFetch,
	changeShowState,
	changeItemStatus,
	changeDate,
	addExpenseForCategory,
	updateItem,
	deleteItem,
	addNewItem
})(Monefy);
