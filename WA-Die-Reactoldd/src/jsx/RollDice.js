import React from "react";

function RollDice({
  playerOneRandomDice1,
  playerOneRandomDice2,
  rollDice,
  // globalObj,
  // playerOneCurrBtn,
  // playerTwoCurrBtn,
  // globalObj2,
  // rollDice,
}) {
  return (
    <div>
      <img
        src={`/images/dice-${playerOneRandomDice1 || 1}.png`}
        alt="img"
      />
      <img
        src={`/images/dice-${playerOneRandomDice2|| 1}.png`}
        alt="img"
      />

      <button onClick={rollDice}>Roll Dice</button>
      <button>Turn</button>
    </div>
  );
}

export default RollDice;

// globalObj()
// playerOneCurrBtn()
// // rollDice()
// // globalObj2()
// // playerTwoCurrBtn()
