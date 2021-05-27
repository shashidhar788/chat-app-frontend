import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../store/actions/authActions';

const Navbar = () =>{
    const user = useSelector(state=>state.authReducer.user);
    const dispatch = useDispatch();

    const logoutClick = () =>{
        console.log("logging out user", user.firstname)
        dispatch(logout());

    }

    const updateProfile = () =>{

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
            
        </div>
    )
}

export default Navbar;