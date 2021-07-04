import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './FriendList.scss';
import Friend from './Friend'
import { setCurrentChat } from '../../../store/actions/chatActions';

const FriendList = () =>{
    const dispatch = useDispatch();
    const chats = useSelector(state=>state.chatReducer.chats)
    console.log("From friends list componenet : " , chats);

    const openChat = (chat) =>{
        //opens a chat in messenger
        console.log("clicked on " , chat);
        dispatch(setCurrentChat(chat))
    }
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
                        return <Friend click={()=>openChat(chat)} chat={chat} key={chat.id} />
                    })
                    : <p id="no-chat">No friends found</p>
                }
            </div>
        </div>
    )
}

export default FriendList;
