// Initializing letters array with all possible choices for computer to choose from
var allowedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Initializing variables to store user game stats
var wins = 0;
var losses = 0;
var guesses = 8;
var computerChoice = "";
var usedInputArray = [];

// On document load,
$(document).ready(function(){
    // Fade in all messages
    $("h1").fadeIn(900);
    $("#text1").fadeIn(2000);
    $("#text2").fadeIn(3000);
    $("#text3").fadeIn(4000);
    $("#text4").fadeIn(5000);

// Computer chooses a random letter
    computerChooses();

// When user presses any key, invoke this function 
    document.onkeyup = function(event) {

        // Catch, convert to lowercase, and store user's input in a variable
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // Weeding out invalid input
            if (allowedLetters.indexOf(userGuess) == -1) {

            // Notify user to press only alphabets and fade it in
                $("#result").hide().html("You must divine only letters of the English alphabet.").fadeIn(1000);
                $("#message1").html("");
                $("#message2").html("");
            }
        // If user has already pressed the key
            else if (usedInputArray.indexOf(userGuess) != -1){
                return; // go out of loop and wait again for key press
            } 
            else {

            // Display nothing on crystal ball
                $("#result").html("");
                 $("#message1").html("");
                $("#message2").html("");

            // Getting user inputs into array for displaying later
                usedInputArray.push(userGuess);
            // Showing user's choice on HTML page
                $("#userGuesses").html(usedInputArray.toString());
            // Checking user's guessed letter against computer's
            // If equal...
                if (userGuess === computerChoice) {

                // Update wins, reset guesses left, print both to html, computer chooses letter for next set
                    wins++;
                    usedInputArray = []; // reset used letters
                    $("#userGuesses").html(usedInputArray.toString());
                    guesses = 8;
                // Update user wins and guesses left
                    $("#userWins").html(wins);
                    $("#guessesLeft").html(guesses);
                    computerChooses();
                 // Update messages on crystal ball
                    $("#result").hide().html("You have won.").fadeIn(1000);
                    $("#message1").hide().html("It seems you may have what it takes.").fadeIn(2000);
                    $("#message2").hide().html("But let's see for sure. Computer has chosen. Test your powers again..").fadeIn(3000);
                } 
                // If not equal...
                    else {

                    // Decrement guesses left and update it to html
                        guesses--;
                        $("#guessesLeft").html(guesses);

                    // If no guesses left...
                        if (guesses == 0) {

                        // Increment losses , update both to html, 
                            losses++;
                            $("#userLosses").html(losses);
                            usedInputArray = []; // reset used letters
                            $("#userGuesses").html(usedInputArray.toString());
                            guesses = 8; // reset guesses left
                            $("#guessesLeft").html(guesses);
                        // Update messages on crystal ball
                            $("#result").hide().html("You lost. Computer chose " + computerChoice).fadeIn(1000);
                            $("#message1").hide().html("It seems you may not be the one.").fadeIn(2000);
                            $("#message2").hide().html("Try your luck again? Computer has chosen. Your turn..").fadeIn(3000);
                            computerChooses(); //computer chooses letter for next set
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

// Function to make random computer choices from alphabets
    function computerChooses() {
        computerChoice = allowedLetters[Math.floor(Math.random() * allowedLetters.length)];
        return computerChoice;

    }
});

