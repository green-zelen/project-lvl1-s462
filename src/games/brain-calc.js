import { startBrainGame } from '../index';
import { getRandInt } from '../utils';

export const desc = 'What is the result of the expression?';

const minRnd = 1;
const maxRnd = 100;

const getRandomAction = () => {
  const actions = '-+*';
  return actions[getRandInt(1, actions.length)];
};

const getCorrectAnswer = (n1, n2, act) => {
  switch (act) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      console.log('Wrong action');
      return false;
  }
};

const question = () => {
  const n1 = getRandInt(minRnd, maxRnd);
  const n2 = getRandInt(minRnd, maxRnd);
  const action = getRandomAction();

  const questionText = `Question: ${n1} ${action} ${n2}`;
  const correctAnswerText = String(getCorrectAnswer(n1, n2, action));

  const questionAndAnswer = {
    question: questionText,
    correctAnswer: correctAnswerText,
  };

  return questionAndAnswer;
};

export const startCalcGame = () => {
  startBrainGame(question, desc);
};

export default startCalcGame;
