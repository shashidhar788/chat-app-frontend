import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


const notLoggedIn  = ()=>{
    return (
        <div>
            <Link to="/login"> Login here</Link>
            <br />
            <Link to="/register"> Register Here</Link>
        </div>
    )
}

const Chat = () => {
    const user = useSelector(state=>state.authReducer.user);
    const token = useSelector(state=>state.authReducer.token);
    const loginState = useSelector(state=>state.authReducer.isLoggedIn);
    
    return(
        <div>
            <h2> Main Chat Page</h2>
            <p>welcome , {user.firstname}</p>
            {notLoggedIn()}
        </div>
    );
}



export default Chat;