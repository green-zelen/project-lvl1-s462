import readlineSync from 'readline-sync';

// Переменная, в которой хранится имя
export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const evenOdd = (counter, name) => {
  let answersCounter = counter;
  const randomNum = Math.floor((Math.random() * 100));
  const userAnswer = readlineSync.question(`Question: ${randomNum} Your answer:`);

  if ((randomNum % 2 === 0 && userAnswer === 'yes') || (randomNum % 2 !== 0 && userAnswer === 'no')) {
    console.log('Correct!');
    if (counter < 3) {
      answersCounter += 1;
      return evenOdd(answersCounter, name);
    }
    console.log(`Congratulations, ${name}!`);
    return true;
  }
  if (userAnswer === 'yes') {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
    return false;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
  return false;
};

export const startBrainEven = () => {
  // Счетчик
  const operationsCounter = 1;
  const userName = askUserName();
  evenOdd(operationsCounter, userName);
};
export default startBrainEven;
