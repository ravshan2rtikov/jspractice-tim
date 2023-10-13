const prompt = require('prompt-sync')();

let win = 0;
let loss = 0;
let ties = 0;

while (true) {
  const playerChoice = prompt('Enter rock, paper, or scissors (or q to quit): ');
  if (playerChoice === 'q') {
    break;
  } 

  if (playerChoice !== 'rock' && 
    playerChoice !== 'paper' && 
    playerChoice !=='scissors') {
      console.log('Please enter a valid choice!');
      continue;
    }
  
  
  const choices = ['rock', 'paper','scissors'];
  const randomIndex = Math.round(Math.random() * 2);
  const computerChoice = choices[randomIndex];

  console.log('The computer chose:', computerChoice);

  if (computerChoice === playerChoice) {  
    console.log('Tie!');
    ties++;
  } else if (
    (playerChoice === 'rock' && computerChoice ==='scissors') ||
    (playerChoice ==='scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    console.log('You win!');
    win++;
  } else {
  console.log('You lost!');
  loss++;
  }
}

console.log('Wins:', win,'Ties:', ties,'Losses:', loss);
