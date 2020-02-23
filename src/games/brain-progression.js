import { makeQuest, getRandomInt } from '../lib.js';
import gameShell from '../index.js';


const gameTask = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const iter = (counter, num, acc) => {
    if (counter > length) {
      return acc;
    }
    return iter(counter + 1, num + step, [...acc, num]);
  };

  return iter(1, start, []);
};

const generateQuest = () => {
  const length = 10;
  const border = 100;

  const minStep = 2;
  const maxStep = 9;
  const step = getRandomInt(minStep, maxStep);

  const minNum = 1;
  const maxNum = border - (step * length);
  const num = getRandomInt(minNum, maxNum);

  const progression = generateProgression(num, step, length);
  const index = getRandomInt(0, length - 1);
  const correctAnswer = progression[index];

  const hidden = '..';
  progression[index] = hidden;
  const question = progression.join(' ');

  return makeQuest(question, correctAnswer.toString());
};

export default () => gameShell(gameTask, generateQuest);
