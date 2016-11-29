// Initializing letters array with all possible choices for computer to choose from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];

// Initializing variables to store user game stats
var wins = 0;
var losses = 0;
var guesses = 2;
var computerChoice = "";

// Computer chooses a random letter
computerChooses();
console.log("Computer has chosen " + computerChoice);

// When user presses any key, invoke this function 
document.onkeyup = function(event) {

	// Catch, convert to lowercase, and store user's input in a variable
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("User chose " + userGuess);

			if(userGuess === computerChoice) {
				wins++;
				console.log("guessed right");
				computerChooses();
				console.log("New computer choice" + computerChoice);
				guesses = 2;
				console.log("If block - wins: " + wins + "Losses: " + losses);
			}
			else {
				guesses--;
				console.log("guessed wrong");
				losses++;
				console.log("Else block - losses: " + losses + "Wins: " + wins);
			}

			if (guesses == 0) {
				console.log("You lose. Next letter computer chose " + computerChoice);
				computerChooses();
				guesses = 2;
				console.log("reset If block - Losses: " + losses + "Wins: " + wins);
			}
};

function computerChooses() {
	computerChoice = letters[Math.floor(Math.random()*letters.length)];
	return computerChoice;
}