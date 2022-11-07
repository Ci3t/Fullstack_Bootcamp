import React,{useState} from 'react'
import './hide.css'
function HideAndSeek() {
// const [hide, setHide] = useState('hide')
const [toggle, settoggle] = useState(false)
 const hideSeek = () =>{
  settoggle(!toggle)
 
 }
  return (
    <div className='container'>
      <button onClick={hideSeek}>Show/Hide</button>
      <div className={(toggle ? 'box':'hide')}></div>
    </div>
  )
}

export default HideAndSeek