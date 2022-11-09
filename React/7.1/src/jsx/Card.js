import React from 'react'
import Data from './Data'
import './card.css'
function Card({birth,food,food2,name2}) {
  return (
    <div className='card'>
        <div>{birth}</div>
        <div>{food}</div>
        <div>{food2}</div>
        <div>{name2}</div>
        
    </div>
  )
}

export default Card