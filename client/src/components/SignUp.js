/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { confirmIsPasswordSame, createAccount, nameChanged, passwordChanged, passwordIsnotSame, usernameChanged } from '../actions';
import { CardSection } from './common';
import { LoginButton } from './common/LoginButton';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    onNameChanged(text) {
        this.props.nameChanged(text);
    }

    onUsernameChanged(text) {
        this.props.usernameChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onConfirmPassword(text) {
        const { password, confirmPassword } = this.props;
        this.props.confirmIsPasswordSame(text);

        if (password !== confirmPassword) { this.props.passwordIsnotSame('Password must be same!'); }

        if (password === confirmPassword) { this.props.passwordIsnotSame(''); }
    }

    onCreateAccount() {
        const { name, username, password } = this.props;
        console.log(name, username, password)
        this.props.createAccount({ name, username, password });
    }

    renderButton() {
        return (
            <LoginButton onPress={this.onCreateAccount.bind(this)}>
                Sign up
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
                                        value={this.props.name}
                                        onChangeText={this.onNameChanged.bind(this)}
                                        autoCorrect={false}
                                        autoCapitalize="none"
                                        placeholder="First and last name"
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
                                        value={this.props.confirmPassword}
                                        onChangeText={this.onConfirmPassword.bind(this)}
                                        autoCorrect={false}
                                        autoCapitalize="none"
                                        placeholder="Confirm password"
                                        secureTextEntry
                                    />
                                </View>
                            </View>
                        </CardSection>

                        <Text style={{ fontSize: 16, color: 'red' }}>{this.props.samePassword}</Text>

                        <CardSection>
                            {this.renderButton()}
                        </CardSection>
                    </View>
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
    const {
        name,
        username,
        password,
        confirmPassword,
        samePassword,
        registration,
    } = login;

    return {
        name,
        username,
        password,
        confirmPassword,
        samePassword,
        registration,
    };
};

export default connect(mapStateToProps, {
    usernameChanged,
    nameChanged,
    passwordChanged,
    confirmIsPasswordSame,
    passwordIsnotSame,
    createAccount
})(SignUp);
