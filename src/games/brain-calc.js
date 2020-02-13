import { makePair, getRandomInt } from '../lib.js';

const rules = 'What is the result of the expression?';

const generator = () => {
  let question;
  let answer;

  const firstOperand = getRandomInt();
  const secondOperand = getRandomInt();
  const operatorType = getRandomInt(0, 2);
  switch (operatorType) {
    case 0: //+
      question = `${firstOperand} + ${secondOperand}`;
      answer = `${firstOperand + secondOperand}`;
      break;
    case 1: //-
      question = `${firstOperand} - ${secondOperand}`;
      answer = `${firstOperand - secondOperand}`;
      break;
    case 2: //*
      question = `${firstOperand} * ${secondOperand}`;
      answer = `${firstOperand * secondOperand}`;
      break;
    default:
  }
  return makePair(question, answer);
};

export default () => makePair(rules, generator);
