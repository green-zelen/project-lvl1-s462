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

const question = () => {
  const n1 = getRandInt(minRnd, maxRnd);
  const n2 = getRandInt(minRnd, maxRnd);
  const action = operators[getRandInt(1, operators.length)];

  const questionText = `Question: ${n1} ${action} ${n2}`;
  const correctAnswerText = String(getCorrectAnswer(n1, n2, action));

  const questionAndAnswer = {
    question: questionText,
    correctAnswer: correctAnswerText,
  };

  return questionAndAnswer;
};

const startCalcGame = () => {
  playBrainGame(question, description);
};

export default startCalcGame;
