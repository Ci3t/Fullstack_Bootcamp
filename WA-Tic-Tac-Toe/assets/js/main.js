
const result = document.querySelector(".result");
const board = document.querySelector("board");
const box = document.querySelectorAll(".box");
const four = document.querySelector(".four4");

const resetButton = document.querySelector("button");

const boxArray = Array.from(box);
let won = false;
let tie = false;
const player1 = "X";
const player2 = "O";


let playerTurn = player1;



let options = new Array(9).fill(null);
let checkedPosition = []


let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

]

boardDraw();
// fourDraw();

function boardDraw() {
  boxArray.forEach((box, index) => {
    let border = "";

    if (index < 3) {
      border += "border-bottom: 2px solid white;";
    }
    if (index % 3 === 0) {
      border += "border-right: 2px solid white;";
    }
    if (index % 3 === 2) {
      border += "border-left: 2px solid white;";
    }
    if (index > 5) {
      border += "border-top: 2px solid white;";
    }

    box.style = border;



  });
}
// four.addEventListener('click',fourDraw())

// function fourDraw() {
//   boxArray.forEach((box, index) => {
//     let border = "";

//     if (index < 3) {
//       border += "border-bottom: 2px solid white;";
//     }
//     if (index % 3 === 0) {
//       border += "border-right: 2px solid white;";
//     }
//     if (index % 3 === 2) {
//       border += "border-left: 2px solid white;";
//     }
//     if (index > 5) {
//       border += "border-top: 2px solid white;";
//     }

//     box.style = border;



//   });
// }



const startGame = () => {
  boxArray.forEach(box => box.addEventListener('click', boxClick));





}
// function autoClick(){


//           // console.log(boxArray);
//           // let aiBox = document.querySelectorAll(".box")[0].textContent = '';
//           // console.log(aiBox);

//           // if(playerTurn === player2){

//             let randomNumber = getRandomPosition();
//             // boxId = randomNumber
//             options[randomNumber] = player2;
//             console.log( `Options : ${options}` );
//             document.querySelectorAll(".box")[randomNumber].textContent = player2;
//             console.log( `E Target : ${e.target.textContent}` );

//             console.log(`RandomNumber: ${randomNumber}`)

//           // }
//           console.log('zamas');
// }

function boxClick(e) {
  if (won === true) {
    return;
  }


  let boxId = e.target.id
  // console.log(`box id ${boxId}`);

  // checkedPosition.push(parseInt([boxId]))
  // console.log(`Position : ${checkedPosition}`);


  if (options[boxId]) return;


  options[boxId] = playerTurn;
  e.target.textContent = playerTurn;




  if (playerWon() !== false) {
    result.textContent = `${playerTurn} Won!!!`
    let win = playerWon()
    won = true;
    win.forEach(box => boxArray[box].style.backgroundColor = 'Darkorange')

    tie = false;
    return;


  } else if (!options.includes(null)) {
    result.textContent = `DRAW!!!!!!!`
    return;

  }

  // else{

  playerTurn = playerTurn === player1 ? player2 : player1;
  result.textContent = `${playerTurn} Turn!!`

  // }





}

// function getRandomPosition (){

//   // if(checkedPosition.includes(randomNumber)){
//        let randomNumber1 = 0;



//     do {
//       randomNumber1 = Math.floor(Math.random()*8)  
//     }while (
//       checkedPosition.includes(randomNumber1)
//     )
//     return randomNumber1

//   // }


// }

function playerWon(e) {


  for (const cond of winning) {
    let [a, b, c] = cond;

    if (options[a] && (options[a] === options[b] && options[a] === options[c])) {
      return [a, b, c]
    }


  }
  return false
}


resetButton.addEventListener('click', reset);
function reset() {

  options.fill(null)
  won = false
  boxArray.forEach(box => {
    box.textContent = ''
    box.style.backgroundColor = ''

  })
  result.textContent = 'Tic Tac Toe'
}




startGame()