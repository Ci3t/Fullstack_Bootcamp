import React from 'react'

import { createContext } from 'react'
import { useState,useContext } from 'react'
import Father from './Father'
export const Gifts = createContext(null)

function Grandfather({children}) {
  const [gift,setGift] = useState([])
  setGift(['toy'])
      // setGift(['flower', 'toy'])
  return (
    <div>
      <Gifts.Provider value={{gift,setGift}}>
       {/* {children} */}
            <Father/>

      </Gifts.Provider>
        
    </div>
  )
}

export default Grandfather