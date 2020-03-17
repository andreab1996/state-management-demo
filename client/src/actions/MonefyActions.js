import {
    EXPENSE_CHANGED,
    ERROR_MSG_CHANGED,
    INCOME_CHANGED,
    SHOW_INCOME_KEYBOARD,
    SHOW_EXPENSE_KEYBOARD
} from './types';

export const incomeChanged = (text) => {
    return {
        type: INCOME_CHANGED,
        payload: text
    };
};

export const expenseChanged = (text) => {
    console.log(text);
    return {
        type: EXPENSE_CHANGED,
        payload: text
    };
};

export const changeShowIncomeKeyboard = (show) => {
    console.log(show);
    return {
        type: SHOW_INCOME_KEYBOARD,
        payload: !show
    };
};

export const changeShowExpanseKeyboard = (show) => {
    console.log(show);
    return {
        type: SHOW_EXPENSE_KEYBOARD,
        payload: !show
    };
};

export const errorMsgChanged = (text) => {
    return {
        type: ERROR_MSG_CHANGED,
        payload: text
    };
};

export const submitExpense = () => {

};

