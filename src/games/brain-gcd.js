import { makePair, getRandomInt } from '../lib.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const generator = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const question = `${firstNum} ${secondNum}`;
  const answer = `${getGcd(firstNum, secondNum)}`;

  return makePair(question, answer);
};

export default () => makePair(rules, generator);
