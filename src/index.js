import readlineSync from 'readline-sync';

const maxRounds = 3;

const gameRound = (getQuestion, roundCounter) => {
  if (roundCounter > maxRounds) {
    return true;
  }
  const q = getQuestion();
  console.log(q.question);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== q.correctAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(.`);
    console.log(`Correct answer was "${q.correctAnswer}".`);
    return false;
  }
  console.log('Correct!');
  return gameRound(getQuestion, roundCounter + 1);
};

export const startBrainGame = (getQuestion, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (!gameRound(getQuestion, 1)) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default startBrainGame;
