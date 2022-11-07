import React,{useState} from 'react'
import './counter.css'
    
function Counter({cl}) {
    const [count,setCount]=useState(0)
    const increment = ()=>{

        setCount((prevCount) => (Math.min(prevCount + 1,10)));
       
        
       
    }
    
    const decrement = ()=>{
        setCount((prevCount) => (Math.max(prevCount - 1,-10)));
      
    }

    

  return (
    <div>
        <label >

        <button onClick={increment}>+</button>
        <div className={count>0?'green': count < 0?'red':''}>{count}</div>
        <button onClick={decrement}>-</button>
        </label>
    </div>
  )
}

export default Counter