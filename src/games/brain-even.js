import { makePair, getRandomInt } from '../lib.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generator = () => {
  const question = getRandomInt();
  const answer = question % 2 ? 'no' : 'yes';
  return makePair(question, answer);
};

export default () => makePair(rules, generator);
