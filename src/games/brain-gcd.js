import readlineSync from 'readline-sync';
import { getRandInt } from '../index';

export const rules = 'Find the greatest common divisor of given numbers.';

const minRnd = 1;
const maxRnd = 100;

const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));
const isCorrect = (n1, n2, userAnswer) => {
  const result = getGCD(n1, n2) === userAnswer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(.`);
    console.log(`Correct answer was "${getGCD(n1, n2)}".`);
  }
  return result;
};

export const question = () => {
  const n1 = getRandInt(minRnd, maxRnd);
  const n2 = getRandInt(minRnd, maxRnd);

  console.log(`Question: ${n1} ${n2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  return isCorrect(n1, n2, userAnswer);
};

export default question;
