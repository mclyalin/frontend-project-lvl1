import { makePair, getRandomInt, getRandomProgression } from '../lib.js';

const rules = 'What number is missing in the progression?';

const generator = () => {
  const length = 10;
  const array = getRandomProgression(length);
  const lastIndex = length - 1;
  const hiddenIndex = getRandomInt(0, lastIndex);

  const answer = `${array[hiddenIndex]}`;
  array[hiddenIndex] = '..';
  const question = `${array.join(' ')}`;

  return makePair(question, answer);
};

export default () => makePair(rules, generator);
