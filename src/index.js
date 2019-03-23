import readlineSync from 'readline-sync';

const roundNum = 3;
const startCounterNum = 1;

const gameRound = (q, counter) => (counter > roundNum || q() === false) ? false : gameRound(q, counter + 1);

export const startBrainGames = (question, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (!gameRound(question, startCounterNum)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startBrainGames;
