import getRandInt from '../utils';
import playBrainGame from '../index';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minRnd = 1;
const maxRnd = 100;
const isPrime = (num) => {
  for (let i = 2; i < Math.floor(num / 2 + 1); i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const getQuestionAndAnswer = () => {
  const question = getRandInt(minRnd, maxRnd);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  const gameData = {
    question,
    correctAnswer,
  };

  return gameData;
};

const startPrimeGame = () => {
  playBrainGame(getQuestionAndAnswer, desc);
};

export default startPrimeGame;
