import { makePair, getRandomInt, getGcd } from '../lib.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const generator = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const question = `${firstNum} ${secondNum}`;
  const answer = `${getGcd(firstNum, secondNum)}`;

  return makePair(question, answer);
};

export default () => makePair(gameTask, generator);
