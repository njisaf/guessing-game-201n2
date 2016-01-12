            var myAge = [28, "twenty eight", "twenty-eight", "twentyeight"];
            var correctGuess = 0

            alert("Welcome to this REALLY cool page!!!  Let's play a game shall we?");
            function getSmart(){
            var guessAge = prompt ("To view this page you must first guess my age.\nHow old am I?");
                console.log("User has entered the number" + " " + guessAge);

    if (guessAge == myAge[0]) {
            correctGuess += 1
            function colorTest(){
            alert("Impressive.  Yet ye who would see this page must first answer me these questions three...");
            function spellName(){
            var userName = prompt("What...Is your name?");
                console.log("User's name is" + " " + userName);

    if (userName === "" ) {
            alert("What are you doing!?  You have to enter SOMETHING!");
                console.log("User failed to enter anything");
                  spellName();

   } else if (userName >= 0 || userName <= 0) {
            alert("I highly doubt your name is a number... Spell out your name!")
                console.log("User entered an integer as their name")
                  spellName();


   } else {
              var quest = prompt("What...Is your quest?");
                  console.log(userName + "'s ultimate goal is" + " " + quest.toLowerCase());

              var favColor = prompt("What...Is your favorite color?");
                  console.log(userName + "'s favorite color is" + " " + favColor.toLowerCase());

   if (favColor.toLowerCase() === "purple") {
                  document.title = (quest.toUpperCase()+("!!!"));
              alert("Excellent work" + " " + userName + ", " + "you have chosen wisely!  Now enjoy this pleasantly purple page!");
                  console.log(userName + " " + "has amazing taste and will now be shown this awesome page");
                  document.getElementById('hiddenContent').style.display= "block";
                  document.getElementById("name").innerHTML = ("CONGRATULATIONS" + " " + userName.toUpperCase() + "!!!");

  } else {
                  console.log(userName + " " + "has poor taste and will now be ejected from the website")
              alert("Okay" + " " + userName + ", " + "that's nice, but" + " " + favColor.toLowerCase() + " " + "is a terrible color so BYE FELICIA!");
                  window.close(); } }
                    }spellName();
                    }colorTest();



  } else if (guessAge.toLowerCase() == myAge[1] || guessAge.toLowerCase() == myAge[2] || guessAge.toLowerCase() == myAge[3] ) {
            correctGuess += 1
                    colorTest();

  } else if (guessAge > 32) {
            alert("Your guess is way too high!");
            function wrongAge(){
                  console.log("User guessed incorrectly.  Restarting code.");
                    getSmart();
                    }wrongAge();

  } else if (guessAge >= 29 && guessAge <= 32) {
            alert("Your guess is too high but very close.  Try a lower number!")
                    wrongAge();

  } else if (guessAge < 23) {
            alert("Your guess is way too low!");
                    wrongAge();

  } else if (guessAge >= 23 && guessAge <= 27) {
            alert("Your guess is too low but very close.  Try a higher number!");
                    wrongAge();

  } else {  alert("That answer is wrong.  Try guessing with an integer!")
                    wrongAge();}
                    }getSmart();
