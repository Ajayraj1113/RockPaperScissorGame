const choice = document.querySelectorAll(".choices")
const score = document.querySelector("#score")
const result = document.querySelector("#result")
const restart  = document.querySelector("#restart")
// const button =document.querySelector(".restart-btn")
const modal = document.querySelector(".modal")



const scoreboard = {
    player : 0,
    computer : 0
}

// choice.forEach(choice => choice.addEventListener("click", playGame))


choice.forEach(function(choice){
    choice.addEventListener("click",playGame)
})


function playGame(e){
    restart.style.display = "inline-block"
    const playerchoice = e.target.id
    const computerchoice = getComputerChoice()
    let winner = getWinner(playerchoice,computerchoice)
    showWinner(winner,computerchoice)
    

}

function getComputerChoice(){
    const randomnum = (Math.random()*100)

    if(randomnum<33)
    return 'rock'

    else if (randomnum>=33 && randomnum<=66)
    return 'paper'

    else
    return 'scissors'
}

function getWinner(p,c){
    if(p===c)
    return'draw'
    else if(p==='rock'){
        if(c==='paper')
        return 'computer'

        else  return 'player'
    }
    else if(p==='paper'){
        if(c==='scissors')
        return 'computer'
        else
        return 'player'
    }
    else if(p==='scissors'){
        if(c==='rock')
        return 'computer'
        else
        return 'player'
    }
}

function showWinner(winner,computerchoice){
    if(winner==='player'){
        scoreboard.player++
        result.innerHTML=`
        <h1 class="text-win">You Won</h1>
        <i class=" fas fa-hand-${computerchoice} fa-10x">
        `
    }
    else if(winner==='computer'){
        scoreboard.computer++
        result.innerHTML=`
        <h1 class="text-lose">You Lose</h1>
        <i class=" fas fa-hand-${computerchoice} fa-10x">
        `
     }
     else{
            
            result.innerHTML=`
            <h1>It's a  Draw</h1>
            <i class=" fas fa-hand-${computerchoice} fa-10x">
            `
         }

         score.innerHTML=`
         <p>player:${scoreboard.player}</p>
         <p>computer:${scoreboard.computer}</p>
         `
}

 
    restart.addEventListener("click",getRestart)
    function getRestart(e){
    console.log("hi....")
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML=`
         <p>player:${scoreboard.player}</p>
         <p>computer:${scoreboard.computer}</p>
         `
    }

