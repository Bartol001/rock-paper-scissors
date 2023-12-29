function getComputerChoice() {                  //this function gets computer's choice
    let x=Math.floor(Math.random()*3);
    
    if (x===0) {
        return "Rock";
    }
    else if (x===1) {
        return "Paper";
    } 
    else {
        return "Scissors"
    }
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








let computerSelection;
let userSelection;
let computerScore=0;
let userScore=0;

function playRound(computerSelection, userSelection) {


    userSelection=getUserChoice();                            //User selection should be first, so I don't see the computer's choice before making my own
    console.log("User's choice:", userSelection);

    computerSelection=getComputerChoice();
    console.log("Computer's choice:", computerSelection);



    if (computerSelection==="Rock" && userSelection==="Scissors") {
        computerScore=computerScore+1;
        console.log("Rock beats Scissors. Computer wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (computerSelection==="Rock" && userSelection==="Paper") {
        userScore=userScore+1;
        console.log("Paper beats Rock. User wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (computerSelection==="Rock" && userSelection==="Rock") {
        console.log("It is a tie. No one wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (computerSelection==="Paper" && userSelection==="Rock") {
        computerScore=computerScore+1;
        console.log("Paper beats Rock. Computer wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (computerSelection==="Paper" && userSelection==="Paper") {
        console.log("It is a tie. No one wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (computerSelection==="Paper" && userSelection==="Scissors") {
        userScore=userScore+1;
        console.log("Scissors beats Paper. User wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (computerSelection==="Scissors" && userSelection==="Rock") {
        userScore=userScore+1;
        console.log("Rock beats Scissors. User wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (computerSelection==="Scissors" && userSelection==="Paper") {
        computerScore=computerScore+1;
        console.log("Scissors beat Paper. Computer wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
    else if (computerSelection==="Scissors" && userSelection==="Scissors") {
        console.log("It is a tie. No one wins the round.");
        console.log("Computer score:", computerScore);
        console.log("User score:", userScore);
    }
}

function game() {                                 //Keeps playing rounds until someone's score reaches 5 (i.e. until smn. gets 5 round wins)
    while (computerScore<5 && userScore<5) {
        playRound(computerSelection, userSelection);
    }
}



game();



if (computerScore===5) {
    console.log("Game Over. Computer wins the game!");
}
else {
    comsole.log("Game Over. You win the game!");
}




