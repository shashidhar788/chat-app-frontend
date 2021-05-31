import React, { useState } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout,updateProfile } from '../../store/actions/authActions';
import Modal from './Modal';


const Navbar = () =>{
    const user = useSelector(state=>state.authReducer.user);
    const [showModal,setShowModal] = useState(false);

    const dispatch = useDispatch();
    const dispatch2 = useDispatch();

    const logoutClick = () =>{
        console.log("logging out user", user.firstname)
        dispatch(logout());

    }

    const updateProfileButton = () =>{
        setShowModal(!showModal);
    }

    
    const [firstname,setFirstname] = useState(user.firstname);
    const [lastname,setLastname] = useState(user.lastname);
    const [email,setEmail] = useState(user.email);
    const [password,setPassword] = useState(email.password || '');
    
    const submitForm = (e)=> {
        e.preventDefault();
        const updateFormObject = {firstname,lastname,email};
        if(password.length>0) updateFormObject.password = password;
        console.log(updateFormObject);

        const formData = new FormData();

        for( const key in updateFormObject ){
            console.log(key,updateFormObject[key]);
            formData.append(key,updateFormObject[key]);
        }

        console.log("Update called", formData);

        dispatch(updateProfile(updateFormObject))
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
                <button onClick={updateProfileButton}>Update profile</button>
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
                            type='text'
                            placeholder="Password"></input>
                        </div>

                        
                            <button onClick={submitForm}>Update</button>
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