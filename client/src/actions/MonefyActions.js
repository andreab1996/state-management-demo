/* eslint-disable curly */
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
    CHANGE_ITEM_STATUS,
    DELETE_EXPENSE,
    DELETE_INCOME,
    CHANGE_DATE,
    ADD_FOR_CATEGORY,
    UPDATE_ITEM,
    DELETE_ITEM,
    RESET_STATE,
    RESET
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

export const deleteExpense = () => {
    return {
        type: DELETE_EXPENSE,
        payload: ''
    };
};

export const deleteIncome = () => {
    return {
        type: DELETE_INCOME,
        payload: ''
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

export const changeDate = (date) => {
    return {
        type: CHANGE_DATE,
        payload: date
    };
};

export const addExpenseForCategory = (text) => {
    return {
        type: ADD_FOR_CATEGORY,
        payload: text
    };
};

export const updateItem = (item) => {
    return {
        type: UPDATE_ITEM,
        payload: item
    };
};

export const deleteItem = (item) => {
    const { currentUser } = firebase.auth();
    const { uid } = item;
    let type = '';
    if (item.category !== 'deposits' && item.category !== 'salary' && item.category !== 'savings')
        type = 'expense';
    else
        type = 'income';

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/${type}/${uid}`)
        // firebase.database().ref(`/${type}/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: RESET_STATE });
                Actions.monefy({ type: 'reset' });
            });
    };
};

export const addNewItem = (text) => {
    return (dispatch) => {
        dispatch({
            type: RESET,
            payload: {}
        });
        if (text === 'expense')
            Actions.newExpense();
        else
            Actions.newIncome();
    };
};

export const submitExpense = (text) => {
    const { expense, category, date } = text;
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/expense`)
    // return (dispatch) => {
    //     firebase.database().ref('/expense')
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

export const updateExpense = (item) => {
    const { category, date, expense, uid } = item;
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/expense/${uid}`)
        // firebase.database().ref(`/expense/${uid}`)
            .set({ expense, category, date })
            .then(() => {
                dispatch({ type: RESET_STATE });
                Actions.monefy({ type: 'reset' });
            });
    };
};

export const submitIncome = (text) => {
    const { income, category, date } = text;
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/income`)
        // firebase.database().ref('/income')
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

export const updateIncome = (item) => {
    const { category, date, income, uid } = item;
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/income/${uid}`)
        // firebase.database().ref(`/income/${uid}`)
            .set({ income, category, date })
            .then(() => {
                dispatch({ type: RESET_STATE });
                Actions.monefy({ type: 'reset' });
            });
    };
};

export const expensesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/expense`)
        // firebase.database().ref('/expense')
            .on('value', snapshot => {
                dispatch({ type: EXPENSES_FETCH, payload: snapshot.val() });
            });
    };
};

export const incomeFetch = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/income`)
        // firebase.database().ref('/income')
            .on('value', snapshot => {
                dispatch({ type: INCOME_FETCH, payload: snapshot.val() });
            });
    };
};
