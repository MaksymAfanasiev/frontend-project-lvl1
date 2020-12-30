import initGame from '../index.js';

const description = 'What is the result of the expression?';
const questionForGame = ['2 + 3', '7 - 2', '3 * 5'];
const calculateExpression = (expression) => {
  const [a, op, b] = expression.split(' ');
  let result;

  switch (op) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;

    case '*':
      result = a * b;
      break;
    default:
      break;
  }

  return String(result);
};

export default () => {
  initGame(description, questionForGame, calculateExpression);
};
