const uniqid = require('uniqid'); 
const fs = require('fs')

const addUser = function(id,name,email){
const users = loadUsers()

const duplicateUsers = users.filter(user=>{
    return user.name === name || user.email === email
})

if(duplicateUsers.length === 0){

    users.push({
        id:uniqid.time(),
        name,
        email,
    })
    saveUsers(users)
    console.log('new User Added');
}else{
    console.log('User Taken!');
}

}
const removeUser = function(id){
    const users = loadUsers()

    const deleteUser = users.filter(user=>{
        return user.id !== id
    })

    if(users.length > deleteUser.length){
        console.log('User Removed');
        saveUsers(deleteUser)

    }else{
        console.log('No User Found');
    }
}
const updateUser = function(id,newName){
    const users = loadUsers()
    const user = users.find((user) => user.id === id);

    user.name = newName
    saveUsers(users)
}
const readUser = function(id){
    const users = loadUsers()
    const user = users.find((user) => user.id === id);

    if(user){
        console.log(`User Name ${user.name} found`);
    }else{
        console.log('User Not Found');
    }

}
const saveUsers = function(users){
const dataJson = JSON.stringify(users)
fs.writeFileSync('users.json',dataJson)

}


const loadUsers = function(){

    try{

        const dataBuffer = fs.readFileSync('users.json')
        
        const usersJson = dataBuffer.toString()
        return JSON.parse(usersJson)
    }catch(e){
        return []
    }
}

module.exports={
    addUser,
    removeUser,
    updateUser,
    readUser
}