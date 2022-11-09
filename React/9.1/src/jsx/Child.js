import React from 'react'
import Parent from './Parent'


function Child({style,state}) {
  return (
  
        <button className={style}  onClick={()=>{state(style)}}>{style}</button>
      
  )
}

export default Child