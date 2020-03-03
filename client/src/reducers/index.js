import { combineReducers } from "redux";
import TextInputReducer from "./TextInputReducer";
import MonefyReducer from './MonefyReducer';

export default combineReducers({
    textInput: TextInputReducer,
    monefy: MonefyReducer
});