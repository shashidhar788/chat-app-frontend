import React from 'react';

import './Message.scss';

const Message = ({chat, user, index, message}) => {
    return (
        <div id="message">
            <div className={message.fromUserId === user.id ? 'owner' : 'other'}>
                {
                    message.type === 'text' ? <p className="m-0"> {message.message}</p> : <img src={message.message} />
                }
            </div>
        </div>
    )
}

export default Message;