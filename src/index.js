import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

export const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const evenOdd = (counter, answers) => {
  const randomNum = getRandomInt(1, 999);
  const userAnswer = readlineSync.question(`Question: ${randomNum} Your answer:`);
  const getCorrectAnswer = () => (randomNum % 2 === 0 ? 'yes' : 'no');
  const correctAnswer = getCorrectAnswer();

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    if (counter < answers) {
      return evenOdd(counter + 1, answers);
    }
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
  return false;
};

export default evenOdd;
