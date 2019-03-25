import readlineSync from 'readline-sync';

const playBrainGame = (getQuestionAndAnswer, description) => {
  const maxRounds = 3;
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= maxRounds; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    console.log(`Question: ${questionAndAnswer.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questionAndAnswer.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${questionAndAnswer.correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === maxRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
  return true;
};

export default playBrainGame;
