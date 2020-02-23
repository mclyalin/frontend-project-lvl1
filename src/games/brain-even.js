import { makeQuest, getRandomInt } from '../lib.js';
import gameShell from '../index.js';


const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateQuest = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return makeQuest(question.toString(), correctAnswer);
};

export default () => gameShell(gameTask, generateQuest);
