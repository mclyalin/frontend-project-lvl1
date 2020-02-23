import readlineSync from 'readline-sync';
// import { cons, car, cdr } from '@hexlet/pairs';

// Pairs
const cons = (x, y) => (pair) => pair(x, y);
const car = (pair) => pair((x) => x);
const cdr = (pair) => pair((x, y) => y);
//

export const makeQuest = (question, answer) => cons(question, answer);
export const getQuestion = (quest) => car(quest);
export const getCorrectAnswer = (quest) => cdr(quest);

export const getRandomInt = (min = 1, max = 99) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export const getUserResponse = (request) => (
  readlineSync.question(request)
);
