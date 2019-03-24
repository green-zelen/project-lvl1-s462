import readlineSync from 'readline-sync';

const maxRounds = 3;

const gameRound = (getQuestionAndAnswer, roundCounter) => {
  if (roundCounter > maxRounds) {
    return true;
  }
  const question = getQuestionAndAnswer();
  console.log(question.question);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== question.correctAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(.`);
    console.log(`Correct answer was "${question.correctAnswer}".`);
    return false;
  }
  console.log('Correct!');
  return gameRound(getQuestionAndAnswer, roundCounter + 1);
};

const playBrainGame = (getQuestionAndAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (!gameRound(getQuestionAndAnswer, 1)) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default playBrainGame;
