var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queenofhearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king", 
	suit: "diamonds", 
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry try again.");
	}
}

function flipCard(cardId) {

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry try again");
	}
}
cardsInPlay.push(cards[cardId].rank);
console.log("User Flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
checkForMatch();
}
flipCard(1);
flipCard(3);

