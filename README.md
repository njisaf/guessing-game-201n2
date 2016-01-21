# Codefellows Week 1 and 2 Guessing Game
A Guessing Game written for Codefellows Coding 201.

## Status of Project
I am putting this project on the shelf and accepting that I've mostly failed. There's a bug that crops up in the third test question that I can't find, and it's defeated me. I've put about 30 hours into this, in addition to lab hours, and am falling behind the rest of the course. This would need to be 300-350 lines of code at least, for a project that other people accomplished in about 40-50 lines. Admittedly I think I was a bit more ambitious than I needed to be, but not out of some misplaced pride -- I honestly thought this would be easier. The original idea was something like this:

- The back end user repeats a standard block of code to enter in question parameters.
- A function loads the code into arrays.
- A for-loop iterates over the arrays, loading the stored text onto the front end.
- The front end user plays the game. The only prompt necessary would be to load the guess. Everything else would be displayed on the page.
- The game detects the type of question being asked (guess a number range, or guess a string) and executes a function to check the answer.
- Score is tracked through "awards" displayed as images at the bottom of the page.
- If the front end user get all the questions right, a secret page is revealed.

I thought I would barely have to write any code at all. You could easily add new questions and the program would automatically integrate them. Even better, if you wanted to add new types of game all you would need to do was write a function for that and add a couple lines to the gameCheck function (line 129.) Or so I thought...

The problem was that I had no idea how buttons work. I somehow believed for-loops would magically pause every time there was a button to press, but they just keep on loopin' and they don't care. I kept adding more and more bizarre functions to try and pause the for-loop in the right places. Then I gave up and decided to handle the entire thing through tracking button click events only, which only required rewriting about 75% of everything. (The original code is mostly preserved in draft.js.)

 Unfortunately, .addEventListener to detect clicks has a bunch of limitations, and fell into the same trap of adding more and more functions. It always felt like I was one more function away from making it work perfectly. The list of things that don't work properly is pretty long.

It's not a total loss. Here are some of the things I learned for myself:
- If something isn't working, solve it or abandon it right away. Don't push on in the hopes that you can come back and solve it later, because the solution might ruin something else and it'll be way harder to work out why.
- Debugging. At some point I just started adding console.log messages to everything I thought was significant, and wish I'd added more. At the end I was so confused by my own code that it was the only way I could track what was going on.
- Design. I'm learning that actually writing code is by far the easiest thing going on here. Once you've memorized the syntax it's hardly complicated at all. I can bang out hundreds of line of code in no time at all, but the result is kind of like trying to drive to a destination as the crow flies. I crashed a lot.

One thing I'm pretty proud of is the code that loads the reward images:

```
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
```

The sources for reward images are entered by the backend user in a variable called txtRewardSrc and stored in an array called arrayRewardSrc. When game-winning conditions are met, whatever is at the indexed position of arrayRewardSrc is pushed into arrayRewardLoader (see Line 193 in the js for an example.) The rewardLoader for-loop then builds innerHTML for all items in the arrayRewardLoader and pushes it to the "bodyRewards" tag on the front. I give myself bonus points because it doesn't require a dozen additional functions to work...

I might come back to this when I know more and get it working properly. I have several good ideas but no more time.

### Credits
Based on original code by [Daniel Wade](https://github.com/dcwade87/guessing-game-201n2).
CSS design by [Erin Roby](https://github.com/erinroby).

### Resources Used
- Wizard image from: http://pegbar.ie/site/index.php/sir-terry-pratchett-opens-the-duel/
- First wand image from: http://runescape.wikia.com/wiki/File:Wizard_wand_detail.png
- Second wand image from: http://www.thinkgeek.com/images/products/zoom/cf9b_the_wand.jpg

This file last edited by Nassir Isaf 01/16/2016
