import React from 'react';
import './MessageInput.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MessageInput = () => {
    return (
        <div id="input-container">
            <div id="message-input">
                <input type='text' placeholder="Type your message here" />
                <FontAwesomeIcon  className='fa-icon' icon={['far','smile']}></FontAwesomeIcon>
            </div>
            {/* <h4>Chat input goes here</h4> */}
        </div>
    )
}

export default MessageInput;