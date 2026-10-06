// This function generates a random number between the start and end values (inclusive)
export function generateRandomNumber(start, end) {
  return start + Math.floor(Math.random() * (end - start + 1));
}

// Uncomment the following lines to test the generateRandomNumber function
// for (let i = 0; i < 20; i++) {
//   console.log(generateRandomNumber(0, 3));
// }

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

// export function equalArrays(arr1, arr2) {
//   //if the arrays are not the same length, return false
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let result = true;
//   //if the arrays are the same length, compare each element
//   arr1.forEach((element, index) => {
//     // console.log(`${element} == ${arr2[index]}`, element == arr2[index]);

//     result = result && (element == arr2[index]);
//   });

//   return result;
// };