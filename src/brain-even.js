import { makeQuest, getRandomInt, playGame } from './index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generator = () => {
    const question = getRandomInt();
    const answer = question % 2 ? 'no' : 'yes';
    return makeQuest(question, answer);
  };
  playGame(true, rules, generator);
};
