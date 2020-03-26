/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Card, CardSection, Button, RoundButton } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Pie from 'react-native-pie';
import Icon from 'react-native-vector-icons/FontAwesome5';
const DeviceWidth = Dimensions.get('window').width;

class Monefy extends Component {
	render() {

		return (
			<Card>
				<Text style={styles.currentDate}>{this.props.currentDate}</Text>
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
								{this.props.sections.find(s => s.name === 'bills').percentage}%
							</Text>
						</View>
						<View style={styles.iconContainer}>
							<Icon
								name="car"
								style={{ fontSize: 40, color: 'gray' }}
							/>
							<Text style={{ color: 'gray', textAlign: 'center' }}>
								{this.props.sections.find(s => s.name === 'car').percentage}%
							</Text>
						</View>
						<View style={styles.iconContainer}>
							<Icon
								name="phone"
								style={{ fontSize: 40, color: "#D2481D" }}
								onPress={() => console.log("bills")}
							/>
							<Text style={{ color: 'gray', textAlign: 'center' }}>
								{this.props.sections.find(s => s.name === 'phone').percentage}%
							</Text>
						</View>
						<View style={styles.iconContainer}>
							<Icon
								name="gift"
								style={{ fontSize: 40, color: "#FF69B4" }}
								onPress={() => console.log("bills")}
							/>
							<Text style={{ color: '#FF69B4', textAlign: 'center' }}>
								{this.props.sections.find(s => s.name === 'gift').percentage}%
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
									onPress={() => console.log("bills")}
								/>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="home"
									style={{ fontSize: 40, color: "#6495ED" }}
									onPress={() => console.log("bills")}
								/>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="dog"
									style={{ fontSize: 40, color: "#800000" }}
									onPress={() => console.log("bills")}
								/>
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
									onPress={() => console.log("bills")}
								/>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="train"
									style={{ fontSize: 40, color: "purple" }}
									onPress={() => console.log("bills")}
								/>
							</View>
							<View style={styles.iconContainer}>
								<Icon
									name="pizza-slice"
									style={{ fontSize: 40, color: "orange" }}
									onPress={() => console.log("bills")}
								/>
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
								onPress={() => console.log("bills")}
							/>
						</View>
						<View style={styles.iconContainer}>
							<Icon
								name="utensils"
								style={{ fontSize: 40, color: "#A52A2A" }}
								onPress={() => console.log("bills")}
							/>
						</View>
						<View style={styles.iconContainer}>
							<Icon
								name="running"
								style={{ fontSize: 40, color: "gray" }}
								onPress={() => console.log("bills")}
							/>
						</View>
						<View style={styles.iconContainer}>
							<Icon
								name="notes-medical"
								style={{ fontSize: 40, color: "red" }}
								onPress={() => console.log("bills")}
							/>
						</View>
					</View>
				</View>

				<CardSection>
					<Button onPress={() => console.log(this.props.totalExpense)}>
						Balance
            		</Button>
				</CardSection>

				<CardSection>
					<RoundButton
						onPress={() => Actions.newExpense()}
					//style={styles.leftRoundButton}
					>
						Expense
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
	const { currentDate, totalIncome, totalExpense, sections } = monefy;

	return { currentDate, totalIncome, totalExpense, sections };
};

export default connect(mapStateToProps, null)(Monefy);
