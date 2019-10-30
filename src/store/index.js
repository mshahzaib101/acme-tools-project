import { createStore } from 'redux'
import { combineReducers } from 'redux';
// importing reducers
import Loged_in_user_info from './reducers/reducer-current-user-info';
import Signup_Popup from './reducers/reducer-signup-popup';

// -- this will combine all reducers in one
const rootReducer = combineReducers({
    Loged_in_user_info,
    Signup_Popup,
    
// more reducers go here
})

// -- passing root reducer
let store = createStore(rootReducer)

export default store;