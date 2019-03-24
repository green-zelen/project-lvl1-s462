import { getRandInt } from '../utils';
import { startBrainGame } from '../index';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minRnd = 1;
const maxRnd = 100;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getCorrectAnswer = num => (isPrime(num) ? 'yes' : 'no');

const question = () => {
  const randomNum = getRandInt(minRnd, maxRnd);
  const questionText = `Question: ${randomNum}`;
  const correctAnswerText = getCorrectAnswer(randomNum);

  const questionAndAnswer = {
    question: questionText,
    correctAnswer: correctAnswerText,
  };

  return questionAndAnswer;
};

export const startPrimeGame = () => {
  startBrainGame(question, desc);
};

export default startPrimeGame;
