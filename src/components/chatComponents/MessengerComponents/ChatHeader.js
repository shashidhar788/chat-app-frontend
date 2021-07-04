import React from 'react';
import { Fragment,useState } from 'react';
import {userStatus} from '../../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatHeader = ({chat}) => {
    const [showChatOptions,setShowChatOptions] = useState(false);
    const [showAddFriendModal,setShowAddFriendModal] = useState(false);
    const [showDeleteChatModal,setShowDeleteChatModal] = useState(false);
    const [showLeaveChannel, setShowLeaveChannelModal] = useState(false);

    return (
        <Fragment>

        
            <div id='chatter'>
                {
                    chat.Users.map(user=>{
                        //console.log("user header ", user , userStatus(user))

                        return <div className='chatter-info'>
                            <h4 >{user.firstname} {user.lastname}</h4>
                            <div className="chatter-status">
                                <span className={`online-status ${userStatus(user)}`}></span>
                            </div>
                        </div>
                    })
                }            
            </div>
            <div>
                <button onClick={()=>setShowChatOptions(!showChatOptions)}> Options</button>
            </div>
            
            {
                showChatOptions ?
                <div id='settings'>
                    <div>
                        <FontAwesomeIcon icon={['fas','user-plus']}>

                        </FontAwesomeIcon>
                        <p>Add Friends</p>
                    </div>
                    {
                        chat.type==='group'?
                        <div>
                        <FontAwesomeIcon icon={['fas','sign-out-alt']}>

                        </FontAwesomeIcon>
                        <p>Leave Chat</p>
                        </div>
                        :<></>
                        
                    }
                    

                    <div>
                        <FontAwesomeIcon icon={['fas','trash']}>

                        </FontAwesomeIcon>
                        <p>Delete chat</p>
                    </div>
                </div>
                :<></>
            }

        </Fragment>
    );
}

export default ChatHeader;