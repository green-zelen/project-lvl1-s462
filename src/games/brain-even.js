import readlineSync from 'readline-sync';
import { getRandInt } from '../index';

export const rules = 'Answer "yes" if number even otherwise answer "no".';

const minRnd = 1;
const maxRnd = 100;

const isEven = num => num % 2 === 0;
const isEvenAsStr = n => (isEven(n) ? 'yes' : 'no');
const isCorrect = (num, answer) => {
  const correctAnswer = isEvenAsStr(num);
  const result = answer === correctAnswer;

  if (result) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(.`);
    console.log(`Correct answer was "${correctAnswer}".`);
  }

  return result;
};

export const question = () => {
  const randomNum = getRandInt(minRnd, maxRnd);
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return isCorrect(randomNum, userAnswer);
};
export default question;
