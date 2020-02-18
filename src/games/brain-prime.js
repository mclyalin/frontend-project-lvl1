import { makePair, getRandomInt } from '../lib.js';
import gameShell from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generator = () => {
  const number = getRandomInt();

  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

  return makePair(question, answer);
};

const game = makePair(gameTask, generator);

export default () => gameShell(game);
