var arrayQues = [];
var arrayAns = [];
var arrayRight = [];
var arrayWrong = [];
var arrayGameType = [];

var txtQuestion = 0;
var txtAnswer = 0;
var gameType = 0;
var txtRightPrompt = 0;
var txtWrongPrompt = 0;

function loadQuestion () {
  arrayQues.push(txtQuestion);
  arrayAns.push(txtAnswer);
  arrayGameType.push(gameType.toUpperCase());
  arrayRight.push(txtRightPrompt);
  arrayWrong.push(txtWrongPrompt);
  console.log("Questions loaded. Currently loaded: " + gameLength);
}

txtQuestion = "This is the first test question. Correct answer is Answer1";
txtAnswer = "Answer1";
gameType = "stringgame";
txtRightPrompt = "That's correct!";
txtWrongPrompt = "That's wrong!";
loadQuestion();

txtQuestion = "This is the second test question. Answer is 5";
txtAnswer = 5;
gameType = "numbergame";
txtRightPrompt = "That's correct!";
txtWrongPrompt = "EMPTY";//just null for now to test
loadQuestion();

var gameLength = arrayQues.length;

console.log("Questions: " + arrayQues);
console.log("Answers: " + arrayAns);
console.log("Right Prompts: " + arrayRight);
console.log("Wrong Prompts: " + arrayWrong);
console.log("Game Type: " + arrayGameType);
console.log("Game Length: " + gameLength);

var scoreCorrect = 0;
var gameCount = 1;
var gameGuess = 0;
var i = 0; //will this work if here?

function gameNumber () { //removed gameGuess and arrayAns[i] from the brackets.
  if (gameGuess + arrayAns[i] < arrayAns[i] * 2) {
    elQuestionPrompt.textContent = "That guess is too low. Try again!";
    tryAgain();
    buttonGuess();
  } else if (gameGuess + arrayAns[i] > arrayAns[i] * 2) {
    elQuestionPrompt.textContent = "That guess is too high. Try again!";
    tryAgain();
    buttonGuess();
  } else if (gameGuess + arrayAns[i] === arrayAns[i] * 2) {
    elQuestionPrompt.textContent = arrayRight[i] + "\nOn to the next question!";
    scoreCorrect++;
    console.log("Game number " + gameCount + " scored correctly.");
    // break;
  } else {
    elQuestionPrompt.textContent = "I don't even know what that is. Try again, with numbers this time.";
    tryAgain();
    buttonGuess();
  }
}

function gameString () {
    if (gameGuess !== arrayAns[i]) {
      elQuestionPrompt.textContent = arrayWrong[i];
      // break;
    } else if (gameGuess === arrayAns[i]) {
      elQuestionPrompt.textContent = arrayRight[i];
      scoreCorrect++;
      // break;
    } else {
      console.log("Critical error: String not checking.")
    }
  }

function buttonGuess () {
  gameGuess = prompt("Enter your guess.").toUpperCase();
  console.log("Game number " + gameCount + " answer entered:" + gameGuess)
}

function tryAgain () {
  elNext.textContent = "Try again!";
  console.log("Game number " + gameCount + " trying again.")
}

// function buttonNext () {
//   elNext.textContent = "Click for next question.";
//   if (buttonOnClick) {
//     console.log("buttonNext buttonOnClick triggered.")
//   } else {
//     break;
//   }
// }

// // gameOpening puts intro text in place.
// function gameOpening () {
//   elQuestion.textContent = "This is the guessing game!";
//   elQuestionPrompt.textContent = "Click the button to make your guess.";
//   elNext.textContent =  "Click to start!";
// }

function gameReveal () {
  if (scoreCorrect === gameLength) {
    elQuestion.textContent = "Game won.";
    console.log("The Game has been won.");
  } else if (scoreCorrect < gameLength) {
      elQuestion.textContent = "Game lost.";
      console.log("The Game has been lost.");
    } else {
      console.log("Critical error. gameReveal is broken for some reason.")
    }
  }

function gameScore () {
  elScore.textContent = "You have correctly guessed " + scoreCorrect + " out of " + gameLength + "\nYou are on Question " + gameCount;
}

function buttonOnClick () {
  buttonClicked = true;
  console.log("Button has been clicked.")
}

var elQuestion = document.getElementById("bodyQuestionText");
var elQuestionPrompt = document.getElementById("bodyQuestionPrompt");
var elNext = document.getElementById("bodyNext");
var elButton = document.getElementById("bodyButton");
elButton.addEventListener('click', buttonOnClick);
var elScore = document.getElementById("bodyScore");
var buttonClicked = false;

elQuestion.textContent = "This is the guessing game!";
elQuestionPrompt.textContent = "Click the button to make your guess.";
elNext.textContent =  "Click to start!";
elButton.onclick = gameBegin();
gameReveal();

function gameBegin () {
  console.log("gameBegin triggered.")
  buttonClicked = false;
  for (i = 0; i < gameLength; i++) {
      elQuestion.textContent = arrayQues[i];
      console.log(arrayQues[i]);
      elQuestionPrompt.textContent = "Click the button to make your guess.";
      elNext.textContent =  "Test your guess!";
      // gameCheckType();
    if (arrayGameType[i] === "NUMBERGAME") {
      console.log("Game " + arrayQues.indexOf(i) + " is a " + arrayGameType[i] + " and should be NUMBERGAME.");
      gameNumber();
    } else if (arrayGameType[i] === "STRINGGAME") {
      console.log("Game " + arrayQues.indexOf(i) + " is a " + arrayGameType[i] + " and should be STRINGGAME.");
      gameString();
    } else {
      console.log("Critical error. gameType check failed.");
    }
      gameScore();
      gameCount++;
      console.log("Game Round Number: " + gameCount);
      elNext.textContent = "Click for next question.";
    if (buttonOnClick) {
      console.log("buttonNext buttonOnClick triggered.")
    } else {
      break;
    }
  }
}

// function gameCheckType () {
//   if (arrayGameType[i] === "NUMBERGAME") {
//     console.log("Game " + arrayQues.indexOf(i) + " is a " + arrayGameType[i] + " and should be guessNumber.");
//     gameNumber();
//   } else if (arrayGameType[i] === "STRINGGAME") {
//     console.log("Game " + arrayQues.indexOf(i) + " is a " + arrayGameType[i] + " and should be guessString.");
//     gameString();
//   } else {
//     console.log("Critical error. gameType check failed.");
//   }
// }


// repeat this block to load questions
// txtQuestion = ""; // enter the entire question text, with logic. (eg, "I'm thinking of a number. Enter a number between 1 and 10.")
// txtAnswer = ""; // this is the element that will be checked for right/wrong. Currently can handle single integers or any single string
// gameType = // two game types are possible: NumberGame and StringGame
// txtRightPrompt = "";
// txtWrongPrompt = ""; // Leave blank for NumberGame games. (Don't yet know if this will push a blank space to array!)
// loadQuestion;
