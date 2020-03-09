import { EXPENSE_CHANGED, ERROR_MSG_CHANGED } from '../actions/types';

const INITIAL_STATE = { currentDate: '', expense: '', income: '', errorMsg: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EXPENSE_CHANGED:
            console.log(action.payload);
            return { ...state, expense: action.payload, errorMsg: '' };
        case ERROR_MSG_CHANGED:
            return { ...state, errorMsg: action.payload };
        // case LAST_NAME_CHANGED:
        //     return { ...state, lastName: action.payload };
        // case FULL_NAME_CHANGED:
        //     let text =  action.payload || '';
        //     let [firstName, lastName] = text.split(' ');
        //     return {...state, firstName: firstName ? firstName : '', lastName: lastName ? lastName : ''};
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
