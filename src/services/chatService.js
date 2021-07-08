import API from './api';

const ChatService = {
    fetchChats: ()=>{
        return API.get('/chats')
        .then()
        .catch()
    },

    uploadImages:(data)=>{
        const headers = {
            headers: {'Content-Type': 'application/x-from-urlencoded'}
        }
        return API.post('/chats/uploadImg',data,headers)
        .then(data=>{
            // console.log("chat Service: got data from the image upload backend " , data.data.url);
            return {data}

        })
        .catch(e=> {throw e;})
    }
}


export default ChatService;