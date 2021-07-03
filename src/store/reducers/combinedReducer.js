import {combineReducers} from 'redux';

import authReducer from './authReducers';
import chatReducer from './chatReducer';
export default combineReducers({
    authReducer,
    chatReducer
});