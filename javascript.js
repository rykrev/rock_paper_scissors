// This game will simulate a game of Rock Paper Scissors against a computer. 
// The player will input their choice into a prompt through a playerChoice variable.
// The variable will
// The computer will randomly either return "Rock", "Paper", or "Scissors" through a getComputerChoice function in the console each round.
// The result of the getComputerChoice function will equal the computerSelection paramter in the playRound function.
// The playRound function will determine who won the round.
// After each round, return a string through that function that says who won and what move beats the opponent's (computer) move.
// After five rounds, the console will return who won the majority of those in a game() function.


let playerChoice = prompt("What move will you play? Rock, Paper, or Scissors?");

function getComputerChoice() {
    const moves = ["Rock", 
    "Scissors", 
    "Paper"
];

    let move = moves.random();
    return move;
}

console.log(getComputerChoice());