import { getFirstItem, getSecondItem, getAnswer } from './lib.js';

const play = (game) => {
  const rules = getFirstItem(game);
  console.log(rules);

  const generator = getSecondItem(game);
  const numOfRounds = 3;
  for (let i = 1; i <= numOfRounds; i += 1) {
    const quest = generator();
    const question = getFirstItem(quest);
    const correctAnswer = getSecondItem(quest);
    const answer = getAnswer(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;). Correct answer was '${correctAnswer}'`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const gameShell = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = getAnswer('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (!game) { return; }

  const gameResult = play(game);
  if (gameResult) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gameShell;
