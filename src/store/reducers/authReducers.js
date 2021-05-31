import { LOGIN, UPDATE_PROFILE } from '../actions/authActions';
import { REGISTER } from '../actions/authActions';
import { LOGOUT } from '../actions/authActions';

const intialState = {
    user : JSON.parse(localStorage.getItem('user')) || {},
    token : localStorage.getItem('token') || '',
    isLoggedIn: localStorage.getItem('user') ? true :false,
    //isLoggedIn : !!localStorage.getItem('user');
}
const authReducer = (state=intialState,action) =>{
    const {type, payload} = action;
    switch(type) {
        case LOGIN :
            //return new login state of user
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                isLoggedIn: true
            }
        case REGISTER:
            return {
                ...state,
                user:payload.user,
                token:payload.token,
                isLoggedIn: true
            }
        case LOGOUT:
            return{
                ...state,
                user:{},
                token:'',
                isLoggedIn: false
            }
        case UPDATE_PROFILE:
            console.log("from reducer up: ",payload);
            return {
                ...state,
                user: payload
            }

        default:
            return state;
    }
}

export default authReducer;