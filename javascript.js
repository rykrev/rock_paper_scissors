// This game will simulate a game of Rock Paper Scissors against a computer. 
// The player will input their choice into a prompt through a playerChoice variable.
// The computer will randomly either return "Rock", "Paper", or "Scissors" through a getComputerChoice function in the console each round.
// The result of the getComputerChoice function will equal the computerSelection paramter in the playRound function.
// The playRound function will determine who won the round.
// After each round, return a string through that function that says who won and what move beats the opponent's (computer) move.
// After five rounds, the console will return who won the majority of those in a game() function.

let playerChoice;

let roundNumber = 0;
let playerWins = 0;
let computerWins = 0;

const data = document.querySelector(".data")
const scoreboard = document.querySelector(".scoreboard")
const results = document.querySelector(".results")
const match = document.querySelector(".match")

const CHOICES = document.querySelectorAll(".choice");

const ROCKCHOICE = document.querySelector(".rock");
const PAPERCHOICE = document.querySelector(".paper");
const SCISSORSCHOICE = document.querySelector(".scissors");

CHOICES.forEach((choice) => {
    choice.addEventListener("click", (e) => {
    if (choice.getAttribute("id") === "rock") {
        playerChoice = "Rock";
        round(playerChoice, getComputerChoice());
    } else if (choice.getAttribute("id") === "scissors") {
        playerChoice = "Scissors";
        round(playerChoice, getComputerChoice());
    } else if (choice.getAttribute("id") === "paper") {
        playerChoice = "Paper";
        round(playerChoice, getComputerChoice());
    }
    })
});

if (playerChoice === null) {
        console.log("Refresh the page if you want to start again. For now, goodbye!")
        throw ''
    }

function getComputerChoice() {
        const moves = ["Rock", 
        "Scissors", 
        "Paper"
];

    let i = Math.floor(Math.random(moves) * 3);
    let move = moves[i];
    return move;
}

function round(playerSelection, computerSelection) {
        
    if (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") {
            console.log("You did not enter a valid input. Please try again.")
            return;
    } else {
            console.log(`Your move is ${playerSelection[0].toUpperCase() + playerSelection.substr(1, playerSelection.length - 1)}!`);
    }

    function compMove(playerSelection, computerSelection) {
        if (computerSelection === "Rock" && playerSelection.toLowerCase() == "rock") {
            console.log(`The computer also played ${computerSelection}!`);
        } else if (computerSelection === "Scissors" && playerSelection.toLowerCase() == "scissors") {
            console.log(`The computer also played ${computerSelection}!`);
        } else if (computerSelection === "Paper" && playerSelection.toLowerCase() == "paper") {
            console.log(`The computer also played ${computerSelection}!`);
        } else {
            console.log(`The computer played ${computerSelection}!`);
        }
    }
        
    compMove(playerSelection, computerSelection);

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        match.textContent = `Match Results: It's a tie! Both you and the computer played ${playerSelection}!`
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Scissors") {
        match.textContent = "Match Results: You win! Rock beats Scissors!";
        playerWins++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Paper") {
        match.textContent = "Match Results: You lose! Paper beats Rock!";
        computerWins++;
    }

    if (playerSelection.toLowerCase() === "scissors" && computerSelection == "Paper") {
        match.textContent = "Match Results: You win! Scissors beats Paper!";
        playerWins++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "Rock") {
        match.textContent = "Match Results: You lose! Rock beats Scissors!";
        computerWins++;
    }

    if (playerSelection.toLowerCase() === "paper" && computerSelection == "Rock") {
        match.textContent = "Match Results: You win! Paper beats Rock!"; 
        playerWins++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Scissors") {
        match.textContent = "Match Results: You lose! Scissors beats Paper!";
        computerWins++;
    }

    if (playerWins == 0) {
        results.textContent = "You currently have no wins.";
        } else if (playerWins == 1) {
        results.textContent = `You currently have ${playerWins} win.`;
        } else {
        results.textContent = `You currently have ${playerWins} wins.`;
        }


    if (computerWins == 0) {
    results.textContent = "The computer currently has no wins.";
    } else if (computerWins == 1) {
    results.textContent = `The computer currently has ${computerWins} win.`;
    } else {
    results.textContent = `The computer currently has ${computerWins} wins.`;
    }


    roundNumber++;
    return roundNumber;
}   

    // function game(roundNum) {
    //     if (roundNum % 5 == 0) {
    //         console.log("Game completed!");
    //         if (playerWins > computerWins) {
    //                 console.log("Looks like you won this game! Nice job! Now why don't you try again...");
    //             } else if (playerWins < computerWins) {
    //                 console.log("The computer won! You lost to an algorithm. Why don't you try again?");
    //             } else {
    //                 console.log("You and the computer tied. You should consider yourself special, this doesn't usually happen. Try again?");
    //             }
    //     }

    //     if (roundNum == 1) {
    //         console.log(`${roundNum} round completed.`);
    //         console.log(`Keep playing for ${5 - roundNum} more rounds to complete a game.`);
    //     } else if (roundNum == 4) {
    //         console.log(`${roundNum} rounds completed.`);
    //         console.log(`Keep playing for ${5 - roundNum} more round to complete a game.`);
    //     } else if (roundNum < 5) {
    //         console.log(`${roundNum} rounds completed.`);
    //         console.log(`Keep playing for ${5 - roundNum} more rounds to complete a game.`);
    //     } else if (roundNum === 5) {
    //         roundNum = 0;
    //         playerWins = 0;
    //         computerWins = 0;
    //     }
    // }
    
scoreboard.appendChild(match);
data.appendChild(scoreboard);
data.appendChild(results);
