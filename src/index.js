import readlineSync from 'readline-sync';

// Переменная, в которой хранится имя
let userName = '';

export const askUserName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// Счетчик
let operationsCounter = 1;
export let randomNum = Math.floor((Math.random() * 100));

export const evenOdd = (num, answer) => {
  if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    if (operationsCounter < 3) {
      randomNum = Math.floor((Math.random() * 100));
      operationsCounter += 1;
      return evenOdd(randomNum, readlineSync.question(`Question: ${randomNum} Your answer: `));
    }
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  if (answer === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
    return false;
  }
  console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
  return false;
};

export default evenOdd;
