import axios from 'axios';
import { useStore } from 'react-redux';
import store from '../store';
import { logout } from '../store/actions/authActions';

const API  = axios.create({
    baseURL:'http://127.0.0.1:3001',
    headers:{
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    }
})

API.interceptors.response.use(
    res=>{
        return res;
    },
    err => {
        try{
            if (err.response.status!== 401){
                throw err;
            }
            if (err.response.data.error.name !== 'undefined') {
                if( err.response.data.error.name === 'TokenExpiredError'){
                    //log out user and make him log in again
                    store.dispatch(logout())
                    throw err 
                    
                }
            }

        }
        catch (err) {
            console.log('error in api.js')
            throw err
        }
        
    }

    
)

export default API;