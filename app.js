// TODO: Can't work out how to pause the prompt after the first round is finished.

var arrayQues = [];
var arrayAns = [];
var arrayGameType = [];
var arrayRewardSrc = [];
var arrayRewardName = [];

var arrayRewardLoader = [];
var arrayUserName = [];

userName = prompt("Enter your name.");
arrayUserName.push(userName);

var txtQuestion = "Welcome to the game " + arrayUserName[0];
var txtAnswer = "BEGINGAME";
var gameType = "BEGINGAME";
var txtRewardName = "BEGINGAME";
var txtRewardSrc = "";
loadQuestion();

txtQuestion = "This is the first test question. Answer is 5";
txtAnswer = "5";
gameType = "numbergame";
txtRewardName = "Magic Wand"
txtRewardSrc = "images/wand.png";
loadQuestion();

txtQuestion = "This is the second test question. Answer is Apples";
txtAnswer = "Apples";
gameType = "stringGame";
txtRewardName = "Glittering Gem"
txtRewardSrc = "images/wand.png";
loadQuestion();

txtQuestion = "This is the third test question. Answer is 10";
txtAnswer = "10";
gameType = "numbergame";
txtRewardName = "Blasted Thing"
txtRewardSrc = "http://www.thinkgeek.com/images/products/zoom/cf9b_the_wand.jpg";
loadQuestion();

function loadQuestion() {
  console.log("loadQuestion triggers.");
  arrayQues.push(txtQuestion);
  arrayAns.push(txtAnswer.toUpperCase());
  arrayGameType.push(gameType.toUpperCase());
  arrayRewardSrc.push(txtRewardSrc);
  arrayRewardName.push(txtRewardName);
  console.log("Questions loaded. Currently loaded: " + gameLength);
}

var gameLength = arrayQues.length;
var gameRound = 0;
var gameDone = 1;
var scoreCorrect = 0;
var gameGuess = 0;
var gameNumberGuess = 0;

console.log("Questions: " + arrayQues);
console.log("Answers: " + arrayAns);
console.log("Game Type: " + arrayGameType);
console.log("Reward Sources: " + arrayRewardSrc);
console.log("Reward Names " + arrayRewardName);
console.log("GAME LENGTH: " + gameLength);

var elQuestion = document.getElementById("bodyQuestionText");
var elRewards = document.getElementById("bodyRewards");
var elAnswerPrompt = document.getElementById("bodyAnswerPrompt");
var elCheckAnswer = document.getElementById("bodyCheckAnswer");
var elBody = document.getElementById("bodyBody");

var elWizards = document.getElementById("wizards");
elWizards.src = "images/wizards.png";

var elButton = document.getElementById("bodyButton");
elButton.addEventListener('click', buttonOnClick);
elButton.innerHTML = "<button>Click to Start!</button>";

elQuestion.textContent = arrayQues[0]; // PLACE HOLDER? for test of username

function buttonOnClick() {
  console.log("buttonOnClick triggers.");
  if (gameRound < gameDone) {
    gameRound++;
    console.log("gameRound: " + gameRound + ", gameDone: " + gameDone);
  } else if (gameRound === gameDone) {
    console.log("Game in progress. gameRound: " + gameRound + ", gameDone: " + gameDone);
  } else if (gameRound === gameLength) {
    console.log("Game is now finished. Checking results.");
    gameResults();
  } else {
    console.log("Critical error: buttonOnClick is looping to the end.")
  }
  elQuestion.textContent = arrayQues[gameRound];
  elAnswerPrompt.textContent = "";
  elButton.addEventListener('click', buttonGuess);
  elButton.innerHTML = "<button>Click to Guess!</button>";
}

function buttonGuess() {
  console.log("buttonGuess triggers.");
  gameGuess = prompt("Enter your guess!");
  console.log("gameGuess is now " + gameGuess);
  elAnswerPrompt.textContent = "You have guessed " + gameGuess + ". Are you sure? Press the button below to check your answer, or guess again!";
  elCheckAnswer.addEventListener('click', buttonCheck);
  elCheckAnswer.innerHTML = "<button>Check your answer!</button>";
  guessTransform();
}

function buttonCheck() {
  console.log("buttonCheck triggers.");
  gameCheck();
}

function guessTransform() {
  console.log("guessTransform triggers.");
  if (arrayGameType[gameRound] === "NUMBERGAME") {
    // parseInt(gameGuess);
    console.log("guessTransform detects a NUMBERGAME. gameGuess is now " + gameGuess);
  } else if (arrayGameType[gameRound] === "STRINGGAME") {
    gameGuess = gameGuess.toUpperCase();
    console.log("guessTransform detects a STRINGGAME. gameGuess is now " + gameGuess);
  } else {
    console.log("Critical error. gameTransform is failing.");
  } // TODO: needs public fail condition. contact me @
}


function gameCheck() {
  console.log("gameCheck triggers.");
  if (arrayGameType[gameRound] === "NUMBERGAME") {
    console.log("Game " + gameRound + " is a " + arrayGameType[gameRound] + " and should be NUMBERGAME.");
    gameNumber();
  } else if (arrayGameType[gameRound] === "STRINGGAME") {
    console.log("Game " + gameRound + " is a " + arrayGameType[gameRound] + " and should be STRINGGAME.");
    gameString();
  } else {
    console.log("Critical error. gameType check failed.");
  }
}

