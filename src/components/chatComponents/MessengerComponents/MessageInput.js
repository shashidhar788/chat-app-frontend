import React, {useState,useRef} from 'react';
import './MessageInput.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import ChatService from '../../../services/chatService';

const MessageInput = ({chat}) => {


    const [message,setMessage] = useState('');
    const [image, setImage] = useState('');


    const user = useSelector(state=> state.authReducer.user);
    //grabbing socket from the state that is saved
    const socket = useSelector(state=> state.chatReducer.socket);

    const fileUpload =useRef();


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

    //handling image uploads

    const handleImageUpload =(e)=>{

        const formData = new FormData();
        formData.append('id',chat.id);
        formData.append('image',image);
        
        console.log("hadling image upload form input")
        //sending via chat service image upload
        ChatService.uploadImages(formData)
        .then(data=>{

            console.log("received from post method " , data.data.data.url);
            if(!data) throw new Error("no data from post")
            sendMessage(data.data.data.url);
        })
        .catch(err=>console.log(err));

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
            message: imageUpload ? imageUpload: message
        }

        

        //send message through sockets
        socket.emit('message',msg);


        setMessage(msg=>'');
        setImage(img => '');
    }

    return (
        <div id="input-container">
            <div id="image-upload-container">

                <div id="image-upload">
                    {
                        image.name?
                        <div id="image-details">
                            <p className='m-0'>{image.name}</p>
                            <button onClick={(e)=>handleImageUpload(e)}>upload image</button>
                            <button onClick={()=>setImage('')}>cancel</button>
                        </div> : null
                    }
                    <button onClick={()=>fileUpload.current.click()}> upload image</button>
                </div>



            </div>
            <div id="message-input">
                <input type='text' value={message} onChange={e=>handleChange(e)} onKeyDown={e=>handleKeyDown(e)} placeholder="Type your message here" />
                <button>Send</button>
                {/* <FontAwesomeIcon  className='fa-icon' icon={['far','smile']}/> */}
            </div>
            {/* <h4>Chat input goes here</h4> */}

            <input id="chat-image" ref={fileUpload} type='file' onChange={(e)=>setImage(e.target.files[0])}></input>
        </div>
    )
}

export default MessageInput;