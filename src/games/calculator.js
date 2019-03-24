import getRandInt from '../utils';
import playBrainGame from '../index';

const description = 'What is the result of the expression?';

const minRnd = 1;
const maxRnd = 100;
const operators = '-+*';

const getCorrectAnswer = (n1, n2, operator) => {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return false;
  }
};

const getQuestionAndAnswer = () => {
  const numberForQuestion1 = getRandInt(minRnd, maxRnd);
  const numberForQuestion2 = getRandInt(minRnd, maxRnd);
  const action = operators[getRandInt(1, operators.length)];

  const question = `${numberForQuestion1} ${action} ${numberForQuestion2}`;
  const correctAnswer = String(getCorrectAnswer(numberForQuestion1, numberForQuestion2, action));

  const questionAndAnswer = {
    question,
    correctAnswer,
  };

  return questionAndAnswer;
};

const startCalcGame = () => {
  playBrainGame(getQuestionAndAnswer, description);
};

export default startCalcGame;
