//---------------This Keyword----------------//

//! this = a reference to the object that executing the current func 

//if its a method -> obj
//if its a function => global (window,global)
//only in global if strict mode is active on global this = undefined 




// const video = {
//     title: 'Bleach',
//     play(){
//         console.log(this);
//     }
// }
// video.play()
// // //?add func to object
// video.stop = function () {
//     console.log(this);
// }
// video.stop()

// // //? constructor func
// function Series(show) {
//     this.show = show
//     console.log(this);
// }

// Series('iron man')

// // //?new keyword → refer to new obj ↓
// const watch = new Series('spiderman')



// //* this with function inside a method 
const player ={
    firstName : "Ronaldinho",
    Teams:['PSG','Barcelona','Milan'],
    playedFor (){
        this.Teams.forEach( function(team) {
            // console.log(team);
            console.log(this.firstName, team);
        })
        
    }
}

player.playedFor()