// Initializing letters array with all possible choices for computer to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Initializing variables to store user game stats
var wins = 0;
var losses = 0;
var guesses = 8;
var computerChoice = "";
var usedInputArray = [];
var allowedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Computer chooses a random letter
computerChooses();
console.log("Computer has chosen " + computerChoice);

// When user presses any key, invoke this function 
document.onkeyup = function(event) {

        // Catch, convert to lowercase, and store user's input in a variable
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("User chose " + userGuess);

        // Weeding out invalid input
        if (allowedLetters.indexOf(userGuess) == -1) {

            document.getElementById("result").innerHTML = "You must divine only letters of the English alphabet.";
            document.getElementById("message1").innerHTML = "";
            document.getElementById("message2").innerHTML = "";
        }
        else if (usedInputArray.indexOf(userGuess) != -1){
            return;
        } 
        else {

            document.getElementById("result").innerHTML = "";
            document.getElementById("message1").innerHTML = "";
            document.getElementById("message2").innerHTML = "";
            usedInputArray.push(userGuess);
            // Showing user's choice on HTML page
            document.getElementById("userGuesses").innerHTML = usedInputArray.toString();
            // Checking user's guessed letter against computer's
            // If equal...
            if (userGuess === computerChoice) {

                // Update wins, reset guesses left, print both to html, computer chooses letter for next set
                wins++;
                console.log("guessed right");
                usedInputArray = []; // reset used letters
                document.getElementById("userGuesses").innerHTML = usedInputArray.toString();
                guesses = 8;
                document.getElementById("userWins").innerHTML = wins;
                document.getElementById("guessesLeft").innerHTML = guesses;
                computerChooses();
                console.log("User won. computer's new choice " + computerChoice);
                document.getElementById("result").innerHTML = "You have won.";
                document.getElementById("message1").innerHTML = "It seems you may have what it takes.";
                document.getElementById("message2").innerHTML = "But let's see for sure. Computer has chosen. Test your powers again..";
            } 
            	// If not equal...
            	else {

            		// Decrement guesses left and update it to html
        	        console.log("guessed wrong");
        	        guesses--;
        	        document.getElementById("guessesLeft").innerHTML = guesses;

        	        // If no guesses left...
        	        if (guesses == 0) {

        	        	// Increment losses , update both to html, 
        	            losses++;
        	            document.getElementById("userLosses").innerHTML = losses;
        	            console.log("guesses 0 block - wins: " + wins + "Losses: " + losses);
                        usedInputArray = []; // reset used letters
                        document.getElementById("userGuesses").innerHTML = usedInputArray.toString();
        	            guesses = 8; // reset guesses left
        	            document.getElementById("guessesLeft").innerHTML = guesses;
                         document.getElementById("result").innerHTML = "You lost. Computer chose " + computerChoice;
                        document.getElementById("message1").innerHTML = "It seems you may not be the one.";
                        document.getElementById("message2").innerHTML = "Try your luck again? Computer has chosen. Your turn..";
                        computerChooses(); //computer chooses letter for next set
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

}

function computerChooses() {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    return computerChoice;

}
