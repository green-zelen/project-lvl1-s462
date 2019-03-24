import getRandInt from '../utils';
import playBrainGame from '../index';

const description = 'Answer "yes" if number even otherwise answer "no".';

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

const startEvenGame = () => {
  playBrainGame(question, description);
};

export default startEvenGame;
