import { makePair, getRandomInt, isPrime } from '../lib.js';
import gameShell from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generator = () => {
  const num = getRandomInt();

  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  return makePair(question, answer);
};

const game = makePair(gameTask, generator);

export default () => gameShell(game);
