/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
// import { emailChanged, firstNameChanged, lastNameChanged, passwordChanged, passwordIsnotSame, onRegistration } from '../actions';
import { CardSection, Input } from './common';
import { LoginButton } from './common/LoginButton';

class Login extends Component {
	// onFirstNameChanged(text) {
	// 	this.props.firstNameChanged(text);
	// }

	// onLastNameChanged(text) {
	// 	this.props.lastNameChanged(text);
	// }

	// onEmailChange(text) {
	// 	this.props.emailChanged(text);
	// }

	// onPasswordChange(text) {
	// 	this.props.passwordChanged(text);
	// }

	// onConfirmPassword(text) {
	// 	const { password, confirmPassword } = this.props;
	// 	this.props.confirmIsPasswordSame(text);

	// 	if (password !== confirmPassword) { this.props.passwordIsnotSame(); }
	// }

	onButtonPress() {
		// const { email, password } = this.props;
		// console.log(email + ' ' + password);
		// this.props.loginUser({ email, password });
	}

	onRegistration() {
		console.log('aaaaa');
		// this.props.onRegistration();
	}

	onCreateAccount() {
		// const { firstName, lastName, email, password } = this.props;
		// this.props.createAccount({ firstName, lastName, email, password });
	}

	renderButton() {
		// if (this.props.loading) {
		// 	return <Spinner size="large" />;
		// }

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
				{/* {this.props.registration !== true ? */}
					<View>
						<View style={{
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 50
						}}>
							<CardSection>
								<Input
									// value={this.props.email}
									// onChangeText={this.onEmailChange.bind(this)}
									icon="envelope"
									placeholder="Email"
								/>
							</CardSection>
							<CardSection>
								<Input
									// value={this.props.password}
									// onChangeText={this.onPasswordChange.bind(this)}
									icon="lock"
									placeholder="Password"
									secureTextEntry
								/>
							</CardSection>

							<CardSection>
								{this.renderButton()}
							</CardSection>
						</View>

						<View style={{ marginTop: 140, alignItems: 'center' }}>
							<TouchableOpacity
								// onPress={() => this.onRegistration()}
							>
								<Text style={{ color: 'red' }}>Don't have an account?</Text>
							</TouchableOpacity>
						</View>
					</View>
					{/* : */}
					<View style={{
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 20
					}}>
						<CardSection>
							<Input
								// value={this.props.firstName}
								// onChangeText={this.onFirstNameChanged.bind(this)}
								placeholder="First name"
								icon="user"
							/>
						</CardSection>
						<CardSection>
							<Input
								// onChangeText={this.onLastNameChanged.bind(this)}
								// value={this.props.lastName}
								placeholder="Last name"
								icon="user"
							/>
						</CardSection>
						<CardSection>
							<Input
								// onChangeText={this.onEmailChange.bind(this)}
								// value={this.props.email}
								icon="envelope"
								placeholder="Email"
							/>
						</CardSection>
						<CardSection>
							<Input
								// onChangeText={this.onPasswordChange.bind(this)}
								// value={this.props.password}
								icon="lock"
								placeholder="Password"
								secureTextEntry
							/>
						</CardSection>
						{/* <CardSection>
							<Input
								secureTextEntry
								placeholder="Confirm password"
								onChangeText={this.onConfirmPassword.bind(this)}
								value={this.props.confirmPassword}
								icon="lock"
							/>
						</CardSection> */}
						{/* <CardSection>
							<Text>{this.props.samePassword}</Text>
						</CardSection> */}
						{/* <CardSection>
							<LoginButton onPress={this.onCreateAccount.bind(this)}>
								Sign up
							</LoginButton>
						</CardSection> */}
					</View>
				{/* } */}
			</View>
		);
	}
}

// const mapStateToProps = ({ login }) => {
// 	const { email,
// 		password,
// 		confirmPassword,
// 		firstName,
// 		lastName,
// 		registration,
// 		samePasswrod } = login;

// 	return { email, password, confirmPassword, firstName, lastName, registration, samePasswrod };
// };

export default Login;
// {
// 	firstNameChanged,
// 	lastNameChanged,
// 	emailChanged,
// 	passwordChanged,
// 	// confirmIsPasswordSame,
// 	passwordIsnotSame,
// 	onRegistration
// }