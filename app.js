
// document.getElementById("demo").onclick = function() {myFunction()};
let userChoice = []
let computerChoice = []

let userScore = [0]
let computerScore = [0]
let winner = []
function tie(){
winner = "tie"
    
}
function userWins(){
    userScore ++
    winner = "player wins"
    
}
function computerWins(){
    computerScore ++
    winner = "computer wins"

}

function userRock() {
    userChoice = "rock"
    console.log(userChoice)
    // console.log(userChoice)
    // document.getElementById("rock").innerHTML = "clicked";
    getComputerChoice();
    
};
function userPaper() {
    userChoice = "paper"
    console.log(userChoice)
    // console.log(userChoice)
    // document.getElementById("rock").innerHTML = "clicked";
    getComputerChoice();
    
};
function userScissors() {
    userChoice = "scissors"
    console.log(userChoice)
    // console.log(userChoice)
    // document.getElementById("rock").innerHTML = "clicked";
    getComputerChoice();
    
};

function getComputerChoice(){
//    let a = 1
//    console.log(a)
    let = computerChoice = Math.floor(Math.random() * 3)
    // console.log(computerChoice)
    if (computerChoice === 0){
        computerChoice = "rock"
    }if (computerChoice === 1){
        computerChoice = "paper"
    }if (computerChoice === 2){
        computerChoice = "scissors"
    }
    console.log(computerChoice)
    playRound();

}
function updateScore(){
    document.getElementById("userScore").innerHTML = "user score :" + userScore;
    document.getElementById("computerScore").innerHTML = "computer score:" + computerScore;
    document.getElementById("winner").innerHTML = winner;
}

function playRound(){
    let choice = []
    if (userChoice == "rock" && computerChoice == "rock"){
        
        choice = "rock and rock"
        console.log(choice)
        tie();
    }if (userChoice == "rock" && computerChoice == "paper"){
        
        choice = "rock and paper"
        console.log(choice)
        computerWins();
    }if (userChoice == "rock" && computerChoice == "scissors"){
        
        choice = "rock and scissors"
        console.log(choice)
        userWins();
    }if (userChoice == "paper" && computerChoice == "rock"){
        
        choice = "paper and rock"
        console.log(choice)
        userWins();
    }if (userChoice == "paper" && computerChoice == "paper"){
        
        choice = "paper and paper"
        console.log(choice)
        tie();
    }if (userChoice == "paper" && computerChoice == "scissors"){
        
        choice = "paper and scissors"
        console.log(choice)
        computerWins();
    }if (userChoice == "scissors" && computerChoice == "rock"){
        
        choice = "scissors and rock"
        console.log(choice)
        computerWins();
    }if (userChoice == "scissors" && computerChoice == "paper"){
        
        choice = "scissors and paper"
        console.log(choice)
        userWins();
    }if (userChoice == "scissors" && computerChoice == "scissors"){
        
        choice = "scissors and scissors"
        console.log(choice)
        tie();
    }
    updateScore();
    console.log(userScore, computerScore)
    // console.log("playing")
}



// console.log(userChoice);
