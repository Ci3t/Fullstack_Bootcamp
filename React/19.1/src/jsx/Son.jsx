import React from 'react'
import Grandson from './Grandson'
import { useContext } from 'react'

import {Gifts} from './Grandfather'
function Son() {
const gift = useContext(Gifts)
  return (
    <div>
        <Grandson />
    </div>
  )
}

export default Son