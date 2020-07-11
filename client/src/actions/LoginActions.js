/* eslint-disable curly */
import _ from 'loadsh';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { NAME_CHANGED, PASSWORD_CHANGED, USERNAME, CONFIRM_PASSWORD, SAME_PASSWORD, CREATE_ACCOUNT, LOGIN } from './types';

export const usernameChanged = (text) => {
    return {
        type: USERNAME,
        payload: text
    };
};

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const confirmIsPasswordSame = (text) => {
    return {
        type: CONFIRM_PASSWORD,
        payload: text
    };
};

export const passwordIsnotSame = (text) => {
    return {
        type: SAME_PASSWORD,
        payload: text
    };
};

export const createAccount = (text) => {
    const { name, username, password } = text;

    return (dispatch) => {
        firebase.database().ref('/user')
            .push({ name, username, password })
            .then((reference) => {
                dispatch({
                    type: CREATE_ACCOUNT,
                    payload: { uid: reference.key, name, username, password }
                });
                Actions.monefy();
            });
    };
};

export const loginUser = (text) => {
    const { username, password } = text;

    return (dispatch) => {
        firebase.database().ref('/user')
            .on('value', snapshot => {
                let result = snapshot.val();
                console.log(result);
                let user = _.map(result, (val, uid) => {
                    if (val.username === username && val.password === password)
                        return {...val, uid};
                });
                loginUserSuccess(dispatch, user);
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    console.log('success');
    dispatch({
        type: LOGIN,
        payload: user
    });

    Actions.monefy();

};


