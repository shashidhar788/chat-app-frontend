
import AuthService from '../../services/authService';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
//login action
export const login = (params,history) => (dispatch) =>{

    AuthService.login( params)
                .then( data=>{
                    console.log('from login action',data);

                    dispatch({type: LOGIN, payload: data});
                    history.push('/')
                })
                .catch(err=>{
                    console.log("Authorization Action Error", err);
                })

};
//REGISTER ACTION   
export const register = (params,history) => dispatch =>{

    AuthService.register(params)
                .then(data=>{
                    console.log('from register action',data);
                    dispatch({type:REGISTER, payload:data});
                    history.push('/');
                })
                .catch(err=>{
                    console.log("Auth Register Action Error",err);
                })
};

//LOG OUT ACTION

export const logout = (params,history) => dispatch =>{
    
    AuthService.logout()
    dispatch({type:LOGOUT});
    
}

//update user
export const updateProfile = (params) => dispatch =>{
    console.log('from update action');
    AuthService.updateProfileS(params)
                .then( data => {
                    
                    console.log('from update action',data);

                    dispatch({type:UPDATE_PROFILE, payload:data});
                })
                .catch(err=>{
                    console.log("Update user Action Error",err);
                })
};
