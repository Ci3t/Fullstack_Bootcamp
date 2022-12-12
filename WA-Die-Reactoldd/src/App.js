import { useState } from "react";
import "./App.css";
import Button from "./jsx/Button";
import LandPage from "./jsx/LandPage";
import Player from "./jsx/Player";
import RollDice from "./jsx/RollDice";
import Game from "./Game";

function App(props) {
  const [isLandingPage, setIsLandingPage] = useState(true); // switch LandingPage and Game
  const [inputNum, setInputNum] = useState(100); // input number 100 landing page
  const [isHold, setIsHold] = useState(true);
  const [pOneScore, setPOneScore] = useState({
    playerOneScore: 0,
    playerTwoScore: 0,
  });
  const [gameStats, setGameStats] = useState({
    reset: false,
    startGame: false,
    winner: false,
  });
  const [playerTwo, setPlayerTwo] = useState({
    playerTwo: "Player 2",
    playerTwoScore: 0,
    playerTwoCurrent: 0,
    playerOneRandomDice1: 0,
    playerOneRandomDice2: 0,
  });
  const [playerOne, setPlayerOne] = useState({
    playerOne: "Player 1",
    playerOneScore: 0,
    playerOneCurrent: 0,
    playerOneSum: 0,
    playerOneRandomDice1: 1,
    playerOneRandomDice2: 1,
    DiceOne:1,
    DiceOne:1,
  });
  const [globalVars, setGlobalVars] = useState({
    // starting OBJ can reset game
    winner: false,
    playerOne: "Player 1",
    playerTwo: "Player 2",
    playerOneScore: 0,
    playerOneCurrent: 0,
    playerOneSum: 0,
    playerOneRandomDice1: 0,
    playerOneRandomDice2: 0,
    playerTwoScore: 0,
    playerTwoCurrent: 0,
    playerRound: 0,
    reset: false,
    startGame: false,
    isTurn:true,
  });


    const getRandom =()=>{
      return Math.floor(Math.random() * 6 + 1);
    }

  const LandingPage = () => {
    setIsLandingPage((prevLand) => !prevLand);
  };
  // const isPlayerTurn = () => {
  //   if (globalVars.playerRound === 0) {
  //     return;
  //   } else {
  //     setIsTurn((prevTurn) => !prevTurn);
  //   }

    
  // };

  const holdTurn = ()=>{
    if(isHold){
      // getRandomNumberOne()
      resetPlayerOneCurr()
      setIsHold(false)
    }else{
      // getRandomNumberTwo()
      // resetPlayerTwoCurr()
      setIsHold(true)
    }
  }
  const rollDice = ()=>{
    if(isHold){
      getRandomNumberOne()
      getPlayerOneCurrent()
      // resetPlayerOneCurr()
      // let dice1 = getRandom()
      // let dice2 = getRandom()
     
      // getRandomNumberOne(dice1,dice1)
    } if(!isHold){
      getRandomNumberTwo()
      // resetPlayerTwoCurr()
      getPlayerTwoCurrent()
    }
  }
  console.log(isHold);
  //!PlayerOne Score Update -> and reset current to 0
  const resetPlayerOneCurr = () => {
    let sum = globalVars.playerOneScore + globalVars.playerOneCurrent
    setGlobalVars((prevScore) => ({
      ...prevScore,
      playerOneScore: +sum,
      playerOneCurrent: 0,
    }));
    // setGlobalVars((prevCurrent) => ({
    //   ...prevCurrent,
    //   playerOneCurrent: 0,
    // }));
  };
  // console.log(resetPlayerOneCurr());
  //!PlayerTwo Score Update
  const resetPlayerTwoCurr = () => {
    setPlayerTwo((prevScore) => ({
      ...prevScore,
      playerOneScore: prevScore.playerTwoScore + globalVars.playerTwoCurrent,
    }));
    setGlobalVars((prevCurrent) => ({
      ...prevCurrent,
      playerTwoCurrent: 0,
    }));
  };

  const checkInputNum = () => {
    if (+inputNum < 50) {
      setInputNum((prevNum) => {
        Math.min((prevNum = 50), 50);
      });
    }
  };
//!PlayerOne Random Num and add to obj
  // const getRandomNumberOne = (cube1,cube2) => {
  //   setGlobalVars((prevTurn) => prevTurn + 1);
  
  //   setGlobalVars((prevVar) => ({
  //     ...prevVar,
  //     playerOneRandomDice1: cube1,
  //     playerOneRandomDice2: cube2,
  //     playerOneCurrent:prevVar.playerOneCurrent+cube1 + cube2
  //   }));
  // };

  console.log(globalVars.playerOneCurrent);
  const getRandomNumberOne = () => {
    let cube1 = Math.floor(Math.random() * 6 + 1);
    let cube2 = Math.floor(Math.random() * 6 + 1);
    setGlobalVars((prevTurn) => prevTurn + 1);
    setGlobalVars((prevVar) => ({
      ...prevVar,
      playerOneRandomDice1: +cube1,
      playerOneRandomDice2: +cube2,
    }));
  };
  //!PlayerTwo Random Num
  const getRandomNumberTwo = () => {
    let cube1 = Math.floor(Math.random() * 6 + 1);
    let cube2 = Math.floor(Math.random() * 6 + 1);
    setGlobalVars((prevTurn) => prevTurn + 1);
    setGlobalVars((prevVar) => ({
      ...prevVar,
      playerOneRandomDice1: cube1,
      playerOneRandomDice2: cube2,
    }));
  };
//! add to current from Dice 1 and Dice 2
  const getPlayerOneCurrent = () => {
    let sum =
      globalVars.playerOneCurrent +
      globalVars.playerOneRandomDice1 +
      globalVars.playerOneRandomDice2;

    setGlobalVars((prevVar) => ({
      ...prevVar,
      playerOneCurrent: +sum,
    }));
  };
  const getPlayerTwoCurrent = () => {
    let sum =
      globalVars.playerTwoCurrent +
      globalVars.playerOneRandomDice1 +
      globalVars.playerOneRandomDice2;

    setGlobalVars((prevVar) => ({
      ...prevVar,
      playerTwoCurrent: sum,
    }));
  };

  // {console.log(getPlayerOneCurrent())}

  return (
    <div className="App">
      
      {isLandingPage && (
        <LandPage inputNum={checkInputNum} pageLanding={LandingPage} btnName />
      )}
      {!isLandingPage && (
        <Game
          getP1Current={globalVars.playerOneCurrent}
          getP2Current={globalVars.playerTwoCurrent}
          playerOneRandomDice1={globalVars.playerOneRandomDice1}
          playerOneRandomDice2={globalVars.playerOneRandomDice2}
          playerOneCurrent = {globalVars.playerOneScore}
          playerOneScore={globalVars.playerOneScore}
          playerTwoScore={globalVars.playerTwoScore}
          rollDice={rollDice}
          
          setIsTurn={setIsHold}
        />
      )}
      {/* {!isLandingPage && <Player name='Player 2'/> } */}

      {/* <Button landing={LandingPage} btnName="HELLO"></Button> */}
    </div>
  );
}

export default App;


 // global={getRandomNumberOne}
          // global2={getRandomNumberTwo}
          // holdTurn={holdTurn}
          // playerOneCurrBtn={getPlayerOneCurrent}
          // playerTwoCurrBtn={getPlayerTwoCurrent}
          // isPlayerTurn={isPlayerTurn}
          // resetPlayerCurr={resetPlayerOneCurr}
          // resetPlayerTwoCurr={resetPlayerTwoCurr}
          // rollDice={rollDice}