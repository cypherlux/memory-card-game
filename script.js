
const cards = document.querySelectorAll(".card")
let matchedPairs = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(evt) {
    console.log('flipCard was executed');
    console.log(evt);
    const clickedCard = evt.target;
    if (cardOne !== clickedCard && !disableDeck) { 
        clickedCard.classList.add("flip"); 
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src;
        let cardTwoImg = cardTwo.querySelector(".back-view img").src; 
        matchCards(cardOneImg, cardTwoImg);
      }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matchedPairs++;
        if (matchedPairs == 8) {
            console.log('YOU WIN :D');
            return;
            }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        disableDeck = false;
        return;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
      }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
        return;
    }, 1200);
}


function shuffleCards() {
    matchedPairs = 0; // reset matchedPairs variable to 0
    disableDeck = false; // reset disableDeck boolean to false
    cardOne = cardTwo =""; // reset cardOne and cardTwo variables to empty string
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]; // create an array of the image numbers, 1-8, twice
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); //randomly sorts the array

    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
});
}



shuffleCards();