//Captains log: I pseudocoded my reset function and button because i wanted to complete everything else before
//I could not get each gem to add on to the total with each click. 
//I attempted to create winning/lossing conditions but cannot test them without the players total to actually work


//variables
var wins = 0;
var losses = 0;
var playersInputSpan = document.getElementById("playersInput");
var winsSpan = $("#wins");
var lossesSPan = $("#losses");
var totalSpan = document.getElementById("playerTotal");


//numbers to choose from
var computerChoices = [42, 56, 69, 119, 111, 20, 21, 99, 77];

//run reset function
// reset()


//each button is a random number each round
var randomNumber = Math.floor(Math.random() * computerChoices.length);
console.log(randomNumber);
var computerGuess =computerChoices[randomNumber];
console.log(computerGuess);
$("#playersInput").text(computerGuess);

//player pushes button to generate random #1-12
//then link each button with diff random number
//display number each button is given
var buttonOne = Math.floor(Math.random() * 12) + 1;
var buttonTwo = Math.floor(Math.random() * 12) + 1;
var buttonThree = Math.floor(Math.random() * 12) + 1;
var buttonFour = Math.floor(Math.random() * 12) + 1;

$(document).ready(function () {
var playerTotal = 0;
var playerTotalSpan = $("#playerTotal");

$("#btn-1").on("click", function (){
    playerTotal = buttonOne;
    playerTotalSpan.text(playerTotal);
});
$("#btn-2").on("click", function (){
    playerTotal = buttonTwo;
    playerTotalSpan.text(playerTotal);
});
$("#btn-3").on("click", function (){
    playerTotal = buttonThree;
    playerTotalSpan.text(playerTotal);
});
$("#btn-4").on("click", function (){
    playerTotal = buttonFour;
    playerTotalSpan.text(playerTotal);
    console.log("playerTotalSpan " + playerTotalSpan);
});
//pseudocoded my reset button until everything else is done
//$("#reset").on("click", function () {
//    playerTotal = 0;
//    playerTotalSpan.text(0);
//});
});
//how to get each button to add up?
//make all buttons add to players total score
var sumTotal = buttonOne + buttonTwo + buttonThree + buttonFour;
console.log("This is sumTotal " + sumTotal);

//player number has to equal computers
//wins or losses
if (playerTotal === computerGuess) {
    //player wins
    wins++;
    $("#results").text("YOU WIN!");
    //player loses
} else {
    losses++;
    $("#results").text("YOU LOSE!");
    break;
};
    

//game restarts when player wins/losses
