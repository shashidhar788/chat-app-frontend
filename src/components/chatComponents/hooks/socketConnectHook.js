import { useEffect } from "react";
import SocketIOClient from 'socket.io-client';

import {fetchChats, getOnlineFriends, isFriendOffline, isFriendOnline, setSocket} from '../../../store/actions/chatActions';

function useSocket(user,dispatch){
    useEffect(()=>{

        dispatch(fetchChats())
        .then(res=>{

            console.log("res from chat compoonent:" , res);

            const socket = SocketIOClient.connect('http://127.0.0.1:3001')

            //saves the socket to reducer state which can be grabbed from message input
            dispatch(setSocket(socket));


            console.log("from socket hook trying to join" )
            
            socket.emit('join',user);

            socket.on('typing',(user)=>{
                console.log("Typing " , user);
            })

            socket.on('friendsOnline',(friends)=>{
                console.log("from socket: friends " , friends);
                dispatch(getOnlineFriends(friends))
            })


            socket.on('offline',(user)=>{
                console.log("from socket ,User offline  " , user);
                dispatch(isFriendOffline(user));
            })


            socket.on('online',(user)=>{
                console.log("Online  " , user);
                dispatch(isFriendOnline(user));
            })


            
        })
            
            
        .catch(err=>console.log("err from chat componenet: " , err));


        

        
    },[dispatch])
}

export default useSocket;