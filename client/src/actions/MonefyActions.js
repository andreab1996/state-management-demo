import { EXPENSE_CHANGED, ERROR_MSG_CHANGED } from './types';

export const expenseChanged = (text) => {
    console.log(text);
    return {
        type: EXPENSE_CHANGED,
        payload: text
    };
};

export const errorMsgChanged = (text) => {
    return {
        type: ERROR_MSG_CHANGED,
        payload: text
    };
};

