//===========================================================  DECK OF CARDS {suit, type, value, order, topcard, image1, image 2} ================================================================//
const cardsHearts = [
    {suit: "Hearts", type: "Ace", value: 1, order:1, topcard: false},
    {suit: "Hearts", type: "Two", value: 2, order:2, topcard: false},
    {suit: "Hearts", type: "Three", value: 3, order:3, topcard: false},
    {suit: "Hearts", type: "Four", value: 4, order:4, topcard: false},
    {suit: "Hearts", type: "Five", value: 5, order:5, topcard: false},
    {suit: "Hearts", type: "Six", value: 6, order:6, topcard: false},
    {suit: "Hearts", type: "Seven", value: 7, order:7, topcard: false},
    {suit: "Hearts", type: "Eight", value: 8, order:8, topcard: false},
    {suit: "Hearts", type: "Nine", value: 9, order:9, topcard: false},
    {suit: "Hearts", type: "Ten", value: 10, order:10, topcard: false},
    {suit: "Hearts", type: "Jack", value: 10, order:11, topcard: false},
    {suit: "Hearts", type: "Queen", value: 10, order:12, topcard: false},
    {suit: "Hearts", type: "King", value: 10, order:13, topcard: false},
     ]
const cardsDiamonds = [
    {suit: "Diamonds", type: "Ace", value: 1, order:1, topcard: false},
    {suit: "Diamonds", type: "Two", value: 2, order:2, topcard: false},
    {suit: "Diamonds", type: "Three", value: 3, order:3, topcard: false},
    {suit: "Diamonds", type: "Four", value: 4, order:4, topcard: false},
    {suit: "Diamonds", type: "Five", value: 5, order:5, topcard: false},
    {suit: "Diamonds", type: "Six", value: 6, order:6, topcard: false},
    {suit: "Diamonds", type: "Seven", value: 7, order:7, topcard: false},
    {suit: "Diamonds", type: "Eight", value: 8, order:8, topcard: false},
    {suit: "Diamonds", type: "Nine", value: 9, order:9, topcard: false},
    {suit: "Diamonds", type: "Ten", value: 10, order:10, topcard: false},
    {suit: "Diamonds", type: "Jack", value: 10, order:11, topcard: false},
    {suit: "Diamonds", type: "Queen", value: 10, order:12, topcard: false},
    {suit: "Diamonds", type: "King", value: 10, order:13, topcard: false},
     ]
const cardsSpades = [
    {suit: "Spades", type: "Ace", value: 1, order:1, topcard: false},
    {suit: "Spades", type: "Two", value: 2, order:2, topcard: false},
    {suit: "Spades", type: "Three", value: 3, order:3, topcard: false},
    {suit: "Spades", type: "Four", value: 4, order:4, topcard: false},
    {suit: "Spades", type: "Five", value: 5, order:5, topcard: false},
    {suit: "Spades", type: "Six", value: 6, order:6, topcard: false},
    {suit: "Spades", type: "Seven", value: 7, order:7, topcard: false},
    {suit: "Spades", type: "Eight", value: 8, order:8, topcard: false},
    {suit: "Spades", type: "Nine", value: 9, order:9, topcard: false},
    {suit: "Spades", type: "Ten", value: 10, order:10, topcard: false},
    {suit: "Spades", type: "Jack", value: 10, order:11, topcard: false},
    {suit: "Spades", type: "Queen", value: 10, order:12, topcard: false},
    {suit: "Spades", type: "King", value: 10, order:13, topcard: false},
     ]
