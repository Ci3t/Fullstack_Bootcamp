import React from 'react'

function Input({inputItem,setInputItem}) {
  return (
    <div>
        <h3>Add todo</h3>
        <input type='text' placeholder='type to add todo'
        value={inputItem} 
        onChange={(e)=>{setInputItem(e.target.value)}}
        />
    </div>
  )
}

export default Input