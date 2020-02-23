import { makeQuest, getRandomInt } from '../lib.js';
import gameShell from '../index.js';

const gameTask = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const operators = ['+', '-', '*'];

const generateQuest = () => {
  const firstOperand = getRandomInt();
  const secondOperand = getRandomInt();

  const lastIndex = operators.length - 1;
  const index = getRandomInt(0, lastIndex);
  const operator = operators[index];

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = calculate(firstOperand, secondOperand, operator);

  return makeQuest(question, correctAnswer.toString());
};

export default () => gameShell(gameTask, generateQuest);
