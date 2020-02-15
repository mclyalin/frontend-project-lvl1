import { makePair, getRandomInt, getRandomProgression } from '../lib.js';

const gameTask = 'What number is missing in the progression?';

const generator = () => {
  const length = 10;
  const border = 100;
  const maxStep = 9;

  const array = getRandomProgression(length, border, maxStep);
  const lastIndex = length - 1;
  const hiddenIndex = getRandomInt(0, lastIndex);

  const answer = `${array[hiddenIndex]}`;
  array[hiddenIndex] = '..';
  const question = `${array.join(' ')}`;

  return makePair(question, answer);
};

export default () => makePair(gameTask, generator);
