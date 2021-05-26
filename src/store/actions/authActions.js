
import AuthService from '../../services/authService';

export const LOGIN = 'LOGIN';

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

            }