var answers = [28, 8, "HOLY GRAIL", "PURPLE"];
var arrayLength = answers.length
var questionNumber = 1


function guessRange (numGuess, numCorrect) {
  if (numGuess + numCorrect < numCorrect * 2) {
    numGuess = parseInt(prompt("That guess is too low. Try again!"));
    myNumberCount++;
  } else if (numGuess + numCorrect > numCorrect * 2) {
    numGuess = parseInt(prompt("That guess is too high. Try again!"));
    myNumberCount++;
  } else if (numGuess + numCorrect === numCorrect * 2) {
    alert("Alright hot shot, good job.");
    correctGuess++;
  } else {
    numGuess = parseInt(prompt("I don't even know what that is. Try again, with numbers this time."));
    myNumberCount++;
  }
}

function guessString () {
  if (guessString === answers[i]) {
      alert("That's correct! Good guess.");
      correctGuess++;
  } else {
      alert("That's wrong. Too bad.");
  }
}


function checkType () {
  if (typeof answers[i] === number) {

  }
}



while (questionNumber <= arrayLength) {
    if (questionNumber = 1) {
      questionOne;
      questionNumber++;
    } else if (questionNumber = 2) {
      questionTwo;
      questionNumber++;
    } else if (questionNumber = 3) {
      questionThree;
      questionNumber++;
    } else if (questionNumber = 4) {
      questionFour;
      questionNumber++;
    }
  } //end logic here.


function questionOne
function questionTwo
function questionThree
function questionFour
