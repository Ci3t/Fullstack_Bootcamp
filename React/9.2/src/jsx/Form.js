import React,{useState} from 'react'

function Form() {
    const [checked,setChecked] = useState(true)
  return (
    <div>
        <form>
            <label>
            <input type='checkbox'/>
            I Read the term of the App
            </label>
            <br></br>
            <label>

            <input type='checkbox'/>
            I accept the term of the App
            </label>
            <label>
            <br></br>
            <input type='checkbox' defaultChecked={checked} onChange={()=>{setChecked(!checked)}}/>
            I want to get the weekly news letter
            </label>
            <label>
            <br></br>
            <input type='checkbox' defaultChecked={checked} onChange={()=>{setChecked(!checked)}}/>
            I want to get sales and offers
            </label>
            
            
        </form>
    </div>
  )
}

export default Form