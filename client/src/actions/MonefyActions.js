import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EXPENSE_CHANGED,
    ERROR_MSG_CHANGED,
    INCOME_CHANGED,
    SHOW_INCOME_KEYBOARD,
    SHOW_EXPENSE_KEYBOARD,
    SUBMIT_EXPENSE,
    EXPENSES_FETCH,
    SUBMIT_INCOME,
    INCOME_FETCH,
    SHOW_STATE,
    CHANGE_ITEM_STATUS
} from './types';

export const incomeChanged = (text) => {
    return {
        type: INCOME_CHANGED,
        payload: text
    };
};

export const expenseChanged = (text) => {
    return {
        type: EXPENSE_CHANGED,
        payload: text
    };
};

export const changeShowIncomeKeyboard = (show) => {
    return {
        type: SHOW_INCOME_KEYBOARD,
        payload: !show
    };
};

export const changeShowExpanseKeyboard = (show) => {
    return {
        type: SHOW_EXPENSE_KEYBOARD,
        payload: !show
    };
};

export const changeShowState = (show) => {
    return {
        type: SHOW_STATE,
        payload: !show
    };
};

export const changeItemStatus = (item) => {
    return {
        type: CHANGE_ITEM_STATUS,
        payload: item
    };
};

export const errorMsgChanged = (text) => {
    return {
        type: ERROR_MSG_CHANGED,
        payload: text
    };
};

export const submitExpense = (text) => {
    const { expense, category } = text;
    let date = firebase.database.ServerValue.TIMESTAMP;

    return (dispatch) => {
        firebase.database().ref('/expense')
            .push({ expense, category, date })
            .then(() => {
                dispatch({
                    type: SUBMIT_EXPENSE,
                    payload: text
                });
                Actions.monefy({ type: 'reset' });
            });
    };
};

export const submitIncome = (text) => {
    const { income, category } = text;
    let date = firebase.database.ServerValue.TIMESTAMP;

    return (dispatch) => {
        firebase.database().ref('/income')
            .push({ income, category, date })
            .then(() => {
                dispatch({
                    type: SUBMIT_INCOME,
                    payload: text
                });
                Actions.monefy({ type: 'reset' });
            });
    };
};

export const expensesFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/expense')
            .on('value', snapshot => {
                dispatch({ type: EXPENSES_FETCH, payload: snapshot.val() });
            });
    };
};

export const incomeFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/income')
            .on('value', snapshot => {
                dispatch({ type: INCOME_FETCH, payload: snapshot.val() });
            });
    };
};
