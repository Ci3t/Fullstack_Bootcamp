import React from 'react'
import './avatar.css'
function Display({mapped}) {
  return (
    <div className='avatar'>
        <div className='avatar-text'>

        
        <div >
            {mapped.title}
        </div>
        <div >
            {mapped.first}
        </div>
        <div>
            {mapped.last}
        </div>
        </div>
        <div className='avatar-img'>
            <img src={mapped.picture}></img>
        </div>
    </div>
  )
}

export default Display