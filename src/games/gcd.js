import getRandInt from '../utils';
import playBrainGame from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const minRnd = 1;
const maxRnd = 100;

const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));

const question = () => {
  const n1 = getRandInt(minRnd, maxRnd);
  const n2 = getRandInt(minRnd, maxRnd);

  const questionText = `Question: ${n1} ${n2}`;
  const correctAnswerText = String(getGCD(n1, n2));

  const questionAndAnswer = {
    question: questionText,
    correctAnswer: correctAnswerText,
  };
  return questionAndAnswer;
};

const startGCDGame = () => {
  playBrainGame(question, description);
};

export default startGCDGame;