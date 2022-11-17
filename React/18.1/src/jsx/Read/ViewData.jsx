import React from 'react'

function ViewData({data,deleteData,inputItem,setInputItem,setInputItem3,inputItem3,mockDataEdit}) {
    
  return (
    <div>
        <h1>{data.name}</h1>
        <div><img src={data.avatar}/></div>
        <h3>Online:{data.isOnline? 'Online':'Offline'}</h3>
        <h3>Listening to: {data.Listening }</h3>
        <button onClick={()=>{
            deleteData(data.id)
        }}>Delete User</button>
        <input onChange={(e)=>{setInputItem3(e.target.value)}} value={inputItem3} type='text' placeholder='Type New UserName'/>
        <button onClick={()=>{mockDataEdit(data.id)}}>Submit UserName</button>
    </div>
  )
}

export default ViewData