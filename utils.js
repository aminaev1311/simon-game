// This function generates a random number between the start and end values (inclusive)
export function generateRandomNumber(start, end) {
  return start + Math.floor(Math.random() * (end - start + 1));
}

export const playSound = (soundName) => {
  let sound = new Audio("./sounds/" + soundName + ".mp3");
  sound.play();
}

export const animatePress = (colour) => {
  $('#' + colour).addClass('pressed');
  setTimeout(() => {
    $('#' + colour).removeClass('pressed');
  }, 100);
}

export const animateGameOver = () => {
  $('body').addClass('game-over');
  setTimeout(() => {
    $('body').removeClass('game-over');
  }, 200);
}

export const animateWin = () => {
  $('body').addClass('game-won');
  setTimeout(() => {
    $('body').removeClass('game-won');
  }, 200);
}