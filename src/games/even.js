import getRandInt from '../utils';
import playBrainGame from '../index';

const description = 'Answer "yes" if number even otherwise answer "no".';

const minRnd = 1;
const maxRnd = 100;
const isEven = num => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const numberForQuestion = getRandInt(minRnd, maxRnd);
  const question = `${numberForQuestion}`;
  const correctAnswer = (isEven(numberForQuestion) ? 'yes' : 'no');

  const questionAndAnswer = {
    question,
    correctAnswer,
  };

  return questionAndAnswer;
};

const startEvenGame = () => {
  playBrainGame(getQuestionAndAnswer, description);
};

export default startEvenGame;
