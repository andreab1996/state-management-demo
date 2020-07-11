import { CONFIRM_PASSWORD, CREATE_ACCOUNT, NAME_CHANGED, ON_REGISTRATION, PASSWORD_CHANGED, SAME_PASSWORD, USERNAME, LOGIN } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    samePassword: '',
    registration: false,
    user: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME:
            return { ...state, username: action.payload };
        case NAME_CHANGED:
            return { ...state, name: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case CONFIRM_PASSWORD:
            return { ...state, confirmPassword: action.payload };
        case SAME_PASSWORD:
            return { ...state, samePassword: action.payload };
        case ON_REGISTRATION:
            return { ...state, registration: action.payload };
        case CREATE_ACCOUNT:
            return { ...state, registration: false, samePassword: '', user: action.payload };
        case LOGIN:
            return { ...state, samePassword: '', user: action.payload };
        default:
            return INITIAL_STATE;
    }
};
