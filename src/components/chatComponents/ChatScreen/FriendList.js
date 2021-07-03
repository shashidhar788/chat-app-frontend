import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './FriendList.scss';
import Friend from './Friend'

const FriendList = () =>{
    const chats = useSelector(state=>state.chatReducer.chats)
    console.log("From friends list componenet : " , chats);
    return (
        <div id="friends">
            <div id="title">
                <h3 className="m-0">
                    Friends
                </h3>
                <button> Add </button>
            </div>

            <hr /> 
            
            <div id="friends-box">
                {
                    chats.length>0
                    ? chats.map(chat=>{
                        return <Friend chat={chat} key={chat.id} />
                    })
                    : <p id="no-chat">No friends found</p>
                }
            </div>
        </div>
    )
}

export default FriendList;
