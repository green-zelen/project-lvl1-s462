import readlineSync from 'readline-sync';

const playBrainGame = (getQuestionAndAnswer, description) => {
  const maxRounds = 3;
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < maxRounds; i += 1) {
    const question = getQuestionAndAnswer();
    console.log(`Question: ${question.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === question.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${question.correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playBrainGame;
