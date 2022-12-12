import React from 'react'
import Button from './Button'
// import LandPageInputandStart from './LandPageInputandStart'

function LandPage({pageLanding,inputNum}) {
    
  return (
    <div>
    <div>
    <ul>
    Game Instructions

       <li>In your turn - roll the dice lat least once and accumulate the result in "current"</li> 
       <li>You can roll again or click "Hold" to save the points from "Current" and end the turn.</li> 
       <li>Note If you get 6-6 - you will lose all points from "current" and the turn will go to your opponent.</li> 
       <li>4.. Each player “flops”, or rolls, one die to determine who goes first. The highest number wins.</li> 
       <li>If you managed to reach exactly the target score - you win! if you passed it you loose</li> 
    </ul>

   
    </div>
    <h4>Please Select a Target Score</h4>
    <div>

    </div>
  
    {/* <LandPageInputandStart land2={land} landing2={landing3} btnName="Start Game"></LandPageInputandStart> */}
    <div>
        <input onChange={inputNum} type='number' min='50'></input>
        
    </div>
    <div>
    <Button landing={pageLanding}>Start Game</Button>
    </div>
   
   
    </div>
  )
}

export default LandPage