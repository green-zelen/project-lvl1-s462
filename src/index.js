import readlineSync from 'readline-sync';

export const getRandInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const maxRounds = 3;

const gameRound = (question, roundCounter) => {
  if (roundCounter > maxRounds) {
    return true;
  }

  if (!question()) {
    return false;
  }
  return gameRound(question, roundCounter + 1);
};

export const startBrainGame = (question, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (!gameRound(question, 1)) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startBrainGame;
