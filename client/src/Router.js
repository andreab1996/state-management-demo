import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ReduxExample from './ReduxExample';
import SecondPage from './components/SecondPage';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 0 }} >
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
                        component={SecondPage}
                        title="Second Page" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
