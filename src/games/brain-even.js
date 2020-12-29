import initGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionForGame = [15, 12, 11];
const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

export default () => {
  initGame(description, questionForGame, isEven);
};