const cardsClubs = [
    {suit: "Clubs", type: "Ace", value: 1, order:1, topcard: false},
    {suit: "Clubs", type: "Two", value: 2, order:2, topcard: false},
    {suit: "Clubs", type: "Three", value: 3, order:3, topcard: false},
    {suit: "Clubs", type: "Four", value: 4, order:4, topcard: false},
    {suit: "Clubs", type: "Five", value: 5, order:5, topcard: false},
    {suit: "Clubs", type: "Six", value: 6, order:6, topcard: false},
    {suit: "Clubs", type: "Seven", value: 7, order:7, topcard: false},
    {suit: "Clubs", type: "Eight", value: 8, order:8, topcard: false},
    {suit: "Clubs", type: "Nine", value: 9, order:9, topcard: false},
    {suit: "Clubs", type: "Ten", value: 10, order:10, topcard: false},
    {suit: "Clubs", type: "Jack", value: 10, order:11, topcard: false},
    {suit: "Clubs", type: "Queen", value: 10, order:12, topcard: false},
    {suit: "Clubs", type: "King", value: 10, order:13, topcard: false},
     ]

const fullDeck = cardsHearts.concat(cardsDiamonds, cardsClubs, cardsSpades)

//=============================================================================== COUNTING POINTS ===========================================================================//
//Make the rules for counting, and then check with the players hands, the players hand will need to be passed to these functions

//Game score, first to 121 wins!
let playerScore = 0;
let opponentScore = 0;

var sampleHand = [
    {suit: "Clubs", type: "Five", value: 5, order:5, topcard: false}, 
    {suit: "Spades", type: "Five", value: 5, order:5, topcard: false},
    {suit: "Spades", type: "Jack", value: 10, order:11, topcard: false},
    {suit: "Spades", type: "Six", value: 6, order:6, topcard: false},
    {suit: "Spades", type: "Four", value: 4, order:4, topcard: true}
]

// console.log("sample hand ", sampleHand);

function countHand(hand) {
    let playerPointsHand = 0;
    countingFifteens(hand, playerPointsHand)
}

// --------------------- COUNTING ALL 15's IN HAND ---------------------------- //
//If the sum of any value is 15, give the player 2 points for each 15 counted

function countingFifteens(hand, playerPointsHand) {
    let valueArr = []
    let fifteens = [];    
    hand.forEach(function (card) {
        var cardValue = card.value;
        valueArr.push(cardValue);
        });

    //Combinations to count 15, TWO cards ---- need to find a more efficient algorithm... can probably do this in one search
    if (valueArr[0] + valueArr[1] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[2] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[3] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[1] + valueArr[2] === 15) {fifteens.push(true)}
    if (valueArr[1] + valueArr[3] === 15) {fifteens.push(true)}
    if (valueArr[1] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[2] + valueArr[3] === 15) {fifteens.push(true)}
    if (valueArr[2] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[3] + valueArr[4] === 15) {fifteens.push(true)}

    //Combinations to count 15, THREE cards
    if (valueArr[0] + valueArr[1] + valueArr[2] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[1] + valueArr[3] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[1] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[2] + valueArr[3] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[2] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[3] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[1] + valueArr[2] + valueArr[3] === 15) {fifteens.push(true)}
    if (valueArr[1] + valueArr[2] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[1] + valueArr[3] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[2] + valueArr[3] + valueArr[4] === 15) {fifteens.push(true)}
    
    //Combinations to count 15, FOUR cards
    if (valueArr[0] + valueArr[1] + valueArr[2] + valueArr[3] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[1] + valueArr[2] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[1] + valueArr[3] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[0] + valueArr[2] + valueArr[3] + valueArr[4] === 15) {fifteens.push(true)}
    if (valueArr[1] + valueArr[2] + valueArr[3] + valueArr[4] === 15) {fifteens.push(true)}

    //Combinations to count 15, FIVE cards
    if (valueArr[0] + valueArr[1] + valueArr[2] + valueArr[3] + valueArr[4] === 15) {fifteens.push(true)}

    //2 points or each 15
    playerPointsHand += (fifteens.length*2)
    console.log("15's ", playerPointsHand)

    countingRuns(hand,playerPointsHand)
}

