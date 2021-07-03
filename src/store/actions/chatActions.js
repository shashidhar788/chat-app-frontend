import ChatService from "../../services/chatService";
export const FETCH_CHATS = 'FETCH_CHATS';


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