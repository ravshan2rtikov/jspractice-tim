const prompt = require('prompt-sync')();

console.log('Welcome to the Computer Hardware Quiz!');

let correctAnswers = 0;
const totalQuestions = 3;


const answer1 = prompt('What is the brain of the computer?: ');
const correctAnswer1 = 'CPU';

if (answer1.toUpperCase() === correctAnswer1) {
  console.log('You got it Correct!');
  correctAnswers++;
} else {
  console.log('You got it Wrong!');
}

const answer2 = prompt('What is better a 3090ti pr 4090ti?: ');
const correctAnswer2 = '3090ti';

if (answer2.toLowerCase() === correctAnswer2) {
  console.log('You got it Correct!');
  correctAnswers++;
} else {
  console.log('You got it Wrong!');
}

const answer3 = prompt('What is a recommend RAM in 2023?: ');
const correctAnswer3 = '16GB';

if (answer3.toUpperCase() === correctAnswer3) {
  console.log('You got it Correct!');
  correctAnswers++;
} else {
  console.log('You got it Wrong!');
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log('You got ' + correctAnswers + ' out of 3 questions correct!');
console.log('You scored ' + percent.toString() + '%!');