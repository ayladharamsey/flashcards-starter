const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Deck = require('../src/Deck');
const Card = require('../src/Card');



class Round{
	constructor(deck){
    	this.turnCounter = 0
		this.deck = deck || [];
    	this.incorrectGuesses = []
	}

	returnCurrentCard(){ 
		const currentCard = this.deck.cardDeck[this.turnCounter];
		return currentCard
	}

	takeTurn(userGuess){
		const currentCard = this.deck.cardDeck[this.turnCounter];
		const turn = new Turn(userGuess, currentCard);
		this.incrementCounter();
    	
    	if(turn.evaluateGuess === false){
      		this.incorrectGuesses.push(currentCard.id)
    	}

    	return turn.giveFeedback();
	}

	calculatePercentCorrect(){
		const percent = Math.round(100 - (this.incorrectGuesses.length * 100) / this.turnCounter)
		return percent;
	}

	endRound(){
		return `** Round over! ** You answered ${percent} of the questions correctly!`
	}

	incrementCounter() {
		this.turnCounter ++ 

	}
}

module.exports = Round;
