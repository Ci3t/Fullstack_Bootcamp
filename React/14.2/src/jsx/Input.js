import React, { useRef, useState } from 'react'
import Button from './Button'
function Input({mapped,search}) {
  const [searchInput,setSearchInput] = useState(null)

  
  return (
    <div>
        <input  type='text' placeholder='Search' onChange={(e)=>{
        setSearchInput(e.target.value)
           search(searchInput)
           
        }}/>
        
        <Button/>
    </div>
  )
}

export default Input