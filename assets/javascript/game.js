let wins = 0;
let losses = 0;
let compChoice;
let btnOne;
let btnTwo;
let btnThree;
let btnFour;
let playerTotal = 0;
const playersInputSpan = document.getElementById("playersInput");
const winsSpan = $("#wins");
const lossesSPan = $("#losses");
const playerTotalSpan = $("#playersInput");
const compNum = $("#compsChoice");
const b1 = document.getElementById("btn-1");
const b2 = document.getElementById("btn-2");
const b3 = document.getElementById("btn-3");
const b4 = document.getElementById("btn-4");

//Comp generates random number
function randNum (min, max){
    return Math.floor(Math.random() * (max - min) + min);
} 

compChoice = randNum(50,100);
compNum.text(compChoice);

//Generate random numbers for buttons
btnOne = randNum(1, 12);
btnTwo = randNum(1, 12);
btnThree = randNum(1, 12);
btnFour = randNum(1, 12);
console.log("This is btn1 " + btnOne);
console.log("This is btn2 " + btnTwo);
console.log("This is btn3 " + btnThree);
console.log("This is btn4 " + btnFour);

//assigning values to btns
b1.value = btnOne;
b2.value = btnTwo;
b3.value = btnThree;
b4.value = btnFour;

$(document).ready(function () {
$("button").on("click", function(){
    //convert string value to int
    playerTotal += parseInt(this.value); 
    playerTotalSpan.text(playerTotal);
    score();
});

function score(){
//win and lose logic
if (playerTotal > compChoice) {
    losses++;
    lossesSPan.text(losses);  
    alert("Oh no! You're crystals spilled all over the place.");

    compChoice = randNum(50,100);
    compNum.text(compChoice);
    
    return playerTotal = 0;

} else if (playerTotal === compChoice){
    //player wins
    wins++;
    winsSpan.text(wins);
    alert("Congrats, You didn't spill any crystals!");

    compChoice = randNum(50,100);
    compNum.text(compChoice);
    
    return playerTotal = 0;
} else{
    return;
};
}

//resets game
$("#reset").on("click", function () {
   playerTotal = 0;
   playerTotalSpan.text(0);
   location.reload();
});

});