//----------------------------- COUNTING ALL RUNS IN HAND ----------------------------//
//If at least 3 cards are in numerical order, give 3 points. Give an additional point for each card beyond a run of 3

function countingRuns(hand,playerPointsHand) {
    let orderArr = []
    hand.forEach(function (card) {
        var cardOrder = card.order;
        orderArr.push(cardOrder);
        });
    orderArr.sort(function(a, b){return a-b})

    //Combinations for a run of THREE
    if (orderArr[0] < orderArr[1] < orderArr[2] && (orderArr[2] - orderArr[1] === 1) && (orderArr[1] - orderArr[0] === 1)) { playerPointsHand += 3;
        console.log("run1 ", playerPointsHand)
    }
    if (orderArr[0] < orderArr[1] < orderArr[3] && (orderArr[3] - orderArr[1] === 1) && (orderArr[1] - orderArr[0] === 1)) { playerPointsHand += 3;
        console.log("run2 ", playerPointsHand)
    }
    if (orderArr[0] < orderArr[1] < orderArr[4] && (orderArr[4] - orderArr[1] === 1) && (orderArr[1] - orderArr[0] === 1)) { playerPointsHand += 3;
        console.log("run3 ", playerPointsHand)
    }
    if (orderArr[0] < orderArr[2] < orderArr[3] && (orderArr[3] - orderArr[2] === 1) && (orderArr[2] - orderArr[0] === 1)) { playerPointsHand += 3;
        console.log("run4 ", playerPointsHand)
    }
    if (orderArr[0] < orderArr[2] < orderArr[4] && (orderArr[4] - orderArr[2] === 1) && (orderArr[2] - orderArr[0] === 1)) { playerPointsHand += 3;
        console.log("run5 ", playerPointsHand)
    }
    if (orderArr[0] < orderArr[3] < orderArr[4] && (orderArr[4] - orderArr[3] === 1) && (orderArr[3] - orderArr[0] === 1)) { playerPointsHand += 3;
        console.log("run6 ", playerPointsHand)
    }
    if (orderArr[1] < orderArr[2] < orderArr[3] && (orderArr[3] - orderArr[2] === 1) && (orderArr[2] - orderArr[1] === 1)) { playerPointsHand += 3;
        console.log("run7 ", playerPointsHand)
    }
    if (orderArr[1] < orderArr[2] < orderArr[4] && (orderArr[4] - orderArr[2] === 1) && (orderArr[2] - orderArr[1] === 1)) { playerPointsHand += 3;
        console.log("run8 ", playerPointsHand)
    }
    if (orderArr[1] < orderArr[3] < orderArr[4] && (orderArr[4] - orderArr[3] === 1) && (orderArr[3] - orderArr[1] === 1)) { playerPointsHand += 3;
        console.log("run9 ", playerPointsHand)
    }
    if (orderArr[2] < orderArr[3] < orderArr[4] && (orderArr[4] - orderArr[3] === 1) && (orderArr[3] - orderArr[2] === 1)) { playerPointsHand += 3;
        console.log("run10 ", playerPointsHand)
    }

    //Combinations for a run of FOUR
    if (orderArr[0] < orderArr[1] < orderArr[2] < orderArr[3] && (orderArr[3] - orderArr[2] === 1) && (orderArr[2] - orderArr[1] === 1) && (orderArr[1] - orderArr[0] === 1)) { playerPointsHand += 4;
        console.log("run11 ", playerPointsHand)
    }
    if (orderArr[0] < orderArr[1] < orderArr[2] < orderArr[4] && (orderArr[4] - orderArr[2] === 1) && (orderArr[2] - orderArr[1] === 1) && (orderArr[1] - orderArr[0] === 1)) { playerPointsHand += 4;
        console.log("run12 ", playerPointsHand)
    }
    if (orderArr[0] < orderArr[1] < orderArr[3] < orderArr[4] && (orderArr[4] - orderArr[3] === 1) && (orderArr[3] - orderArr[1] === 1) && (orderArr[1] - orderArr[0] === 1)) { playerPointsHand += 4;
        console.log("run13 ", playerPointsHand)
    }
    if (orderArr[0] < orderArr[2] < orderArr[3] < orderArr[4] && (orderArr[4] - orderArr[3] === 1) && (orderArr[3] - orderArr[2] === 1) && (orderArr[2] - orderArr[0] === 1)) { playerPointsHand += 4;
        console.log("run14 ", playerPointsHand)
    }
    if (orderArr[1] < orderArr[2] < orderArr[3] < orderArr[4] && (orderArr[4] - orderArr[3] === 1) && (orderArr[3] - orderArr[2] === 1) && (orderArr[2] - orderArr[1] === 1)) { playerPointsHand += 4;
        console.log("run15 ", playerPointsHand)
    }

    //Combinations for a run of FIVE
    if (orderArr[0] < orderArr[1] < orderArr[2] < orderArr[3] < orderArr[4] && (orderArr[4] - orderArr[3] === 1) && (orderArr[3] - orderArr[2] === 1) && (orderArr[2] - orderArr[1] === 1) && (orderArr[1] - orderArr[0] === 1)) { playerPointsHand += 5;
        console.log("run16 ", playerPointsHand)
    }

    console.log("run total ", playerPointsHand)

    countingPairs(hand, playerPointsHand);
}

