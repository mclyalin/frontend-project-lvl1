import readlineSync from 'readline-sync';
export { hello };

const hello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};
