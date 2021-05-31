import React, { useState } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../store/actions/authActions';
import Modal from './Modal';

const Navbar = () =>{
    const user = useSelector(state=>state.authReducer.user);
    const [showModal,setShowModal] = useState(false);
    const dispatch = useDispatch();

    const logoutClick = () =>{
        console.log("logging out user", user.firstname)
        dispatch(logout());

    }

    const updateProfile = () =>{
        setShowModal(!showModal);
    }

    
    const [firstname,setFirstname] = useState(user.firstname);
    const [lastname,setLastname] = useState(user.lastname);
    const [email,setEmail] = useState(user.email);
    const [password,setPassword] = useState(email.password);
    
    const submitForm = (e)=> {
        e.preventDefault();
        const updateFormOjb = {firstname,lastname,email,password};
        const formmData = new FormData();
        for( const key in updateFormOjb){
            FormData.append(key,updateFormOjb[key])
        }
        console.log("Update called", {firstname,lastname,email,password})
        //dispatch(register({firstname,lastname,email,password},history));
    }

    return (
        <div id="navbar">
            <h2>Chat.io Main page</h2>
            <div id="profile=menu">
                <img src={user.avatar} alt= "Avatar" />
                <p> Logged in as, {user.firstname}</p>
            </div>
            {/* Nav bar has a dropdown with logout option */}
            <div>
                <button onClick={updateProfile}>Update profile</button>
                <button onClick={logoutClick}>Logout</button>
            </div>
            
            { showModal &&
                <Modal>
                    <Fragment key="header">
                        <h2> Update profile </h2>
                    </Fragment>
                    
                    <Fragment key= "body">
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
                            <button>Update</button>
                        </form>
                    
                    </Fragment>
                    <Fragment key="footer">
                        Footer
                    </Fragment>
                    
                </Modal>
            }
        </div>
    )
}

export default Navbar;