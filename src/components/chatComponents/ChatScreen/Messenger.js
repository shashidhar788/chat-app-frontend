import React from 'react';
import { useSelector } from 'react-redux';
import ChatHeader from './../MessengerComponents/ChatHeader';
import MessageBox from './../MessengerComponents/MessageBox';
import MessageInput from './../MessengerComponents/MessageInput';

import './Messenger.scss'


const Messenger = () =>{

    const chat = useSelector(state=> state.chatReducer.currentChat);
    const isChatActive = () =>{
        //returns true if a chat is present in reducer

        return Object.keys(chat).length > 0;

    }
    return (
        <div id="messenger" className="shadow-light">
            Messenger
            {
                isChatActive()
                ? <div id="messenger-wrap" > 
                  
                  <ChatHeader chat={chat} />
                  <hr />
                  <MessageBox chat={chat}/>
                  <MessageInput chat={chat}/>

                  </div>:
                  <p>Select a friend to chat</p>

            }
        </div>
    )
}

export default Messenger;
