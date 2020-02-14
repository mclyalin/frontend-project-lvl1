import readlineSync from 'readline-sync';

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

export const isEven = (num) => (num % 2 === 0);

export const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

export const getRandomProgression = (length) => {
  const step = getRandomInt(2, 9);
  const firstNum = getRandomInt(1, 100 - (step * length));

  const iter = (acc, num, arr) => {
    if (acc > length) {
      return arr;
    }
    return iter(acc + 1, num + step, [...arr, num]);
  };

  return iter(1, firstNum, []);
};

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
