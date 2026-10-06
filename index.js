import { generateRandomNumber, playSound, animatePress, animateGameOver, animateWin } from "./utils.js";

let colors = ["green", "red", "blue", "yellow"];
let started = false;
let level = 0;
let game = [];
let player = [];
const MAX_LEVEL = 5;

//the user presses a key to start
//this is the orchestrator
$(document).on('keydown', (e) => {
  if (!started) {
    console.log(e.code);
    started = true;
    console.log("game started");

    gameMove();
  }
});

const gameMove = () => {
  level++;
  $('h1').text(`Level ${level}`);

  let randomNumber = generateRandomNumber(0, 3);
  let gameColor = colors[randomNumber];
  console.log("game color: ", gameColor);
  game.push(gameColor);
  console.log("game: ", game);

  animatePress(gameColor);
  playSound(gameColor);
};

$(".btn").click((e) => {
  let chosenColor = e.target.id;

  player.push(chosenColor);
  animatePress(chosenColor);
  playSound(chosenColor);

  // console.log("player color: ", chosenColor);
  // console.log(e.target.id);
  console.log("player: ", player);

  console.log("click's number: ", player.length);
  checkAnswer(player.length - 1);

});

const checkAnswer = (currentLevel) => {
  //Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (player[currentLevel] == game[currentLevel]) {
    console.log("success");
    if (player.length === game.length) {
      //If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (game.length == MAX_LEVEL) {
        console.log("win");
        setTimeout(gameWon, 500);
      } else {
        player = [];
        setTimeout(gameMove, 1000);
      }
    }
  } else {
    console.log("wrong");
    gameOver();
  }
}

const gameOver = () => {
  animateGameOver();
  playSound('wrong');
  $('h1').text("Game Over, Press Any Key to Restart");
  restartGame();
};

const gameWon = () => {
  animateWin();
  playSound('success');
  $('h1').text("You won! Press Any Key to Restart");
  restartGame();
}

const restartGame = () => {
  started = false;
  level = 0;
  game = [];
  player = [];
}











