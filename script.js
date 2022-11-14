const cardsHearts = ["Ah", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "Jh", "Qh", "Kh"]
const cardsDiamonds = ["Ad", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "Jd", "Qd", "Kd"]
const cardsSpades = ["As", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "Js", "Qs", "Ks"]
const cardsClubs = ["Ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9h", "10h", "Jh", "Qh", "Kh"]

const fullDeck = cardsHearts.concat(cardsDiamonds, cardsClubs, cardsSpades)

// Shuffle and deal hands

function shuffleDeck (fullDeck) {

    var j, x, i;
        
    for (i = fullDeck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = fullDeck[i];
            fullDeck[i] = fullDeck[j];
            fullDeck[j] = x;
        }
        
        // console.log(fullDeck)

        dealHands(fullDeck);
    }


function dealHands(shuffledCards) {
       
    let playerHand = shuffledCards.slice(0,6);
    let computerHand = shuffledCards.slice(6,12);
    let remainingCards = shuffledCards.slice(12,52);


    console.log(playerHand, playerHand.length)
    console.log(computerHand, computerHand.length)
    console.log(remainingCards, remainingCards.length)

}

shuffleDeck(fullDeck)
    

