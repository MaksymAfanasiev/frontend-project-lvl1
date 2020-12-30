import initGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const questionForGame = ['25 50', '100 52', '3 9'];

const NOD = (numbers) => {
  const [x, y] = numbers.split(' ');

  const iter = (num1, num2) => {
    if (num2 > num1) return iter(num2, num1);
    if (!num2) return String(num1);
    return iter(num2, num1 % num2);
  };

  return iter(x, y);
};

export default () => {
  initGame(description, questionForGame, NOD);
};
