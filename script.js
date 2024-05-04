//connection to deck.js file
import Deck from './deck.js'

//value map to give J, Q, K, and A number values to compare
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

//function that runs the game
startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    //splits deck in half and designates each half to a player
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerOneDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    playerTwoDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

    console.log(playerOneDeck)
    console.log(playerTwoDeck)

    let playerOnePoints = 0;
    let playerTwoPoints = 0;

    const gameRounds = 26;

//main game loop. iterates through 26 rounds, shows the cards played, which players win
    for (let i = 0; i < gameRounds; i++) {
        const playerOneCard = playerOneDeck.cards[i].value;
        const playerTwoCard = playerTwoDeck.cards[i].value;
        
        //player one wins round
        if (CardValueMap[playerOneCard] > CardValueMap[playerTwoCard]) {
            console.log(`Player One: ${playerOneDeck.cards[i].value + playerOneDeck.cards[i].suit}`)
            console.log(`Player Two: ${playerTwoDeck.cards[i].value + playerTwoDeck.cards[i].suit}`)
            console.log("----------------------")
            console.log(`Player One Wins Round ${i+1}`);
            console.log(' ');
            console.log(' ');
            playerOnePoints++;
        //player two wins round
        } else if (CardValueMap[playerOneCard] < CardValueMap[playerTwoCard]) {
            console.log(`Player One: ${playerOneDeck.cards[i].value + playerOneDeck.cards[i].suit}`)
            console.log(`Player Two: ${playerTwoDeck.cards[i].value + playerTwoDeck.cards[i].suit}`)
            console.log("----------------------")
            console.log(`Player Two Wins Round ${i+1}`);
            console.log(' ');
            console.log(' ');
            playerTwoPoints++;
        //round ends in a tie
        } else {
            console.log(`Player One: ${playerOneDeck.cards[i].value + playerOneDeck.cards[i].suit}`)
            console.log(`Player Two: ${playerTwoDeck.cards[i].value + playerTwoDeck.cards[i].suit}`)
            console.log("----------------------")
            console.log(`Round ${i+1} is a Tie`);
            console.log(' ');
            console.log(' ');
        }
    
    }
    //player points at end of the game
    console.log(`Player One Points: ${playerOnePoints}`)
    console.log(`Player Two Points: ${playerTwoPoints}`)
    console.log(' ')

    //logic that decides which player wins
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

