import { useEffect } from "react";
import SocketIOClient from 'socket.io-client';

function useSocket(user,dispatch){
    useEffect(()=>{
        const socket = SocketIOClient.connect('http://127.0.0.1:3001')

            console.log("from socket hook trying to join" )
            socket.emit('join',user);

            socket.on('typing',(user)=>{
                console.log("Event " , user);
            })

        
    },[dispatch])
}

export default useSocket;