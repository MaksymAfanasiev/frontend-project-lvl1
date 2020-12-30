import initGame from '../index.js';
import randomInteger from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const questionForGame = [
  `${randomInteger(0, 100)} ${randomInteger(0, 100)}`,
  `${randomInteger(0, 100)} ${randomInteger(0, 100)}`,
  `${randomInteger(0, 100)} ${randomInteger(0, 100)}`,
];

const findGcd = (numbers) => {
  const [x, y] = numbers.split(' ');

  const iter = (num1, num2) => {
    if (num2 > num1) return iter(num2, num1);
    if (!num2) return String(num1);
    return iter(num2, num1 % num2);
  };

  return iter(x, y);
};

export default () => {
  initGame(description, questionForGame, findGcd);
};
