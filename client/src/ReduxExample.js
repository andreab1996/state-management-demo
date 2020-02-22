import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { firstNameChanged, lastNameChanged, fullNameChanged } from './actions';


class ReduxExample extends Component {
	onFirstNameChanged(text) {
		this.props.firstNameChanged(text);
	}

	onLastNameChanged(text) {
		this.props.lastNameChanged(text);
	}

	onFullNameChanged(text) {
		this.props.fullNameChanged(text);
	}
	
	render() {
		return (
			<View style={{
				margin: 10,
				flex: 1,
			}}>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					label="First name"
					onChangeText={this.onFirstNameChanged.bind(this)}
					value={this.props.firstName}
				/>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					label="Last name"
					onChangeText={this.onLastNameChanged.bind(this)}
					value={this.props.lastName}
				/>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					label="Full name"
					onChangeText={this.onFullNameChanged.bind(this)}
					value={`${this.props.firstName} ${this.props.lastName}`}
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ textInput }) => {
	const { firstName, lastName } = textInput;

	return { firstName, lastName };
}

export default connect(mapStateToProps, { firstNameChanged, lastNameChanged, fullNameChanged })(ReduxExample);
