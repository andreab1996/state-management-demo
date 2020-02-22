import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ReduxExample from './ReduxExample';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <ReduxExample />
            </Provider>
        );
    }
}

export default App;
