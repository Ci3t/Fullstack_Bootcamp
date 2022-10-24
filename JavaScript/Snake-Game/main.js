import { update as updateSnake, draw as drawSnake,snakeSpeed, getSnakeHead, snakeIntersection} from './snake.js'

import{ update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js';

const gameBoard = document.querySelector('#game-board')

let lastRenderTime = 0;
let gameOver = false
function main(currentTime) {

    if(gameOver){
        if(confirm('You lose Press Ok to Restart')){
            window.location = '/'
        }

        return
       
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondSinceLastRender < 1 / snakeSpeed) return
    
    // console.log('Render');
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
   updateSnake() 
   updateFood()
   checkDeath()
}
function draw() {
    gameBoard.textContent = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

