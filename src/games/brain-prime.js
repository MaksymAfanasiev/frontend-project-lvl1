import initGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questionForGame = [2, 40, 109];

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => {
  initGame(description, questionForGame, isPrime);
};
