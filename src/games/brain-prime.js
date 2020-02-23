import { makeQuest, getRandomInt } from '../lib.js';
import gameShell from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const maxDiv = num / 2;
  let div = 2;

  while (div <= maxDiv) {
    if (num % div === 0) {
      return false;
    }
    div += 1;
  }

  return true;
};

const generateQuest = () => {
  const question = getRandomInt();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return makeQuest(question, correctAnswer.toString());
};

export default () => gameShell(gameTask, generateQuest);
