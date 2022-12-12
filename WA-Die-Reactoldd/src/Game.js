import React from "react";
import Button from "./jsx/Button";
import Player from "./jsx/Player";
import Player2 from "./jsx/Player2";
import RollDice from "./jsx/RollDice";

function Game({
  playerOneScore,
  name,
  rollDice,
  playerOneRandomDice1,
  playerOneRandomDice2,
  getP1Current,
  playerOneCurrent,
  playerTwoScore,
  getP2Current,
  setIsTurn,

}) {
  return (
    <div>
      <Player
        // resetPlayerCurr={playerOneScore}
        getP1Curr={getP1Current}
        currentPScore={playerOneCurrent}
        name="Player 1"
      />
      <Player
        // resetPlayerTwoCurr={playerTwoScore}
        getP2Curr={getP2Current}
        name="Player 2"
      />
      <RollDice
      playerOneRandomDice1={playerOneRandomDice1}
      playerOneRandomDice2={playerOneRandomDice2}
      rollDice={rollDice}
      ></RollDice>
      <button
        onClick={() => {
          setIsTurn(prev=>!prev)
        }}
      >
        Turn
      </button>
    </div>
  );
}

export default Game;


  // global,
  // playerOneCurrBtn,
  // isPlayerTurn,
  // resetPlayerCurr,
  // global2,
  // playerTwoCurrBtn,
  // resetPlayerTwoCurr,
  // holdTurn,
  // rollDice,

  //---
         // rollDice={rollDice}
        // playerOneCurrBtn={playerOneCurrBtn}
        // playerTwoCurrBtn={playerTwoCurrBtn}
        // diceOne={getDiceOne}
        // globalObj2={global2}
        // globalObj={global}

        //==
         // holdTurn()
          // isPlayerTurn()
          // resetPlayerCurr();