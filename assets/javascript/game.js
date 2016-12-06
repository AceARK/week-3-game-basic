// Initializing letters array with all possible choices for computer to choose from
var allowedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Initializing variables to store user game stats
var wins = 0;
var losses = 0;
var guesses = 8;
var computerChoice = "";
var usedInputArray = [];


$(document).ready(function(){
    $("h1").fadeIn(900);
    $("#text1").fadeIn(2000);
    $("#text2").fadeIn(3000);
    $("#text3").fadeIn(4000);
    $("#text4").fadeIn(5000);
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

                $("#result").hide().html("You must divine only letters of the English alphabet.").fadeIn(1000);
                $("#message1").html("");
                $("#message2").html("");
            }
            else if (usedInputArray.indexOf(userGuess) != -1){
                return;
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
                    console.log("guessed right");
                    usedInputArray = []; // reset used letters
                    $("#userGuesses").html(usedInputArray.toString());
                    guesses = 8;
                    $("#userWins").html(wins);
                    $("#guessesLeft").html(guesses);
                    computerChooses();
                    console.log("User won. computer's new choice " + computerChoice);
                    $("#result").hide().html("You have won.").fadeIn(1000);
                    $("#message1").hide().html("It seems you may have what it takes.").fadeIn(2000);
                    $("#message2").hide().html("But let's see for sure. Computer has chosen. Test your powers again..").fadeIn(3000);
                } 
                    // If not equal...
                    else {

                        // Decrement guesses left and update it to html
                        console.log("guessed wrong");
                        guesses--;
                        $("#guessesLeft").html(guesses);

                        // If no guesses left...
                        if (guesses == 0) {

                            // Increment losses , update both to html, 
                            losses++;
                            $("#userLosses").html(losses);
                            console.log("guesses 0 block - wins: " + wins + "Losses: " + losses);
                            usedInputArray = []; // reset used letters
                            $("#userGuesses").html(usedInputArray.toString());
                            guesses = 8; // reset guesses left
                            $("#guessesLeft").html(guesses);
                            $("#result").hide().html("You lost. Computer chose " + computerChoice).fadeIn(1000);
                            $("#message1").hide().html("It seems you may not be the one.").fadeIn(2000);
                            $("#message2").hide().html("Try your luck again? Computer has chosen. Your turn..").fadeIn(3000);
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
        computerChoice = allowedLetters[Math.floor(Math.random() * allowedLetters.length)];
        return computerChoice;

    }
});