// --------------------- COUNTING ALL PAIRS IN HAND ---------------------------- //
//For every card that is the same type (a pair of two's), give the player 2 points for each pair counted

function countingPairs(hand, playerPointsHand) {
    let typeArr = []
    let pairs = [];    
    hand.forEach(function (card) {
        var cardType = card.type;
        typeArr.push(cardType);
        });

    //Combinations for all pairs - TWO cards
    if (typeArr[0] === typeArr[1]) {pairs.push(true)}
    if (typeArr[0] === typeArr[2]) {pairs.push(true)}
    if (typeArr[0] === typeArr[3]) {pairs.push(true)}
    if (typeArr[0] === typeArr[4]) {pairs.push(true)}
    if (typeArr[1] === typeArr[2]) {pairs.push(true)}
    if (typeArr[1] === typeArr[3]) {pairs.push(true)}
    if (typeArr[1] === typeArr[4]) {pairs.push(true)}
    if (typeArr[2] === typeArr[3]) {pairs.push(true)}
    if (typeArr[2] === typeArr[4]) {pairs.push(true)}
    if (typeArr[3] === typeArr[4]) {pairs.push(true)}

    //2 points or each pair
    playerPointsHand += (pairs.length*2)
    console.log("pairs ", playerPointsHand)

    checkKnobs(hand, playerPointsHand);
}
// --------------------- CHECKING FOR KNOBS IN HAND ---------------------------- //
//Check if hand holds a Jack matching the same suit as the topcard

function checkKnobs(hand, playerPointsHand) {
    let jackSuit = []
    let topSuit = []    

    hand.forEach(function (card) {
        var cardType = card.type;
        var cardSuit = card.suit;
        var topCard = card.topcard;

        if (topCard === true) { topSuit.push(cardSuit)};
        if (cardType === "Jack") { jackSuit.push(cardSuit)};
    });
   
    if (jackSuit[0] === topSuit[0]) { playerPointsHand += 1;}
    else if (jackSuit[1] === topSuit[0]) { playerPointsHand += 1;}
    else if (jackSuit[2] === topSuit[0]) { playerPointsHand += 1;}
    else if (jackSuit[3] === topSuit[0]) { playerPointsHand += 1;}

    console.log("knobs ", playerPointsHand)

    checkFlush(hand, playerPointsHand);
}
// --------------------- CHECKING FOR FLUSH IN HAND ---------------------------- //
//Check if hand contains 4 cards of the same suit, not including top card, 
//If topcard is also same suit, then add an additional point

