export const userStatus = (user) =>{
    console.log("from helper" , user.status, "user id", user.id);
    return user.status === 'online' ? 'online':'offline';
}