import API from './api';

const AuthService = {
    login : (data) =>{
        return API.post('/login', data)
                    .then(({ data })=>{
                        setHeadersAndStorage(data);
                        return data;
                    })
                    .catch(err=>{
                        console.log("Auth service error : " , err);
                        throw err;
                    })
    },

    register: (data) =>{
        return API.post('/register', data)
                    .then(({ data })=>{
                        setHeadersAndStorage(data);
                        return data;
                    })
                    .catch(err=>{
                        console.log("Auth Register service error : " , err);
                        throw err;
                    })
    },

    logout: () =>{
        API.defaults.headers['Authrization'] = '';
        localStorage.removeItem('user');
        localStorage.removeItem('token');

    }
}

const setHeadersAndStorage = ({user,token}) =>{
    API.defaults.headers['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('token',token);

}

export default AuthService;