import initGame from '../index.js';
import randomInteger from '../utils.js';

const description = 'What number is missing in the progression?';
const questionForGame = [];
const minNumbreProgression = 0;
const maxNumbreProgression = 10;

const createProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    const step = randomInteger(minNumbreProgression + 1, maxNumbreProgression);
    const initialNumber = randomInteger(minNumbreProgression, maxNumbreProgression);
    const res = [];
    for (let j = 1; j <= 10; j += 1) {
      res.push(initialNumber + step * j);
    }
    res[randomInteger(minNumbreProgression, maxNumbreProgression - 1)] = '..';
    questionForGame.push(res.join(' '));
  }
};

createProgression();

const calcProgression = (progresion) => {
  const partsProgresion = progresion.split(' ');
  const findUnknownElIndex = partsProgresion.indexOf('..');
  let res;
  let step;

  if (findUnknownElIndex === 0) {
    step = partsProgresion[findUnknownElIndex + 2] - partsProgresion[findUnknownElIndex + 1];
    res = partsProgresion[findUnknownElIndex + 1] - step;
  } else if (findUnknownElIndex === partsProgresion.length - 1) {
    step = partsProgresion[findUnknownElIndex - 1] - partsProgresion[findUnknownElIndex - 2];
    res = +partsProgresion[findUnknownElIndex - 1] + step;
  } else {
    res = +partsProgresion[findUnknownElIndex - 1] + +partsProgresion[findUnknownElIndex + 1];
    res /= 2;
  }

  return String(res);
};

export default () => {
  initGame(description, questionForGame, calcProgression);
};
