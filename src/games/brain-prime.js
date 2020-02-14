import { makePair, getRandomInt, isPrime } from '../lib.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generator = () => {
  const num = getRandomInt();

  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  return makePair(question, answer);
};

export default () => makePair(rules, generator);
