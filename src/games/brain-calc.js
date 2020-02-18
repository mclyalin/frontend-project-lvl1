import { makePair, getRandomInt, calculate } from '../lib.js';
import gameShell from '../index.js';

const gameTask = 'What is the result of the expression?';

const operatorTypes = ['+', '-', '*'];

const generator = () => {
  const firstOperand = getRandomInt();
  const secondOperand = getRandomInt();

  const lastIndex = operatorTypes.length - 1;
  const randomIndex = getRandomInt(0, lastIndex);
  const operator = operatorTypes[randomIndex];

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = `${calculate(firstOperand, secondOperand, operator)}`;

  return makePair(question, answer);
};

const game = makePair(gameTask, generator);

export default () => gameShell(game);
