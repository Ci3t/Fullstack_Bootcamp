import React,{useState} from 'react'

import'./counter.css' 
function Counter() {
    const [counter,setCounter] = useState(0)
  
    const counterIncrement = ()=>{
        setCounter(counter + 1)
    }
    
  return (
    <div className='counter'>
        <div>{counter}</div>
     <button onClick={counterIncrement}>increment</button>
    </div>
  )
}

export default Counter