
                    var myAge = [28, "twenty eight", "twenty-eight", "twentyeight"];
                    var correctGuess = 0
                    var myNumber = 8
                    var myNumberCount = 0

                    alert("Welcome to this REALLY cool page!!!  Let's play some games shall we?");
                    alert("To view this page you must first guess my age.");

  while (myAge) {
                    var guessAge = prompt ("How old am I?");
                    console.log("User has entered the number" + " " + guessAge);

    if (guessAge == myAge[0] || guessAge.toLowerCase() == myAge[1] || guessAge.toLowerCase() == myAge[2] || guessAge.toLowerCase() == myAge[3] ) {
                    correctGuess += 1;
                    alert("Alright hot shot, good job.\nNow I'm thinking of a number between 1 and 10.  Can you guess it?");
                    console.log("User guessed correct");
                    break;

          } else if (guessAge > 32) {
                    alert("Your guess is way too high!");
                    console.log("User guessed way too high");

          } else if (guessAge >= 29 && guessAge <= 32) {
                    alert("Your guess is too high but very close.  Try a lower number!");
                    console.log("User guessed too high");

          } else if (guessAge < 23) {
                    alert("Your guess is way too low!");
                    console.log("User guessed way too low");

          } else if (guessAge >= 23 && guessAge <= 27) {
                    alert("Your guess is too low but very close.  Try a higher number!");
                    console.log("User guessed too low");

          } else if (guessAge = isNaN) {
                    alert("That answer is downright wrong.  Try guessing with an integer!");
                    console.log("User guessed with a string"); } }


  while (myNumber){
                    var guessNumber = prompt("What is my number?");

    if (guessNumber != 8 ) {
                    alert("Wrong!  Try again.");
                    console.log("User guessed incorrectly");
                    myNumberCount += 1

          } else {
                    correctGuess += 1
                    myNumberCount += 1
                    alert("Impressive!  That only took you" + " " + myNumberCount + " " + "tries.\nBut to see this page you must first answer these three questions...");
                    console.log("User guessed the number 8 after" + " " + myNumberCount + " " + "tries.");
                    break; } }

                    function spellName(){
                    var userName = prompt("What...Is your name?");
                    console.log("User's name is" + " " + userName);

    if (userName === "" ) {
                    alert("What are you doing!?  You have to enter SOMETHING!");
                    console.log("User failed to enter anything");
                    spellName();

          } else if (userName >= 0 || userName <= 0) {
                    alert("I highly doubt your name is a number... Spell out your name!");
                    console.log("User entered an integer as their name");
                    spellName();

          } else {
                    correctGuess += 1
                    var quest = prompt("What...Is your quest?");
                    console.log(userName + "'s ultimate goal is" + " " + quest.toLowerCase()); }

    if (quest.toLowerCase() === "holy grail" || quest.toLowerCase() === "to find the holy grail" || quest.toLowerCase() === "to seek the holy grail" || quest.toLowerCase() === "to obtain the holy grail") {
                    correctGuess += 1
                    alert("You sure do know your Monty Python references!  You got the bonus point!");
                    function monthPython(){
                    var favColor = prompt("What...Is your favorite color?");
                    console.log(userName + "'s favorite color is" + " " + favColor.toLowerCase());

    if (favColor.toLowerCase() === "purple") {
                    correctGuess += 1
                    document.title = (quest.toUpperCase()+("!!!"));
                    alert("Excellent work" + " " + userName + ", " + "you have chosen wisely!\nYou have guessed" + " " + correctGuess + " " + "out of 5 questions right!\nNow enjoy this pleasantly purple page!");
                    console.log(userName + " " + "has amazing taste and will now be shown this awesome page");
                    document.getElementById('hiddenContent').style.display= "block";
                    document.getElementById("name").innerHTML = ("CONGRATULATIONS" + " " + userName.toUpperCase() + "!!!");

          } else {
                    console.log(userName + " " + "has poor taste and will now be ejected from the website");
                    alert("Okay" + " " + userName + ", " + "that's nice, but" + " " + favColor.toLowerCase() + " " + "is a terrible color so BYE FELICIA!");
                    window.close(); }
                    }monthPython();

          } else {
                    monthPython();
          }
                    }spellName();
