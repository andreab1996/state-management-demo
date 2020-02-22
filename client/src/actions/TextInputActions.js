import {
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    FULL_NAME_CHANGED,
} from './types';


export const firstNameChanged = (text) => {
    return {
        type: FIRST_NAME_CHANGED,
        payload: text
    };
};

export const lastNameChanged = (text) => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    };
};

export const fullNameChanged = (text) => {
    return {
        type: FULL_NAME_CHANGED,
        payload: text
    }
}