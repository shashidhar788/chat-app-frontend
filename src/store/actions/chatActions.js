import ChatService from "../../services/chatService";
export const FETCH_CHATS = 'FETCH_CHATS';
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
export const FRIENDS_ONLINE = 'FRIENDS_ONLINE';
export const FRIEND_ONLINE = 'FRIEND_ONLINE';
export const FRIEND_OFFLINE = 'FRIEND_OFFLINE';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'

export const SET_SOCKET = 'SET_SOCKET';


export const fetchChats = () => dispatch =>{
    return ChatService.fetchChats()
            .then( data =>{
                console.log("data from chat actions", data);
                data = data.data;

                data.forEach(chat=>{
                    chat.Users.forEach(user=>{
                        console.log("user id" , user.id);
                        user.status = 'offline'
                    })
                    chat.Messages.reverse();
                })

                dispatch({type: FETCH_CHATS, payload: data})
                return data;

            })
            .catch(err=>{
                throw err
            });
}

//action to get 
export const getOnlineFriends = (friendsOnline) =>dispatch=> {
    dispatch({type: FRIENDS_ONLINE, payload: friendsOnline})
}


export const isFriendOnline = (friend) =>dispatch=> {
    dispatch({type:FRIEND_ONLINE, payload: friend})
}



export const isFriendOffline = (friend) =>dispatch=> {
    dispatch({type: FRIEND_OFFLINE, payload: friend})
}



export const setCurrentChat = (chat) =>dispatch=> {
    dispatch({type: SET_CURRENT_CHAT, payload: chat})
}

export const setSocket = (socket) =>dispatch=> {
    dispatch({type: SET_SOCKET, payload: socket})
}


export const message_received = (message,userId) => dispatch =>{
    dispatch({type: MESSAGE_RECEIVED, payload: {message,userId}})
}