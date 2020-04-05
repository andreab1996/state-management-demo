import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

console.disableYellowBox = true;

class App extends Component {
    componentWillMount() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp({
                apiKey: 'AIzaSyBUycNfPX7_J5vIgNKC0TE8cEqgj8QmQVU',
                authDomain: 'state-management-2171e.firebaseapp.com',
                databaseURL: 'https://state-management-2171e.firebaseio.com',
                storageBucket: 'state-management-2171e.appspot.com',
                messagingSenderId: '456580896236'
            });
        }
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;
