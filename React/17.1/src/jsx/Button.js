import React from 'react'

function Button({name,item}) {
  return (
    <button onClick={()=>{
        item()
    }}>{name}</button>
  )
}

export default Button