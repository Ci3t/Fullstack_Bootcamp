import React from 'react'
import Data from './Data'
function Card({turtle,image,info}) {
  return (
    <div>
        <div>{turtle}</div>
        <div>{image}</div>
        <div>{info}</div>
    </div>
  )
}

export default Card