"use strict";

function guessNumber () {
  let number = 37;

  function checkVersion () {
    let version = +prompt('Угадай число от 1 до 100!');

    if (version === number) {
      alert('Ты угадал!')
    } else if (version > number) {
      alert('Загаданное число меньше!');
      return guessNumber();
    } else {
      alert('Загаданное число больше!');
      return guessNumber();
    }
  }

  return checkVersion();
}

guessNumber();