import readlineSync from 'readline-sync';
// import { cons, car, cdr } from '@hexlet/pairs';

// Pairs
const cons = (x, y) => (pair) => pair(x, y);
const car = (pair) => pair((x) => x);
const cdr = (pair) => pair((x, y) => y);
//

export const makePair = (first, second) => cons(first, second);
export const getFirstItem = (pair) => car(pair);
export const getSecondItem = (pair) => cdr(pair);

export const getRandomInt = (min = 1, max = 99) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export const getAnswer = (request) => (
  readlineSync.question(request)
);
