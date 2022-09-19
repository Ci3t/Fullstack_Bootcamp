

const score = () => {
    // team mike wins
    // let teamJohn = 89 + 120 + 103;
    // let teamMike = 116 + 94 + 123;  
    // team john wins
    // let teamJohn = 89 + 120 + 133;
    // let teamMike = 116 + 94 + 123;
    // DRAW
    let teamJohn = 89 + 120 + 133;
    let teamMike = 116 + 94 + 132;
    if (teamJohn > teamMike){
        console.log(`Team John wins Total Points: 
        Team John: ${teamJohn}
        Team Mike: ${teamMike}`)
    }else if (teamJohn < teamMike){
        console.log(`Team Mike wins Total Points: 
        Team John: ${teamJohn}
        Team Mike: ${teamMike}`)
    }else{
        console.log(`DRAW!! Total Points: 
        Team John: ${teamJohn}
        Team Mike: ${teamMike}`)
    }
}
const score2 = () => {
    // team mike wins
    let teamJohn = 89 + 120 + 103;
    let teamMike = 116 + 94 + 123;  
    let teamMary = 97 + 134 + 105;
    // team john wins
    // let teamJohn = 89 + 120 + 133;
    // let teamMike = 116 + 94 + 123;
    // let teamMary = 97 + 134 + 105;
    // DRAW
    // let teamJohn = 89 + 120 + 133;
    // let teamMike = 116 + 94 + 132;
    // let teamMary = 97 + 134 + 105;
    if (teamJohn > teamMike || teamJohn > teamMary){
        console.log(`Team John wins Total Points: 
        Team John: ${teamJohn}
        Team Mike: ${teamMike}
        Team Mary: ${teamMary}`)
    }else if (teamJohn < teamMike > teamMary){
        console.log(`Team Mike wins Total Points: 
        Team John: ${teamJohn}
        Team Mike: ${teamMike}
        Team Mary: ${teamMary}`)
    }else if (teamJohn < teamMary || teamMike < teamMary){
        console.log(`Team Mary wins Total Points: 
        Team John: ${teamJohn}
        Team Mike: ${teamMike}
        Team Mary: ${teamMary}`)
       } else{
        console.log(`DRAW!! Total Points: 
        Team John: ${teamJohn}
        Team Mike: ${teamMike}
        Team Mary: ${teamMary}`)
    }
}

score();
score2();