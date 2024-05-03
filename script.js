import Deck from './deck.js'

const CardValueMap = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

let playerOneDeck, playerTwoDeck;
let playerOnePoints, playerTwoPoints;

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerOneDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    playerTwoDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

    console.log(playerOneDeck)
    console.log(playerTwoDeck)

    let playerOnePoints = 0;
    let playerTwoPoints = 0;

    const gameRounds = 26;

    for (let i = 0; i < gameRounds; i++) {
        const playerOneCard = playerOneDeck.cards[i].value;
        const playerTwoCard = playerTwoDeck.cards[i].value;
        
        if (CardValueMap[playerOneCard] > CardValueMap[playerTwoCard]) {
            console.log(`Player One: ${playerOneDeck.cards[i].value + playerOneDeck.cards[i].suit}`)
            console.log(`Player Two: ${playerTwoDeck.cards[i].value + playerTwoDeck.cards[i].suit}`)
            console.log("----------------------")
            console.log(`Player One Wins Round ${i+1}`);
            console.log(' ');
            console.log(' ');
            playerOnePoints++;
        } else if (CardValueMap[playerOneCard] < CardValueMap[playerTwoCard]) {
            console.log(`Player One: ${playerOneDeck.cards[i].value + playerOneDeck.cards[i].suit}`)
            console.log(`Player Two: ${playerTwoDeck.cards[i].value + playerTwoDeck.cards[i].suit}`)
            console.log("----------------------")
            console.log(`Player Two Wins Round ${i+1}`);
            console.log(' ');
            console.log(' ');
            playerTwoPoints++;
        } else {
            console.log(`Player One: ${playerOneDeck.cards[i].value + playerOneDeck.cards[i].suit}`)
            console.log(`Player Two: ${playerTwoDeck.cards[i].value + playerTwoDeck.cards[i].suit}`)
            console.log("----------------------")
            console.log(`Round ${i+1} is a Tie`);
            console.log(' ');
            console.log(' ');
        }
    
    }
    console.log(`Player One Points: ${playerOnePoints}`)
    console.log(`Player Two Points: ${playerTwoPoints}`)
    console.log(' ')

    if (playerOnePoints > playerTwoPoints) {
        console.log("Player One Wins!")
    } else if (playerOnePoints < playerTwoPoints) {
        console.log("Player Two Wins!")
    } else {
        console.log("Game is a Tie!")
    }
}


const deck = new Deck
deck.shuffle()
console.log(deck.cards);

