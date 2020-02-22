import { combineReducers } from "redux";
import TextInputReducer from "./TextInputReducer";

export default combineReducers({
    textInput: TextInputReducer,
});