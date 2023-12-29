let computerSelection;
let userSelection;

let roundWinner;

let computerScore=0;
let userScore=0;

game();

if (computerScore===5) {
    console.log("Game Over. Computer wins the game!");
}
else {
    console.log("Game Over. You win the game!");
}

restartGame();







function game() {                                 //Keeps playing rounds until someone's score reaches 5 (i.e. until smn. gets 5 round wins)
    while (computerScore<5 && userScore<5) {
        playRound(computerSelection, userSelection);
    }
}





function playRound(computerSelection, userSelection) {        /* this function plays one round
                                                             (i.e. gets computer's and user's choice, "compares" them and decides the outcome of the round (possible outcomes are:
                                                                computer is the round winner, user is the round winner, it is a tie), then calls a function that displays the score and 
                                                                the appropriate message) */


    userSelection=getUserChoice();                            //User selection should be first, so I don't see the computer's choice before making my own
    console.log("User's choice:", userSelection);

    computerSelection=getComputerChoice();
    console.log("Computer's choice:", computerSelection);




    if (computerSelection===userSelection) {
            roundWinner="tie"; 
    }
    else if (
        (computerSelection==="Rock" && userSelection==="Paper") ||
        (computerSelection==="Paper" && userSelection==="Scissors") ||
        (computerSelection==="Scissors" && userSelection==="Rock")
        ) {
        roundWinner="user";
        userScore=userScore+1;
    }
    else {
        roundWinner="computer";
        computerScore=computerScore+1;
    }

    showScore(roundWinner, computerSelection, userSelection);
}





function getUserChoice() {                           //this function gets the user's choice
    let userChoice=prompt("Enter \"Rock\", \"Paper\", or \"Scissors\":", "");
    let userChoiceUppercase=userChoice.toUpperCase();                   //in case the user inputs all capital, or all lowecase letters; this way I make the input case insensitive

    while (true) {                                //keep prompting for a "weapon of choice" until the user inputs a valid name for one
    if (userChoiceUppercase==="ROCK") {
        return "Rock";                           //I don't need to add "break" statement, because "return" statement stops function execution
    }
    else if (userChoiceUppercase==="PAPER") {
        return "Paper";
    }
    else if (userChoiceUppercase==="SCISSORS") {
        return "Scissors";
    }
    else {
        alert("Invalid name. Please enter the correct name.");
        userChoice=prompt("Enter \"Rock\", \"Paper\", or \"Scissors\":", "");
        userChoiceUppercase=userChoice.toUpperCase();
    }
    }
}





function getComputerChoice() {                  //this function gets computer's choice
    let randomNum=Math.floor(Math.random()*3);
    
    if (randomNum===0) {
        return "Rock";
    }
    else if (randomNum===1) {
        return "Paper";
    } 
    else {
        return "Scissors"
    }
}





function showScore(roundWinner, computerSelection, userSelection) {
    if (roundWinner==="tie") {
        console.log("It is a tie.\nNo one wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (roundWinner==="computer") {
        console.log(`${userSelection} is beaten by ${computerSelection}.\nComputer wins the round.`);
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else {                                                           //else if (roundWinner==="user")
        console.log(`${userSelection} beats ${computerSelection}.\nUser wins the round.`);
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
}





function restartGame() {
    let newGame=confirm("Would you like to play again?");

    if (newGame===true) {
        computerScore=0;
        userScore=0;
        game();              //play the game again
    }
}











