import React from 'react'

function Button({startGame,hold,rollDice,newGame,btnName,landing,isPlayerTurn}) {
  return (

        <button onClick={landing}  >Start Game</button>
   
  )
}

export default Button