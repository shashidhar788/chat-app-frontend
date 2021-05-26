import React from 'react';
import {Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Chat from '../chatComponents/ChatComponent';

const Landing = ({ component: Comp , ...props}) =>{
    const isLoggedIn = useSelector(state=> state.authReducer.isLoggedIn);
    console.log(isLoggedIn, "is logged in state from landing")

    return (
      
      <Route  {...props}     
            render = { (props) => { 
            if(isLoggedIn){
                return <Chat {...props}/> 
            } 
            else{
                return <Redirect to='/login' />
            }
        }}
      />

    );
}

export default Landing;