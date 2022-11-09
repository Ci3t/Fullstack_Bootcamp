import React, { useState } from 'react'
import Submit from './Submit'

function Form() {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [age,setAge]=useState('')
    const [freeText,setFreeText]=useState('')
    
    const handleSumbit =(e)=>{
        e.preventDefault()
        

    }

    const printData = ()=>{

        return(
            <Submit first={firstName}></Submit>
         
        )
    }
  return (
    <div>
        <form onSubmit={handleSumbit}>
            <label>First Name:</label>
            <input type='text' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
            <br></br>
            <label>Last Name:</label>
            <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            <br></br>
            <label>Age:</label>
            <select 
            value={age}
            onChange={(e)=>setAge(e.target.value)}>
                <option>0-15</option>
                <option>16-30</option>
                <option>30-40</option>
                <option>Over 40</option>
            </select>
            <br></br>
            <label>Free Text:</label>
            <textarea value={freeText} onChange={(e)=>setFreeText(e.target.value)}></textarea>
            <br></br>
            <button onClick={()=>printData}>Continue</button>
            
        </form>
    </div>
  )
}

export default Form