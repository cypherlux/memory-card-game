
const cards = document.querySelectorAll(".card")
let matchedPairs = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard() {
    console.log('flipCard was executed');
}

function shuffleCards() {
    matchedPairs = 0; // reset matchedPairs variable to 0
    disableDeck = false; // reset disableDeck boolean to false
    cardOne = cardTwo =""; // reset cardOne and cardTwo variables to empty string
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]; // create an array of the image numbers, 1-8, twice

arr.sort(() => Math.random() > 0.5 ? 1 : -1); //randomly sorts the array