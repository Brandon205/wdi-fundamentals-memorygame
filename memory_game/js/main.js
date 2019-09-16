var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
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
//score is very very simple but can keep accurately up to one point
var score = "";

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		score ++;
		console.log(score);
	} else {
		console.log("Sorry try again.");
	}
};

function flipCard() {
var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);

checkForMatch();
cardsInPlay.push(cards[cardId].rank);
//console.log("User Flipped " + cards[cardId].rank);
//console.log(cards[cardId].suit);
//console.log(cards[cardId].cardImage);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");

	} else {
		alert("Sorry try again");
	}
}
};

//code to reset the board/page 
function resetBoard() {
	location.reload();
 }
document.getElementById('reset').addEventListener('click', resetBoard);

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('gameBoard').appendChild(cardElement);
	}
}

createBoard();
 



