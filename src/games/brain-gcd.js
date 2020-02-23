import { makeQuest, getRandomInt } from '../lib.js';
import gameShell from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGcd(b, a % b);
};

const generateQuest = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = calculateGcd(firstNum, secondNum);

  return makeQuest(question, correctAnswer.toString());
};

export default () => gameShell(gameTask, generateQuest);
