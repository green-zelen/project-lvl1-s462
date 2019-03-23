import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const roundNum = 3;

export const startCalculatorGame = (name) => {
  const getRandomAction = () => {
    const actionsStr = '-+*';
    return actionsStr[getRandomInt(1, actionsStr.length)];
  };
  // --
  const calculator = (counter, rounds) => {
    const randomNum1 = getRandomInt(1, 9);
    const randomNum2 = getRandomInt(1, 9);
    const randomAction = getRandomAction();
    const userAnswer = Number(readlineSync.question(`Question: ${randomNum1} ${randomAction} ${randomNum2} Your answer:`));
    const getCorrectAnswer = () => {
      switch (randomAction) {
        case ('+'):
          return randomNum1 + randomNum2;
        case ('-'):
          return randomNum1 - randomNum2;
        case ('*'):
          return randomNum1 * randomNum2;
        default:
          console.log('Неожидаемый знак действия');
          return false;
      }
    };
    const correctAnswer = getCorrectAnswer();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      if (counter < rounds) {
        return calculator(counter + 1, rounds);
      }
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  };
    // --
  calculator(1, roundNum);
};

export default startCalculatorGame;
