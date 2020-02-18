import { makePair, getRandomInt } from '../lib.js';
import gameShell from '../index.js';


const gameTask = 'What number is missing in the progression?';

const getRandomProgression = (length, border, maxStep) => {
  const minStep = 2;
  const step = getRandomInt(minStep, maxStep);

  const minNum = 1;
  const maxNum = border - (step * length);
  const firstNum = getRandomInt(minNum, maxNum);

  const iter = (acc, num, arr) => {
    if (acc > length) {
      return arr;
    }
    return iter(acc + 1, num + step, [...arr, num]);
  };

  return iter(1, firstNum, []);
};

const generator = () => {
  const length = 10;
  const border = 100;
  const maxStep = 9;

  const array = getRandomProgression(length, border, maxStep);
  const lastIndex = length - 1;
  const hiddenIndex = getRandomInt(0, lastIndex);

  const answer = `${array[hiddenIndex]}`;
  array[hiddenIndex] = '..';
  const question = array.join(' ');

  return makePair(question, answer);
};

const game = makePair(gameTask, generator);

export default () => gameShell(game);
