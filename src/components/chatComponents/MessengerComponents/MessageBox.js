import React,{useRef, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Message from './Message/Message';

import './MessageBox.scss';



const MessageBox = ({chat}) => {

    //to scroll bottom 
    const msgBox = useRef();

    const scrollBottom = useSelector(state=> state.chatReducer.scrollBottom);

    const scroll = (val)=>{
        msgBox.current.scrollTop =val;
    }

    useEffect(()=>{
        setTimeout(()=>{
            scroll(msgBox.current.scrollHeight);
        },100)
    },[scrollBottom])

    const user = useSelector(state => state.authReducer.user);
    return (
        <div id="msg-box" ref={msgBox}>

            {
                chat.Messages.map((message,index)=>{

                    return <Message id = "message" chat={chat} user={user} message={message} index={index} key={message.id}/>
                })
            }
            
        </div>
    )
}

export default MessageBox;