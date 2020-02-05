import readlineSync from 'readline-sync';

const getUserAnswer = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export { getUserAnswer as default };
