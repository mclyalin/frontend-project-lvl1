import { makePair, getRandomInt } from '../lib.js';
import gameShell from '../index.js';

const gameTask = 'What is the result of the expression?';

const operatorTypes = ['+', '-', '*'];

const generator = () => {
  let question;
  let answer;

  const firstOperand = getRandomInt();
  const secondOperand = getRandomInt();

  const lastIndex = operatorTypes.length - 1;
  const randomIndex = getRandomInt(0, lastIndex);
  const operator = operatorTypes[randomIndex];

  switch (operator) {
    case '+':
      question = `${firstOperand} + ${secondOperand}`;
      answer = `${firstOperand + secondOperand}`;
      break;
    case '-':
      question = `${firstOperand} - ${secondOperand}`;
      answer = `${firstOperand - secondOperand}`;
      break;
    case '*':
      question = `${firstOperand} * ${secondOperand}`;
      answer = `${firstOperand * secondOperand}`;
      break;
    default:
  }
  return makePair(question, answer);
};

const game = makePair(gameTask, generator);

export default () => gameShell(game);
