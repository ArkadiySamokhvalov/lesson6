"use strict";

function guessNumber() {
  let number = randomInteger(),
      attempts = 10;

  function checkVersion() {
    let version = prompt('Угадайте число от 1 до 100!');

    if (parseInt(version)) {
      if (version == number) {
        if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) return guessNumber();
      } else if (version > number) {
        alert('Загаданное число меньше, осталось попыток ' + --attempts);
        if (attempts === 0)
          if (confirm('Попытки закончились, хотели бы сыграть еще?')) return guessNumber();
          else {
            alert('Спасибо за игру! Приходите ещё!');
            return null;
          }
        return checkVersion();
      } else {
        alert('Загаданное число больше, осталось попыток ' + --attempts);
        if (attempts === 0)
          if (confirm('Попытки закончились, хотели бы сыграть еще?')) return guessNumber();
          else {
            alert('Спасибо за игру! Приходите ещё!');
            return null;
          }
        return checkVersion();
      }
    } else {
      if(version === null) alert('Спасибо за игру! Приходите ещё!');
      else {
        alert('Введи число!'); 
        return checkVersion();
      }
    }
  }

  return checkVersion();
}

function randomInteger() {
  let rand = 1 + Math.random() * (99 + 1 - 1);
  return Math.floor(rand);
}

guessNumber();