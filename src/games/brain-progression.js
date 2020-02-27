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
  const startNum = getRandomInt(minNum, maxNum);

  const progression = generateProgression(startNum, step, length);
  const hiddenElementIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[hiddenElementIndex];

  const hiddenElement = '..';
  progression[hiddenElementIndex] = hiddenElement;
  const question = progression.join(' ');

  return makeQuest(question, correctAnswer.toString());
};

export default () => gameShell(gameTask, generateQuest);