function checkFlush(hand, playerPointsHand) {
    let handSuit = []
    let topSuit = []    

    hand.forEach(function (card) {
        var cardSuit = card.suit;
        var topCard = card.topcard;

        if (topCard === true) { topSuit.push(cardSuit)}
        else (handSuit.push(cardSuit))
    });

    if (handSuit[0] === handSuit[1] && handSuit[1] === handSuit[2] && handSuit[2] === handSuit[3] && handSuit[0] === topSuit[0]){ playerPointsHand += 5;} 
    else if (handSuit[0] === handSuit[1] && handSuit[1] === handSuit[2] && handSuit[2] === handSuit[3]){ playerPointsHand += 4;}

    console.log("flush ", playerPointsHand)
    
}

// countHand(sampleHand)

// ========================================================================== START GAME =================================================================================== //
//Algorithm to shuffle deck
function shuffleDeck(){
    let j, x, i;

    for (i = fullDeck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = fullDeck[i];
            fullDeck[i] = fullDeck[j];
            fullDeck[j] = x;
        }
    }

//The deck will be shuffled and the player and opponent will each draw a random card. Lowest card gets the crib first.
function startGame(){
    shuffleDeck(fullDeck);

    console.log(fullDeck[0].order, fullDeck[1].order)

    if (fullDeck[0].order === fullDeck[1].order) {
        console.log("Reshuffle")
        startGame();
    } else if (fullDeck[0].order < fullDeck[1].order) {
        console.log("Player goes first!")
        shuffleDeckPlayer();
    } else {
        console.log("Opponent goes first!")
        shuffleDeckOpponent();
    }

}

// ---------------------- SHUFFLE AND DEAL HANDS --------------------- //
//Player's turn to shuffle and deal, player keeps crib
function shuffleDeckPlayer () {
        shuffleDeck()
        dealHandsPlayer(fullDeck);
    }

//Opponents's turn to shuffle and deal, player keeps crib
function shuffleDeckOpponent () {
        shuffleDeck()
        dealHandsOpponent(fullDeck);
    }    

function dealHandsPlayer(shuffledCards) {       
    let playerHand = shuffledCards.slice(0,6);
    let opponentHand = shuffledCards.slice(6,12);
    let remainingCards = shuffledCards.slice(12,52);

    console.log("Player Hand ", playerHand, playerHand.length)
    console.log("Opponent Hand ", opponentHand, opponentHand.length)
    // console.log("Remaining Cards ", remainingCards, remainingCards.length)
    
    // playerCrib();
}

function dealHandsOpponent(shuffledCards) {       
    let playerHand = shuffledCards.slice(0,6);
    let opponentHand = shuffledCards.slice(6,12);
    let remainingCards = shuffledCards.slice(12,52);

    console.log("Player Hand ", playerHand, playerHand.length)
    console.log("Opponent Hand ", opponentHand, opponentHand.length)
    // console.log("Remaining Cards ", remainingCards, remainingCards.length)

    // opponentCrib();
}

startGame(fullDeck)

// -------------------- SEND CARDS TO THE CRIB ----------------------//

const playerCribHand = [];
const opponentCribHand = [];

//When the player has the crib
function playerCrib() {

}


//When the opponent has the crib




//========================================================================= NOTES =============================================================================================//
//Before cards are placed to the crib, the opponent will need to send two cards to the crib based off best calculated outcome. I will need to define the rules of the points and which cards to prioritize. It cannot send 2 random cards
//The player will need to use the cards they select on the interface, will need to use ES6 syntax for "this". Will need to find a way for the player to select (toggle) card. Same for counting, start by computer counting all
//Will need to define who gets crib first and who lays cards first, this will need to alternate
//First to 121 wins, after initial game is made, will need to set algorithm to display pegs.
//In order to display cards, I will need to make the cards and array of objects, the objects being each individual card    



