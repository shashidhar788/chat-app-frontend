import { useEffect } from "react";
import SocketIOClient from 'socket.io-client';

import { createChat, fetchChats, getOnlineFriends, isFriendOffline, isFriendOnline, message_received, setSocket } from '../../../store/actions/chatActions';
import { userStatus } from "../../../utils/helpers";

function useSocket(user, dispatch) {
    useEffect(() => {

        dispatch(fetchChats())
            .then(res => {

                console.log("res from chat compoonent:", res);

                const socket = SocketIOClient.connect('https://db-for-fastext.herokuapp.com/')
                //const socket = SocketIOClient.connect('http://localhost:3001')

                //saves the socket to reducer state which can be grabbed from message input
                dispatch(setSocket(socket));


                console.log("from socket hook trying to join")

                socket.emit('join', user);

                socket.on('typing', (user) => {
                    console.log("Typing ", user);
                })

                socket.on('friendsOnline', (friends) => {
                    console.log("from socket: friends ", friends);
                    dispatch(getOnlineFriends(friends))
                })


                socket.on('offline', (user) => {
                    console.log("from socket ,User offline  ", user);
                    dispatch(isFriendOffline(user));
                })


                socket.on('online', (user) => {
                    console.log("Online  ", user);
                    dispatch(isFriendOnline(user));
                })

                socket.on('received', message => {
                    dispatch(message_received(message, user.id))
                });

                socket.on('new-chat', chat => {
                    console.log("request to create new chat [socket hook]" , chat);
                    dispatch(createChat(chat))
                });


            })


            .catch(err => console.log("err from chat componenet: ", err));





    }, [dispatch])
}

export default useSocket;