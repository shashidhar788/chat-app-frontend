import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navigation';

import { fetchChats } from '../../store/actions/chatActions';

import Friend from './ChatScreen/Friend';
import FriendList from './ChatScreen/FriendList';
import Messenger from './ChatScreen/Messenger';


const notLoggedIn  = ()=>{
    return (
        <div>
            <Link to="/login"> Login here</Link>
            <br />
            <Link to="/register"> Register Here</Link>
        </div>
    )
}


const Chat = ({...props}) => {
    /* 
    const user = useSelector(state=>state.authReducer.user);
    const token = useSelector(state=>state.authReducer.token);
    const loginState = useSelector(state=>state.authReducer.isLoggedIn);
     */

    const dispatch = useDispatch();
    const user = useSelector(state=> state.authReducer.user);

    useEffect(()=>{
        dispatch(fetchChats())
        .then(res=>console.log("res from chat compoonent:" , res))
        .catch(err=>console.log("err from chat componenet: " , err));

    })

    return(
        <>
        <Navbar />

        <div style={{display:"flex", height:"80vh"}} >
            <FriendList />
            <Messenger />
            
        </div>
        
        </>
        

        
        
    );
}



export default Chat;