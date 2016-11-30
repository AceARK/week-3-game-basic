// Initializing letters array with all possible choices for computer to choose from
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];

// Initializing variables to store user game stats
var wins = 0;
var losses = 0;
var guesses = 8;
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
					// computerChooses();
					// console.log("New computer choice" + computerChoice);
					guesses = 8;
					console.log("If block - wins: " + wins + "Losses: " + losses);
					computerChooses();
					console.log("User won. computer's new choice " + computerChoice);
				}

				else {
					console.log("guessed wrong");
					// console.log("Else block - losses: " + losses + "Wins: " + wins);
					guesses--;
					console.log("Guesses left: " + guesses);
					// var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
					// console.log("User chose " + userGuess);
					if (guesses==0) {
						losses++;
						console.log("guesses 0 block - wins: " + wins + "Losses: " + losses);
						guesses=8;
						computerChooses();
						console.log("Computer chose new " + computerChoice);
						return;
					}
					else {
						return;
					}
				}
				
		
}	

function computerChooses() {
	computerChoice = letters[Math.floor(Math.random()*letters.length)];
	return computerChoice;
}