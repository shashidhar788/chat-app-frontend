export const userStatus = (user) =>{
    console.log("from helper" , user.status)
    return user.status === 'online' ? 'online':'offline';

}