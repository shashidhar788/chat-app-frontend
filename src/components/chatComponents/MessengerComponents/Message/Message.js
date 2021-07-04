import React from 'react';
import './Message.css';


const Message = ({chat, user, index, message}) => {
    
    console.log("from message " , message) ;

    const determineMargin = () => {
        if(index+1 === chat.Messages.length ) return;
        return message.fromUserId === chat.Messages[index+1].fromUserId ? 'mb-5' : 'mb-10';
    }
    return (
        <div  className={`message ${determineMargin()} ${message.fromUserId===user.id?'creator':''}`} >

            <div style={{borderRadius:'20px'}} className={message.fromUserId===user.id?'owner':'other'}>

                {
                    message.fromUserId!= user.id  /* && chat.type == 'group' */ ? <h6 style={{margin:"0px"}}>{user.firstname}</h6> : <></>

                }
                {
                    message.type === 'text' ? <p style={{margin:"0px"}}> {message.message}</p> : <img src={message.message} />
                }
            </div>

        </div>

    )
}

export default Message;