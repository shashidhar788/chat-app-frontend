import API from './api';

const ChatService = {
    fetchChats: ()=>{
        return API.get('/chats')
        .then()
        .catch()
    }
}

export default ChatService;