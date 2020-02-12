import readlineSync from 'readline-sync';
import { cons, car, cdr } from './pairs.js';

export const welcome = 'Welcome to the Brain Games!';

export const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getUserAnswer = (value) => (
  readlineSync.question(`Question: ${value}\nYour answer: `)
);

export const getRandomInt = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min)) + min
);

export const makeQuest = (question, answer) => cons(question, answer);
export const getQuestion = (quest) => car(quest);
export const getCorrectAnswer = (quest) => cdr(quest);

export const playGame = (needWelcome, rules, generator) => {
  if (needWelcome) {
    console.log(welcome);
  }
  console.log(rules);
  const name = getUserName();
  const numOfTests = 3;
  for (let i = 1; i <= numOfTests; i += 1) {
    const quest = generator();
    const question = getQuestion(quest);

    const userAnswer = getUserAnswer(question);
    const correctAnswer = getCorrectAnswer(quest);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;). Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
