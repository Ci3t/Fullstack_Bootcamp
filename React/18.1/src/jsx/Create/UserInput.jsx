import React from 'react'

function UserInput({mockData,inputItem,inputItem2,setInputItem,setInputItem2,mockDataCreateUser}) {

  
  return (
    <div>
        <input onChange={(e)=>{setInputItem(e.target.value)}} value={inputItem} type='text' placeholder='Type UserName'/>

        <input onChange={(e)=>{setInputItem2(e.target.value)}} value={inputItem2} type='text' placeholder='Post Image URL'/>
        <button onClick={mockDataCreateUser}>Add User</button>
            {/* <img src={value} alt="" /> */}
      
    </div>
  )
}

export default UserInput