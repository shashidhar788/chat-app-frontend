import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../store/actions/authActions';

const Register = ({history}) => {
    const dispatch = useDispatch();
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const submitForm = (e)=> {
        e.preventDefault();
        console.log("register called", {firstname,lastname,email,password})
        dispatch(register({firstname,lastname,email,password},history));
    }
    return(
        <div>
        <h2> Registration Page</h2>
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <input 
                    onChange={e=>setFirstname(e.target.value)}
                    value={firstname}
                    required="required"
                    type='text'
                    placeholder="First Name"></input>
                </div>

                <div>
                    <input 
                    onChange={e=>setLastname(e.target.value)}
                    value={lastname}
                    required="required"
                    type='text'
                    placeholder="Last Name"></input>
                </div>

                <div>
                    <input onChange={e=>setEmail(e.target.value)}
                    value={email}
                    required="required"
                    type='text' 
                    placeholder="Email"></input>
                </div>
                
                <div>
                    <input 
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    required="required"
                    type='text'
                    placeholder="Password"></input>
                </div>

                <div>
                    <input placeholder="Re-enter Password"></input>
                </div>

                <button>Register</button>
            </form>

            <p> Already have an account? <Link to="/login"> Login!</Link> </p>


        </div>
    </div>
    );
}

export default Register;