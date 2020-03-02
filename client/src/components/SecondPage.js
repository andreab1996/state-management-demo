import React, { Component } from 'react';
import { View, Text } from 'react-native';


class SecondPage extends Component {
	
	render() {
		return (
			<View style={{
				margin: 10,
				flex: 1,
			}}>
				<Text>Second Page</Text>
			</View>
		);
	}
}


export default SecondPage;
