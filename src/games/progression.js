import getRandInt from '../utils';
import playBrainGame from '../index';

const description = 'What number is missing in the progression?';

const minRnd = 1;
const maxRnd = 100;
const length = 10;

const getProgression = (startNum, step, size) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const question = () => {
  const start = getRandInt(minRnd, maxRnd);
  const step = getRandInt(minRnd, maxRnd);
  const problemPosition = getRandInt(1, length) - 1;

  const progression = getProgression(start, step, length);
  const correctAnswer = String(progression[problemPosition]);
  progression[problemPosition] = '..';

  const questionText = `Question: ${progression}`;

  const questionAndAnswer = {
    question: questionText,
    correctAnswer,
  };
  return questionAndAnswer;
};

const startProgressionGame = () => {
  playBrainGame(question, description);
};

export default startProgressionGame;
