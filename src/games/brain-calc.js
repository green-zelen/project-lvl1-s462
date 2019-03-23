import readlineSync from 'readline-sync';
import { getRandInt } from '../index';

export const rules = 'What is the result of the expression?';

const minRnd = 1;
const maxRnd = 100;

const getRandomAction = () => {
  const actionsStr = '-+*';
  return actionsStr[getRandInt(1, actionsStr.length)];
};

const isCorrect = (n1, n2, act, userAnswer) => {
  let correctAnswer;
  switch (act) {
    case '+':
      correctAnswer = n1 + n2;
      break;
    case '-':
      correctAnswer = n1 - n2;
      break;
    case '*':
      correctAnswer = n1 * n2;
      break;
    default:
      console.log('Wrong action');
      return false;
  }
  const result = correctAnswer === userAnswer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(.`);
    console.log(`Correct answer was "${correctAnswer}".`);
  }
  return result;
};

export const question = () => {
  const n1 = getRandInt(minRnd, maxRnd);
  const n2 = getRandInt(minRnd, maxRnd);
  const action = getRandomAction();

  console.log(`Question: ${n1} ${action} ${n2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  return isCorrect(n1, n2, action, userAnswer);
};

export default question;
