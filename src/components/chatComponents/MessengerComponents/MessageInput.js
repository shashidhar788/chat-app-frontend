import React, {useState} from 'react';
import './MessageInput.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
const MessageInput = ({chat}) => {


    const [message,setMessage] = useState('');
    const [image, setImage] = useState('');


    const user = useSelector(state=> state.authReducer.user);
    //grabbing socket from the state that is saved
    const socket = useSelector(state=> state.chatReducer.socket);


    const handleChange= (e) =>{
        e.preventDefault();

        const value = e.target.value;
        setMessage(value);

        //also need to notify other users that this user is typing something
         
    }

    const handleKeyDown = (e, imageUpload) => {
        
        
        if(e.key === 'Enter'){


            sendMessage(imageUpload);
            setMessage(msg=>{
                console.log("setting message to empty string")
                return '';
            
            });
            setImage(img => '');
            
            e.target.value = '';
        } 
        
       
    }

    const sendMessage = (imageUpload) =>{
        
        if(message.length <1 && !imageUpload ) {
            // this prevents empty messages
            return ;
        }  
        const msg = {
            type : imageUpload? 'image' : 'text',
            fromUser : user,
            toUserId : chat.Users.map(user=>user.id),
            chatId: chat.id,
            message: imageUpload ? image: message
        }

        

        //send message through sockets
        socket.emit('message',msg);


        setMessage(msg=>'');
        setImage(img => '');
    }

    return (
        <div id="input-container">
            <div id="message-input">
                <input type='text'  onChange={e=>handleChange(e)} onKeyDown={e=>handleKeyDown(e)} placeholder="Type your message here" />
                <button>Send</button>
                {/* <FontAwesomeIcon  className='fa-icon' icon={['far','smile']}/> */}
            </div>
            {/* <h4>Chat input goes here</h4> */}
        </div>
    )
}

export default MessageInput;