import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthService from '../../services/authService';

import {useDispatch} from 'react-redux';
import {login} from '../../store/actions/authActions';


const Login = ({history}) => {
    const dispatch = useDispatch();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const submitForm = (e) =>{
        e.preventDefault();
        dispatch(login({email,password},history));
        
        /* 
        .then(()=>{
            history.push('/');
        }) 
        ** MOVING THIS TO LOGIN DISPATCH ACTION ** 
        */

        //props.history
        /* AuthService.login({ email, password })
                    .then(res=>{
                        console.log(res);
                    })
                    .catch(err=>console.log(err)); */

        /* axios.post('http://localhost:3001/login',
        {email,password})
        .then(res=>{
            console.log("login post " , res);
        })
        .catch(err=> console.log(err)); */
        console.log('login clicked' , `email = ${email}, password=${password}`);
    }

    return(
        <div>
            <h2> Chat Login</h2>
            <div>
                <form onSubmit={submitForm}>
                    <div>
                        <input value={email} required='required'
                        type="text"
                        onChange={ e=> setEmail(e.target.value)} 
                        placeholder="Login Email"></input>
                    </div>
                    
                    <div>
                        <input value={password} required='required'
                        type="text"
                        onChange={e=> setPassword(e.target.value) } 
                        placeholder="Password"></input>
                    </div>
                    
                    <button>Login</button>

                    <div>
                        <p> Don't have an account? Please <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;