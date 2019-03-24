import { getRandInt } from '../utils';
import { startBrainGame } from '../index';

export const desc = 'What number is missing in the progression?';

const minRnd = 1;
const maxRnd = 100;
const progLength = 10;

const getProgression = (startNum, step, size) => {
  const prog = [];
  let counter = 1;
  let currentStep = startNum;

  while (counter < size) {
    prog.push(currentStep);
    currentStep += step;
    counter += 1;
  }
  return prog;
};

const question = () => {
  const start = getRandInt(minRnd, maxRnd);
  const step = getRandInt(minRnd, maxRnd);
  const problemPosition = getRandInt(1, progLength);

  const prog = getProgression(start, step, progLength);
  const correctAnswerText = String(prog[problemPosition - 1]);
  prog[problemPosition - 1] = '..';

  const questionText = `Question: ${prog}`;

  const questionAndAnswer = {
    question: questionText,
    correctAnswer: correctAnswerText,
  };
  return questionAndAnswer;
};

export const startProgressionGame = () => {
  startBrainGame(question, desc);
};

export default startProgressionGame;
