import getRandInt from '../utils';
import playBrainGame from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const minRnd = 1;
const maxRnd = 100;

const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));

const getQuestionAndAnswer = () => {
  const numberForQuestion1 = getRandInt(minRnd, maxRnd);
  const numberForQuestion2 = getRandInt(minRnd, maxRnd);

  const question = `${numberForQuestion1} ${numberForQuestion2}`;
  const correctAnswer = String(getGCD(numberForQuestion1, numberForQuestion2));

  const questionAndAnswer = {
    question,
    correctAnswer,
  };
  return questionAndAnswer;
};

const startGCDGame = () => {
  playBrainGame(getQuestionAndAnswer, description);
};

export default startGCDGame;
