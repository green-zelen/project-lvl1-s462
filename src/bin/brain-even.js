import readlineSync from 'readline-sync';
import { askUserName, evenOdd, randomNum } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
askUserName();

evenOdd(randomNum, readlineSync.question(`Question: ${randomNum} Your answer:`));
