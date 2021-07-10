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
    ,
    searchUsers: (term)=>{

        
        return API.get('/users/search',{
            params:{
                term
            }
        })
        .then( ({data}) =>{
            return data;
        }).catch(err=>{
            console.log("err from chatServcie search", err);
            
        })

    },

    createChat: (userId)=>{
        console.log("creating a chat with userid" , userId);

        return API.post('/chats/create',{"partnerID":userId})
        .then( ({data}) =>{
            console.log("created new chat from services" , data);
            return data;
        }).catch(err=>{
            console.log("err from chatServcie search", err);
            
        })

    }


}


export default ChatService;