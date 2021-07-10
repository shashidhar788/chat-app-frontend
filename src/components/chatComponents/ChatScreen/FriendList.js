import React, { useState, Fragment } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './FriendList.scss';
import Friend from './Friend'
import { setCurrentChat } from '../../../store/actions/chatActions';
import Modal from '../Modal';
import ChatService from '../../../services/chatService';


const FriendList = () =>{
    const dispatch = useDispatch();


    const [showFriendsModal, setShowFriendsModal] = useState(false);
    const [suggestions,setSuggestions] = useState([]);

    //to search for friends
    const searchFriends =(e) =>{

        console.log("calling serach friends:  ", e.target.value)
        ChatService.searchUsers(e.target.value)
        .then(data=>{
            console.log("data from serachUsers" , data);

            setSuggestions(data);

        })
        .catch(err=>{
            console.log("some error from Friendlist searchusers", err);
            throw err;
        })

    }

    const addNewFriend = (id) =>{
        //should add this to the backend and update state
        

    }

    const chats = useSelector(state=>state.chatReducer.chats)
    console.log("From friends list componenet : " , chats);

    const openChat = (chat) =>{
        //opens a chat in messenger
        console.log("clicked on " , chat);
        dispatch(setCurrentChat(chat))
    }
    return (
        <div id="friends">
            
            <div id="title">
                <h3 className="m-0">
                    Friends
                </h3>
                <button onClick={()=>setShowFriendsModal(prevState=>!prevState)}> Add </button>
            </div>

            <hr /> 
            
            <div id="friends-box">
                {
                    chats.length>0
                    ? chats.map(chat=>{
                        return <Friend click={()=>openChat(chat)} chat={chat} key={chat.id} />
                    })
                    : <p id="no-chat">No friends found</p>
                }
            </div>

            {
                showFriendsModal && 
                <Modal click={()=>setShowFriendsModal(false)}>
                    <Fragment key='header'>
                        <h3 className="m-0"> Create new chat</h3>

                    </Fragment>
                    <Fragment key='body'>
                        
                        <p> Find friends by searching for them</p>

                        <input
                            onInput={(e)=>searchFriends(e)}
                            type='text'
                            placeholder="search for friends"

                        />
                        {
                            suggestions && suggestions.length>1 && 
                            <div >
                            {


                            suggestions.map(user=>{

                                return <div className="suggestion"> 
                                    <p>{user.firstname} {user.lastname}</p>
                                    <button onClick={()=>addNewFriend(user.id)}>Add</button>
                                </div>
                            })}

                            </div>

                        }
                        
                        
                    </Fragment>
                    <Fragment key='footer'>
                        
                    </Fragment>
                </Modal>
            }
        </div>
    )
}

export default FriendList;
