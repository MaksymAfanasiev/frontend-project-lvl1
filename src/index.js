import printQuestion from './cli.js';

let step = 0;
let isCorrectAnswer = true;

export default (description, questions, validateAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = printQuestion('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);

  while (step !== 3 && isCorrectAnswer) {
    console.log(`Question: ${questions[step]}`);
    const userAnswer = printQuestion('Your answer: ');
    if (userAnswer !== validateAnswer(questions[step])) {
      isCorrectAnswer = false;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${validateAnswer(questions[step])}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    step += 1;
  }

  if (step === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
