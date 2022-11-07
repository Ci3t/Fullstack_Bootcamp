import React from 'react'
import Data from './Data'
import './card.css'
function Card({birth,food,food2,name2}) {
  return (
    <div className='card'>
        <h3>{birth}</h3>
        <h3>{food}</h3>
        <h3>{food2}</h3>
        <h3>{name2}</h3>
        
    </div>
  )
}

export default Card