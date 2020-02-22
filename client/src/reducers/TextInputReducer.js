import {
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    FULL_NAME_CHANGED,
} from '../actions/types';

const INITIAL_STATE = { firstName: '', lastName: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRST_NAME_CHANGED:
            return { ...state, firstName: action.payload };
        case LAST_NAME_CHANGED:
            return { ...state, lastName: action.payload };
        case FULL_NAME_CHANGED:
            let text =  action.payload || '';
            let [firstName, lastName] = text.split(' ');
            return {...state, firstName: firstName ? firstName : '', lastName: lastName ? lastName : ''};
        default:
            return state;
    }
}