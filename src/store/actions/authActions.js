
import AuthService from '../../services/authService';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

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