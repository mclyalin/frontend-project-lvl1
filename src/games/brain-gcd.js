import { makePair, getRandomInt, getGcd } from '../lib.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generator = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const question = `${firstNum} ${secondNum}`;
  const answer = `${getGcd(firstNum, secondNum)}`;

  return makePair(question, answer);
};

export default () => makePair(rules, generator);
