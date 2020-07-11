import { combineReducers } from 'redux';
import TextInputReducer from './TextInputReducer';
import MonefyReducer from './MonefyReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
    textInput: TextInputReducer,
    monefy: MonefyReducer,
    login: LoginReducer
});
