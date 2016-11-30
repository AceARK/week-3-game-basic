// Initializing letters array with all possible choices for computer to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
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
    // Showing user's choice on HTML page
    document.getElementById("userGuesses").innerHTML = userGuess;

    // Checking user's guessed letter against computer's
    // If equal...
    if (userGuess === computerChoice) {

        // Update wins, reset guesses left, print both to html, computer chooses letter for next set
        wins++;
        console.log("guessed right");
        guesses = 8;
        document.getElementById("userWins").innerHTML = wins;
        document.getElementById("guessesLeft").innerHTML = guesses;
        computerChooses();
        console.log("User won. computer's new choice " + computerChoice);

    } 
    	// If not equal...
    	else {

    		// Decrement guesses left and update it to html
	        console.log("guessed wrong");
	        guesses--;
	        document.getElementById("guessesLeft").innerHTML = guesses;

	        // If no guesses left...
	        if (guesses == 0) {

	        	// Increment losses, reset guesses left, update both to html, computer letter for next set
	            losses++;
	            document.getElementById("userLosses").innerHTML = losses;
	            console.log("guesses 0 block - wins: " + wins + "Losses: " + losses);
	            guesses = 8;
	            document.getElementById("guessesLeft").innerHTML = guesses;
	            computerChooses();
	            console.log("Computer chose new " + computerChoice);
	            // Return control to wait for user key press for next set
	            return;

        	} // If guesses left...
        	  else {
        	  	// Return control to wait for user key press
            	return;
        	}
    }


}

function computerChooses() {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    return computerChoice;

}
