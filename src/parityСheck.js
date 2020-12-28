import printQuestion from './cli.js';

const numberForGame = [15, 12, 11];
let step = 0;
let isCorrectAnswer = true;

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = printQuestion('May I have your name? ');
  console.log(`Hello ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (step !== 3 && isCorrectAnswer) {
    console.log(`Question: ${numberForGame[step]}`);
    const userAnswer = printQuestion('Your answer: ');
    if (userAnswer !== isEven(numberForGame[step])) {
      isCorrectAnswer = false;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isEven(numberForGame[step])}.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }

    console.log('Correct!');
    step += 1;
  }

  if (step === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};