function gameString () {
  console.log("gameString triggers.");
  if (gameNumberGuess === 3) {
    elAnswerPrompt.textContent = "Foolish knave! You try our patience! You have failed this test! Click for the next game.";
    elButton.innerHTML = "<button>Click for next game!</button>";
    elCheckAnswer.innerHTML = "";
    gameDone++;
    console.log("gameDone is now " + gameDone);
    gameNumberGuess = 0;
    console.log("gameNumberGuess should be reset to 0. It is now " + gameNumberGuess);
  } else if (gameGuess !== arrayAns[gameRound]) {
    elAnswerPrompt.textContent = "That's not right! You have " + (3 - gameNumberGuess) + " tries left.";
    gameNumberGuess++;
    console.log("gameNumberGuess is now " + gameNumberGuess + " out of 3.");
  } else if (gameGuess === arrayAns[gameRound]) {
    elAnswerPrompt.textContent = "Congratulations, noble challenger! You have been awarded the " + arrayRewardName[gameRound] + "!";
    arrayRewardLoader.push(arrayRewardSrc[gameRound]);
    console.log("Awards gained: " + arrayRewardLoader);
    rewardLoader();
    elButton.innerHTML = "<button>Click for next game!</button>";
    elCheckAnswer.innerHTML = "";
    gameDone++;
    console.log("gameDone is now " + gameDone);
    gameNumberGuess = 0;
    console.log("gameNumberGuess should be reset to 0. It is now " + gameNumberGuess);
  } else {
    console.log("Critical error: String not checking.");
  }
}

function gameNumber () {
  console.log("gameNumber triggers.");
  if (gameNumberGuess === 3) {
    elAnswerPrompt.textContent = "Foolish knave! You try our patience! You have failed this test! Click for the next game.";
    elButton.innerHTML = "<button>Click for next game!</button>";
    elCheckAnswer.innerHTML = "";
    gameDone++;
    console.log("gameDone is now " + gameDone);
    gameNumberGuess = 0;
    console.log("gameNumberGuess should be reset to 0. It is now " + gameNumberGuess);
  } else if (gameGuess < arrayAns[gameRound]) {
    elAnswerPrompt.textContent = "That guess is too low. You have " + (3 - gameNumberGuess) + " tries left.";
    console.log("Guess was too low.");
    gameNumberGuess++;
    console.log("gameNumberGuess is now " + gameNumberGuess + " out of 3.");
  } else if (gameGuess > arrayAns[gameRound]) {
    elAnswerPrompt.textContent = "That guess is too high. You have " + (3 - gameNumberGuess) + " tries left.";
    console.log("Guess was too high.");
    gameNumberGuess++;
    console.log("gameNumberGuess is now " + gameNumberGuess + " out of 3.");
  } else if (gameGuess === arrayAns[gameRound]) {
    elAnswerPrompt.textContent = "Congratulations, noble challenger! You have been awarded the " + arrayRewardName[gameRound] + "!";
    arrayRewardLoader.push(arrayRewardSrc[gameRound]);
    console.log("Awards gained: " + arrayRewardLoader);
    rewardLoader();
    elButton.innerHTML = "<button>Click for next game!</button>";
    elCheckAnswer.innerHTML = "";
    gameDone++;
    console.log("gameDone is now " + gameDone);
    gameNumberGuess = 0;
    console.log("gameNumberGuess should be reset to 0. It is now " + gameNumberGuess);
  } else {
    elAnswerPrompt.textContent = "I don't even know what that is. Try again, with numbers this time.";
  }
}

function rewardLoader() {
  console.log("rewardLoader triggers.");
  var rewardStringOne = "<img src='";
  var rewardStringTwo = "'></img>";
  var rewardStringFinal = "";
  for (var i = 0; i < arrayRewardLoader.length; i++) {
    rewardStringFinal += (rewardStringOne + arrayRewardLoader[i] + rewardStringTwo);
  }
  elRewards.innerHTML = rewardStringFinal;
}

function gameResults() {
  console.log("gameResults triggers.");
  if (arrayRewardLoader.length === gameLength) {
      console.log("The game has been won. Score: " + arrayRewardLoader.length + " out of " + gameLength);
      elBody.innerHTML = "<p>place holder, you won</p>" // TODO: navigate to secret page.
  } else if (arrayRewardLoader.length < gameLength) {
    console.log("The game has been lost. " + arrayRewardLoader.length + " out of " + gameLength);
    elWizards.src = "http://s3.amazonaws.com/rapgenius/1373469687_cultures-escape-bulgaria-gandalf-you-shall-not-pass.jpg"; //TODO: find a balrog gif.
    elQuestion.textContent = "Bah! We name you Fool the Foolish! YOU SHALL NOT PASS!";
    elButton.innerHTML = "";
    elAnswerPrompt.textContent = "You lost! You collected " + arrayRewardLoader.length + " out of " + gameLength + " treasures. You suck.";
  }

}
