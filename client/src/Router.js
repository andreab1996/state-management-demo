/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ChooseCategory from './components/ChooseCategory';
import Monefy from './components/Monefy';
import NewExpense from './components/NewExpense';
import NewIncome from './components/NewIncome';
import Login from './components/Login';

const RouterComponent = () => {
    return (
        <Router
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle}
            sceneStyle={{ backgroundColor: '#F0FFF0' }}
        >
            <Scene key="root" hideNavBar>
                <Scene key="main">
                    <Scene
                        key="login"
                        component={Login}
                        title="Login"
                        initial
                    />
                    <Scene
                        key="monefy"
                        component={Monefy}
                        title="Monefy"
                    // initial
                    />
                    <Scene
                        key="newIncome"
                        component={NewIncome}
                        title="New Income"
                    />
                    <Scene
                        key="newExpense"
                        component={NewExpense}
                        title="New Expense"
                    />
                    <Scene
                        key="chooseCategory"
                        component={ChooseCategory}
                        title="Choose Category"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3CB371', // changing navbar color
    },
    navTitle: {
        color: 'white', // changing navbar title color
        fontSize: 25,
        fontStyle: 'italic',
        fontFamily: 'Calibri'
    }
});

export default RouterComponent;
