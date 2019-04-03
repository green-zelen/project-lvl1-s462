import readlineSync from 'readline-sync';

const maxRounds = 3;

const playBrainGame = (getQuestionAndAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  let questionAndAnswer = [];
  let userAnswer = '';
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= maxRounds; i += 1) {
    questionAndAnswer = getQuestionAndAnswer();
    console.log(`Question: ${questionAndAnswer.question}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questionAndAnswer.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${questionAndAnswer.correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playBrainGame;
