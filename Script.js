const btnDice = document.getElementById("btnRoll");
const pointsDiv = document.getElementById("points");
const diceNumber = document.getElementById("diceNum");
const btnFreeze = document.getElementById("btnFreeze");
const pointTotal = document.getElementById("totalPoints");
const roundsDiv = document.getElementById("roundsTotal");
const winDiv = document.getElementById("h1Element")
const btnNewGame = document.getElementById("btnNewGame")
const nameInput = document.getElementById("nameInput")
const btnSaveName = document.getElementById("saveName")
const header = document.getElementById("header")
const form = document.getElementById("form")

let points = 0;
let totalRounds = 0;
let totalPoints = 0;
let playerName = "";

function newGame(){
    points = 0;
    totalRounds = 0;
    totalPoints = 0;
    btnDice.disabled = false
    btnFreeze.disabled = false
    pointsDiv.innerText = "Points this round: 0"
    diceNumber.innerText = `Dice: - `
    pointTotal.innerText = "Total Points: 0"
    roundsDiv.innerText = "Round: 0"
    winDiv.innerText = ""
    btnNewGame.setAttribute("hidden", "hidden")
    winDiv.setAttribute("hidden", "hidden")
    btnDice.removeAttribute("hidden", "hidden")
    btnFreeze.removeAttribute("hidden", "hidden")

}

function rollTheDice(){
    const rollDice = Math.floor(Math.random() * 6) +1;
    diceNumber.innerText = `Dice: ${rollDice}`;
    points = points + rollDice;
    pointsDiv.innerText = `Points this round: ${points} `;
    
    if(rollDice === 1){
        totalRounds++;
        roundsDiv.innerText = `Round: ${totalRounds}`;
        points = 0;
        pointsDiv.innerText = `Points this round: ${points}`;
    }
    
} 

function freezeRound(){
    totalPoints = totalPoints + points;
    
    pointTotal.innerText = `Total Points: ${totalPoints}`;
    
    points = 0;
    pointsDiv.innerText = `Points this round: ${points}`;
    diceNumber.innerText = `Dice: - `;
    totalRounds++;
    roundsDiv.innerText = `Round: ${totalRounds}`;
    
    if(totalPoints >= 100){
        btnDice.disabled = true
        btnFreeze.disabled = true
        pointsDiv.innerText = "Round: 0"
        roundsDiv.innerText = "Points this round: 0"
        diceNumber.innerText = "Dice: 0"
        winDiv.innerText = `Grattis ${playerName}! Du klarade spelet på ${totalRounds} försök!`
        btnNewGame.removeAttribute("hidden", "Hidden")
        winDiv.removeAttribute("hidden", "hidden")
    }
    
}

function saveName(event){
    event.preventDefault()
    playerName = nameInput.value
    header.innerText = `Player Name: ${playerName}`
    nameInput.setAttribute("hidden", "hidden")
    btnSaveName.setAttribute("hidden", "hidden")
    newGame()
}

function hideButtons(){
    btnDice.setAttribute("hidden", "hidden")
    btnFreeze.setAttribute("hidden", "hidden")
    btnNewGame.setAttribute("hidden", "hidden")
}

btnFreeze.addEventListener("click", freezeRound);
btnDice.addEventListener("click", rollTheDice);
btnNewGame.addEventListener("click", newGame)
form.addEventListener("submit", saveName)
addEventListener("DOMContentLoaded", (event) => hideButtons())

