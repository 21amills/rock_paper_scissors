
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.getElementById("reset");


function getComputerChoice () {
    const choices= ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices [randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    if (letter == "s") return "Scissors";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML = convertToWord(user) + " beats "+ convertToWord(computer) +". You WIN";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('green-glow')}, 300);
    console.log(computerScore);
console.log(userScore);
}

function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML = convertToWord(user) + " loses to "+ convertToWord(computer) +". You LOSE";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('red-glow')}, 300);
    console.log(computerScore);
console.log(userScore);
}

function draw(user, computer){
    
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML = convertToWord(user) + " ties "+ convertToWord(computer) +". It's a DRAW!";
    document.getElementById(user).classList.add('yellow-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('yellow-glow')}, 300);
    console.log(computerScore);
console.log(userScore);

}




function game (userChoice){
    const computerChoice = getComputerChoice();
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);

    switch (userChoice + computerChoice) {
        case"rs":
        case"pr":
        case"sp":
            console.log("USER WINS!");
            win(userChoice, computerChoice);
            break;
        case"rp":
        case"ps":
        case"sr":
            console.log("USER LOSES!");
            lose(userChoice, computerChoice);
            break;
        case"rr":
        case"pp":
        case"ss":
            console.log("DRAW!");
            draw(userChoice, computerChoice);
            break;



    }




}

function resetScore(userScore, computerScore){
//var userScore=0;
//var computerScore=0;
//userScore_span.innerHTML=userScore;
//computerScore_span.innerHTML=computerScore;
//console.log(computerScore);
//console.log(userScore);
location.reload();
return false;
}


function main() {
    rock_div.addEventListener('click' , function() {
        game("r");
    })

    paper_div.addEventListener('click' , function() {
        game("p");
    })

    scissors_div.addEventListener('click' , function() {
        game("s");
    })

    reset_div.addEventListener('click' , function() {
        resetScore();
    })

        
}



main();


    


