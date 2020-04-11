import { combineReducers } from "redux";
import userReducer from '../reducers/pageReducer'

export default combineReducers({
    userList : userReducer
})