import React from 'react'
import Button from './Button'
function LandPageInputandStart({btnName,Landing,landing2}) {
    return (
      <div>
    <div>
        <input type='number' min='50'></input>
        
    </div>
    <div>
    <Button landpage={Landing} land34={landing2}>Start Game</Button>
    </div>

    </div>
  )
}

export default LandPageInputandStart