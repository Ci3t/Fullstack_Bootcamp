
const time = document.querySelector('.watch .time')

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let secs = 0;
let interval = null;

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)

//time update 
let startTime = Date.now();
function timer() {
    secs++;
   let  elapsedTime  = Date.now() - startTime
   
   let hr =  Math.floor(secs / 3600)
   let seconds = Math.floor((elapsedTime / 1000 )%60)
    let mins = Math.floor((elapsedTime / (1000* 60) )%60)

    if(hr < 10) hr = '0' + hr;
    if(seconds < 10) seconds = '0' + seconds;
    if(mins < 10) mins = '0' + mins;

  
    time.textContent = `${hr}:${mins}:${seconds}`;
}

function start() {
    if (interval){
        return
    }

    interval = setInterval(timer,100)
}
function stop() {
    clearInterval(interval)
        interval = null
   

}

function reset() {
        stop()
        secs = 0;
        time.textContent = '00:00:00'
}