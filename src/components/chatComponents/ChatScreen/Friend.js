import React from 'react';
import { useSelector } from 'react-redux';
import Chat from '../ChatComponent';
import './Friend.scss';
import { userStatus } from '../../../utils/helpers';


const Friend = ({chat,click}) =>{
    //console.log("from friends component" , chat);
    const currentChat = useSelector(state => state.chatReducer.currentChat);

    const isChatOpened = ()=>{
        return currentChat.id===chat.id ? 'opened': '' ; 
    }
    const lastMessage = () =>{
        if(chat.Messages.length ===0 ) return '';

        const message = chat.Messages[chat.Messages.length-1];

        return message.type=== 'image'? 'image ' : message.message;

    }
    return (
        <div  onClick={click} className={`friend-list ${isChatOpened()}`}>
            <div className="friend-info">
                <img width='40' height='40' alt = 'User avatar' src="https://www.svgrepo.com/show/36350/user.svg" style={{border:"1px"}}/>                 
                
                <div className='m-0'><span><h4>{chat.Users[0].firstname} {chat.Users[0].lastname}</h4></span>
                
                <p className='m-0'>{lastMessage()}</p>
                
                </div>
                
            </div>
            
            <div className="friend-status">
            
                <span className={`online-status ${userStatus(chat.Users[0])}`}> </span>
            
            </div>
            
            
        </div>
    )
}

export default Friend;
