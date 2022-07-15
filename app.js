// document.getElementById("demo").onclick = function() {myFunction()};
function userInput(x) {
    let userChoice = x
    console.log(userChoice) 
    getComputerChoice() 
};

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    console.log(computerChoice)
}

function playRound(){
    console.log("playing")
    console.log(userInput())
    console.log(getComputerChoice())
}

//console.log(userChoice);

