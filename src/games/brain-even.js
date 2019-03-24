import { getRandInt } from '../utils';
import { startBrainGame } from '../index';

export const desc = 'Answer "yes" if number even otherwise answer "no".';

const minRnd = 1;
const maxRnd = 100;

const isEven = num => num % 2 === 0;
const getCorrectAnswer = n => (isEven(n) ? 'yes' : 'no');

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

export const startEvenGame = () => {
  startBrainGame(question, desc);
};

export default startEvenGame;
