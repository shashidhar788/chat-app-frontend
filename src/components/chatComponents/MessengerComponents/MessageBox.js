import React from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

const MessageBox = ({chat}) => {

    const user = useSelector(state => state.authReducer.user);
    return (
        <div id="msg-box">

            {
                chat.Messages.map((message,index)=>{

                    return <Message chat={chat} user={user} message={message} index={index} key={message.id}/>
                })
            }
            
        </div>
    )
}

export default MessageBox;