import React,{useState} from 'react';
import AddUser from './jsx/Users/AddUser.js';
import UserList from './jsx/Users/UserList.js';


function App() {
  const[userList,setUserList]= useState([]);

  const addUserHandler = (uName,uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name: uName,age: uAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
