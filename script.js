//===========================================================  DECK OF CARDS {suit, type, value, order, image1, image 2} ================================================================//
const cardsHearts = [
    {suit: "Hearts", type: "Ace", value: 1, order:1},
    {suit: "Hearts", type: "Two", value: 2, order:2},
    {suit: "Hearts", type: "Three", value: 3, order:3},
    {suit: "Hearts", type: "Four", value: 4, order:4},
    {suit: "Hearts", type: "Five", value: 5, order:5},
    {suit: "Hearts", type: "Six", value: 6, order:6},
    {suit: "Hearts", type: "Seven", value: 7, order:7},
    {suit: "Hearts", type: "Eight", value: 8, order:8},
    {suit: "Hearts", type: "Nine", value: 9, order:9},
    {suit: "Hearts", type: "Ten", value: 10, order:10},
    {suit: "Hearts", type: "Jack", value: 10, order:11},
    {suit: "Hearts", type: "Queen", value: 10, order:12},
    {suit: "Hearts", type: "King", value: 10, order:13},
     ]
const cardsDiamonds = [
    {suit: "Diamonds", type: "Ace", value: 1, order:1},
    {suit: "Diamonds", type: "Two", value: 2, order:2},
    {suit: "Diamonds", type: "Three", value: 3, order:3},
    {suit: "Diamonds", type: "Four", value: 4, order:4},
    {suit: "Diamonds", type: "Five", value: 5, order:5},
    {suit: "Diamonds", type: "Six", value: 6, order:6},
    {suit: "Diamonds", type: "Seven", value: 7, order:7},
    {suit: "Diamonds", type: "Eight", value: 8, order:8},
    {suit: "Diamonds", type: "Nine", value: 9, order:9},
    {suit: "Diamonds", type: "Ten", value: 10, order:10},
    {suit: "Diamonds", type: "Jack", value: 10, order:11},
    {suit: "Diamonds", type: "Queen", value: 10, order:12},
    {suit: "Diamonds", type: "King", value: 10, order:13},
     ]
const cardsSpades = [
    {suit: "Spades", type: "Ace", value: 1, order:1},
    {suit: "Spades", type: "Two", value: 2, order:2},
    {suit: "Spades", type: "Three", value: 3, order:3},
    {suit: "Spades", type: "Four", value: 4, order:4},
    {suit: "Spades", type: "Five", value: 5, order:5},
    {suit: "Spades", type: "Six", value: 6, order:6},
    {suit: "Spades", type: "Seven", value: 7, order:7},
    {suit: "Spades", type: "Eight", value: 8, order:8},
    {suit: "Spades", type: "Nine", value: 9, order:9},
    {suit: "Spades", type: "Ten", value: 10, order:10},
    {suit: "Spades", type: "Jack", value: 10, order:11},
    {suit: "Spades", type: "Queen", value: 10, order:12},
    {suit: "Spades", type: "King", value: 10, order:13},
     ]
const cardsClubs = [
    {suit: "Clubs", type: "Ace", value: 1, order:1},
    {suit: "Clubs", type: "Two", value: 2, order:2},
    {suit: "Clubs", type: "Three", value: 3, order:3},
    {suit: "Clubs", type: "Four", value: 4, order:4},
    {suit: "Clubs", type: "Five", value: 5, order:5},
    {suit: "Clubs", type: "Six", value: 6, order:6},
    {suit: "Clubs", type: "Seven", value: 7, order:7},
    {suit: "Clubs", type: "Eight", value: 8, order:8},
    {suit: "Clubs", type: "Nine", value: 9, order:9},
    {suit: "Clubs", type: "Ten", value: 10, order:10},
    {suit: "Clubs", type: "Jack", value: 10, order:11},
    {suit: "Clubs", type: "Queen", value: 10, order:12},
    {suit: "Clubs", type: "King", value: 10, order:13},
     ]

const fullDeck = cardsHearts.concat(cardsDiamonds, cardsClubs, cardsSpades)

//=============================================================================== COUNTING POINTS ===========================================================================//
//Make the rules for counting, and then check with the players hands, the players hand will need to be passed to these functions

var sampleHand = [{suit: "Clubs", type: "Five", value: 5, order:5}, {suit: "Hearts", type: "Five", value: 5, order:5},{suit: "Clubs", type: "King", value: 10, order:13},{suit: "Spades", type: "Six", value: 6, order:6},{suit: "Spades", type: "Four", value: 4, order:4}]

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
    // console.log("15 ", playerPointsHand)

    countingRuns(hand,playerPointsHand)
}

//----------------------------- COUNTING ALL RUNS IN HAND ----------------------------
function countingRuns(hand,playerPointsHand) {
    let typeArr = []
    let runs = [];

    hand.forEach(function (card) {
        var cardType = card.type;
        typeArr.push(cardType);
        });
         
    console.log("type array ", typeArr)

    // console.log("run ", playerPointsHand)
}

//Pairs
//Knobs
//Flush

countHand(sampleHand)

// ========================================================================== START GAME =================================================================================== //

// Shuffle and deal hands
function shuffleDeck (fullDeck) {
    let j, x, i;

    for (i = fullDeck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = fullDeck[i];
            fullDeck[i] = fullDeck[j];
            fullDeck[j] = x;
        }
        dealHands(fullDeck);
    }

function dealHands(shuffledCards) {       
    let playerHand = shuffledCards.slice(0,6);
    let computerHand = shuffledCards.slice(6,12);
    let remainingCards = shuffledCards.slice(12,52);

    console.log("Player Hand ", playerHand, playerHand.length)
    console.log("Computer Hand ", computerHand, computerHand.length)
    console.log("Remaining Cards ", remainingCards, remainingCards.length)

}

// shuffleDeck(fullDeck)


//========================================================================= NOTES =============================================================================================//
//Before cards are placed to the crib, the opponent will need to send two cards to the crib based off best calculated outcome. I will need to define the rules of the points and which cards to prioritize. It cannot send 2 random cards
//The player will need to use the cards they select on the interface, will need to use ES6 syntax for "this". Will need to find a way for the player to select (toggle) card. Same for counting, start by computer counting all
//Will need to define who gets crib first and who lays cards first, this will need to alternate
//First to 121 wins, after initial game is made, will need to set algorithm to display pegs.
//In order to display cards, I will need to make the cards and array of objects, the objects being each individual card    



