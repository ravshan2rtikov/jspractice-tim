const prompt = require('prompt-sync')();

const target = Math.round(Math.random() * 100);

let guesses = 0;
console.log(target); 

const guess = Number(prompt('Guess a number between (0-100): '));

while (true) {
  guesses++;

  const guess = Number(prompt('Guess a number between (0-100): '));
  if (guess > target) {
    console.log('Too high!');
  } else if (guess < target) {
    console.log('Too low!');
  } else {
    console.log('You got it!');
    break;
  }
}

console.log('You guessed the number in ' + guesses + ' tries!');