import { getQuestion, getCorrectAnswer, getUserResponse } from './lib.js';

const play = (gameTask, generateQuest, numOfRounds = 3) => {
  console.log(gameTask);
  for (let i = 1; i <= numOfRounds; i += 1) {
    const quest = generateQuest();
    const question = getQuestion(quest);
    const correctAnswer = getCorrectAnswer(quest);
    const answer = getUserResponse(`Question: ${question}\nYour answer: `);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;). Correct answer was "${correctAnswer}"`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const gameShell = (gameTask, generateQuest) => {
  console.log('Welcome to the Brain Games!');

  const name = getUserResponse('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (!gameTask) { return; }

  const gameResult = play(gameTask, generateQuest);
  if (gameResult) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gameShell;
