import { LOGIN } from '../actions/authActions';
import { REGISTER } from '../actions/authActions';
import { LOGOUT } from '../actions/authActions';

const intialState = {
    user : {},
    token : {},
    isLoggedIn: false
}
const authReducer = (state=intialState,action) =>{
    const {type, payload} = action;
    switch(type) {
        case LOGIN :
            //return new login state of user
            return {
                ...state,
                user: payload,
                token: payload.token,
                isLoggedIn: true
            }
        case REGISTER:
            return {
                ...state,
                user:payload,
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

        default:
            return state;
    }
}

export default authReducer;