import readlineSync from 'readline-sync';

// internal
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = num => num % 2 === 0;
const isEvenAsStr = n => (isEven(n) ? 'yes' : 'no');
const isCorrect = (num, answer) => {
  const correctAnswer = isEvenAsStr(num);
  const res = answer === correctAnswer;
  if (res) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  }
  return res;
};

// external
export const question = () => {
  const randomNum = getRandomInt(1, 100);
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return isCorrect(randomNum, userAnswer);
};

export default question;
