var pDice = document.getElementById("pDice");
var pCannonball = document.getElementById("pCannonball");
var pSling = document.getElementById("pSling");
var pMemory = document.getElementById("pMemory");
var pQuiz = document.getElementById("pQuiz");
var pLabyrinth = document.getElementById("pLabyrinth");

var divDice = document.getElementById("dice");
var divCannonball = document.getElementById("cannonball");
var divSling = document.getElementById("sling");
var divMemory = document.getElementById("memory");
var divQuiz = document.getElementById("quiz");
var divLabyrinth = document.getElementById("labyrinth");

pDice.addEventListener("mouseover", mOverDice, false);
pDice.addEventListener("mouseout", mOutDice, false);
pDice.addEventListener("click", mClickDice, false);

pCannonball.addEventListener("mouseover", mOverCannonball, false);
pCannonball.addEventListener("mouseout", mOutCannonball, false);
pCannonball.addEventListener("click", mClickCannonball, false);

/*pSling.addEventListener("mouseover", mOverSling, false);
 pSling.addEventListener("mouseout", mOutSling, false);
 pSling.addEventListener("click", mClickSling, false);

 pMemory.addEventListener("mouseover", mOverMemory, false);
 pMemory.addEventListener("mouseout", mOutMemory, false);
 pMemory.addEventListener("click", mClickMemory, false);

 pQuiz.addEventListener("mouseover", mOverQuiz, false);
 pQuiz.addEventListener("mouseout", mOutQuiz, false);
 pQuiz.addEventListener("click", mClickQuiz, false);

 pLabyrinth.addEventListener("mouseover", mOverLabyrinth, false);
 pLabyrinth.addEventListener("mouseout", mOutLabyrinth, false);
 pLabyrinth.addEventListener("click", mClickLabyrinth, false);*/

function mOverDice(){
    pCannonball.style.textShadow = "none";
    pSling.style.textShadow = "none";
    pMemory.style.textShadow = "none";
    pQuiz.style.textShadow = "none";
    pLabyrinth.style.textShadow = "none";

    pDice.addEventListener("mouseout", mOutDice, false);

    divDice.style.display = "block";
    divCannonball.style.display = "none";
    divSling.style.display = "none";
    divMemory.style.display = "none";
    divQuiz.style.display = "none";
    divLabyrinth.style.display = "none";
}

function mOutDice(){
    divDice.style.display = "none";
}

function mClickDice() {
    pDice.style.textShadow = "3px 3px 5px #FF0000";

    divDice.style.display = "block";

    pDice.removeEventListener("mouseout", mOutDice, false);
}

function mOverCannonball(){
    pDice.style.textShadow = "none";
    pSling.style.textShadow = "none";
    pMemory.style.textShadow = "none";
    pQuiz.style.textShadow = "none";
    pLabyrinth.style.textShadow = "none";

    pCannonball.addEventListener("mouseout", mOutCannonball, false);

    divDice.style.display = "none";
    divCannonball.style.display = "block";
    divSling.style.display = "none";
    divMemory.style.display = "none";
    divQuiz.style.display = "none";
    divLabyrinth.style.display = "none";
}

function mOutCannonball(){
    divCannonball.style.display = "none";
}

function mClickCannonball() {
    pCannonball.style.textShadow = "3px 3px 5px #FF0000";

    divCannonball.style.display = "block";

    pCannonball.removeEventListener("mouseout", mOutCannonball, false);
}

function playDice(){
    window.open("dice/dice.html");
}
