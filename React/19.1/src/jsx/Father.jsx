import React from 'react'
import { useContext } from 'react'
import Son from './Son'
import {Gifts} from './Grandfather'

function Father() {
    const gift  = useContext(Gifts)
   
  return (
    <div>
        <Son  />
    </div>
  )
}

export default Father