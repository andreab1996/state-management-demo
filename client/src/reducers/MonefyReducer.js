import { EXPENSE_CHANGED, INCOME_CHANGED, ERROR_MSG_CHANGED, SHOW_INCOME_KEYBOARD, SHOW_EXPENSE_KEYBOARD } from '../actions/types';

const INITIAL_STATE = { currentDate: '', expense: '', income: '', errorMsg: '', showIncomeKeyboard: true, showExpanseKeyboard: true };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCOME_CHANGED:
            return { ...state, income: action.payload, errorMsg: '' };
        case INCOME_CHANGED:
            return { ...state, income: action.payload, errorMsg: '' };
        case EXPENSE_CHANGED:
            return { ...state, expense: action.payload, errorMsg: '' };
        case SHOW_INCOME_KEYBOARD:
            return { ...state, showIncomeKeyboard: action.payload };
        case SHOW_EXPENSE_KEYBOARD:
            return { ...state, showExpanseKeyboard: action.payload };
        case ERROR_MSG_CHANGED:
            return { ...state, errorMsg: action.payload };
        default:
            let monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            let today = new Date();
            let dd = today.getDate();
            let month = monthNames[today.getMonth()];
            var yyyy = today.getFullYear();
            today = month + ', ' + dd + ' ' + yyyy;
            return { ...state, currentDate: today };
    }
};
