import React from 'react';


const Message = ({chat, user, index, message}) => {
    return (
        <div id="message">
            <div>
                {
                    message.type === 'text' ? <p className="m-0"> {message.message}</p> : <img src={message.message} />
                }
            </div>
        </div>
    )
}

export default Message;