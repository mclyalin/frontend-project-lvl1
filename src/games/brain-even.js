import { makePair, getRandomInt, isEven } from '../lib.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const generator = () => {
  const num = getRandomInt();

  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';

  return makePair(question, answer);
};

export default () => makePair(gameTask, generator);
