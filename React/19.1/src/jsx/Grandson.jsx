import React from 'react'
import { useContext } from 'react'

import {Gifts} from './Grandfather'
function Grandson() {
    const {gift} = useContext(Gifts)

  return (
    <div>
        {gift}
    </div>
  )
}

export default Grandson