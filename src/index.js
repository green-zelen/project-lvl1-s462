import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const startBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const startCalculatorGame = (roundsUntilEnd) => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // --
  const getRandomAction = () => {
    const actionsStr = '-+*';
    return actionsStr[getRandomInt(1, actionsStr.length)];
  };
  // --
  const calculator = (counter, rounds) => {
    const randomNum1 = getRandomInt(1, 999);
    const randomNum2 = getRandomInt(1, 999);
    const randomAction = getRandomAction();
    const userAnswer = Number(readlineSync.question(`Question: ${randomNum1} ${randomAction} ${randomNum2} Your answer:`));
    const getCorrectAnswer = () => {
      if (randomAction === '+') {
        return randomNum1 + randomNum2;
      }
      if (randomAction === '-') {
        return randomNum1 - randomNum2;
      }
      if (randomAction === '*') {
        return randomNum1 * randomNum2;
      }
      console.log('Неожидаемый знак действия');
      return false;
    };
    const correctAnswer = getCorrectAnswer();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      if (counter < rounds) {
        return calculator(counter + 1, rounds);
      }
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
    return false;
  };
  // --
  calculator(1, roundsUntilEnd);
};

export const startEvenOddGame = (roundsUntilEnd) => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // --
  const evenOdd = (counter, rounds) => {
    const randomNum = getRandomInt(1, 999);
    const getCorrectAnswer = () => (randomNum % 2 === 0 ? 'yes' : 'no');

    const userAnswer = readlineSync.question(`Question: ${randomNum} Your answer:`);
    const correctAnswer = getCorrectAnswer();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      if (counter < rounds) {
        return evenOdd(counter + 1, rounds);
      }
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
    return false;
  };
  // --
  evenOdd(1, roundsUntilEnd);
};
export default startEvenOddGame;
