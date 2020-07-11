/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { passwordChanged, usernameChanged, loginUser } from '../actions';
import { CardSection } from './common';
import { LoginButton } from './common/LoginButton';
import { SignUpButton } from './common/SignUpButton';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	onUsernameChanged(text) {
		this.props.usernameChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { username, password } = this.props;
		this.props.loginUser({ username, password });
	}

	registration() {
		console.log('signUp');
		Actions.signUp();
	}

	renderButton() {
		return (
			<LoginButton onPress={this.onButtonPress.bind(this)}>
				Login
			</LoginButton>
		);
	}

	render() {
		return (
			<View>
				<View style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 50
				}}>
					<Icon
						name="comment-dollar"
						style={{ fontSize: 100, color: '#3CB371', align: 'center', alignItems: 'center' }}
					/>
				</View>
				<Text style={{ textAlign: 'center', fontSize: 20 }}>Welcome to Monefy</Text>
				<View>
					<View style={{
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 50
					}}>
						<CardSection>
							<View style={styles.containerStyle} >
								<View style={{
									flex: 1,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									borderColor: 'gray',
									marginLeft: 30
								}}>
									<Icon
										name="user"
										style={{ fontSize: 30, color: 'rgba(243,217,23, 0.8)', align: 'center', alignItems: 'center', margin: 30 }}
									/>
									<TextInput
										style={styles.inputStyle}
										value={this.props.username}
										onChangeText={this.onUsernameChanged.bind(this)}
										autoCorrect={false}
										autoCapitalize="none"
										placeholder="Username"
									/>
								</View>
							</View>
						</CardSection>
						<CardSection>
							<View style={styles.containerStyle} >
								<View style={{
									flex: 1,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									borderColor: 'gray',
									marginLeft: 30
								}}>
									<Icon
										name="lock"
										style={{ fontSize: 30, color: 'rgba(243,217,23, 0.8)', align: 'center', alignItems: 'center', margin: 30 }}
									/>
									<TextInput
										style={styles.inputStyle}
										value={this.props.password}
										onChangeText={this.onPasswordChange.bind(this)}
										autoCorrect={false}
										autoCapitalize="none"
										placeholder="Password"
										secureTextEntry
									/>
								</View>
							</View>
						</CardSection>

						<CardSection>
							{this.renderButton()}
						</CardSection>
					</View>
					<CardSection>
						<SignUpButton
							onPress={() => this.registration()}
						>
							Don't have an account? Sign up
						</SignUpButton>
					</CardSection>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
});

const mapStateToProps = ({ login }) => {
	const { username, password, registration } = login;

	return { username, password, registration };
};

export default connect(mapStateToProps, {
	usernameChanged,
	passwordChanged,
	loginUser
})(Login);
