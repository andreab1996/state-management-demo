import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ReduxExample from './ReduxExample';
import Monefy from './components/Monefy';
import NewIncome from './components/NewIncome';
import NewExpense from './components/NewExpense';
import ChooseCategory from './components/ChooseCategory';

const RouterComponent = () => {
    return (
        <Router
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle}
            sceneStyle={{ backgroundColor: '#F0FFF0' }}
        >
            <Scene key="root" hideNavBar>
                {/* <Scene key="auth">
                    <Scene key="login" component={ReduxExample} title="Please Login"  />
                </Scene> */}
                <Scene key="main">
                    <Scene
                        rightTitle="Second page"
                        onRight={() => { Actions.secondPage(); }}
                        key="reduxExample"
                        component={ReduxExample}
                        title="Redux Example"
                        initial
                    />
                    {/* {/* <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee" /> */}
                    <Scene
                        key="secondPage"
                        component={Monefy}
                        title="Monefy"
                        initial
                    />
                    <Scene
                        // rightTitle="Add"
                        // onLeft={() => { Actions.Monefy() }}
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
