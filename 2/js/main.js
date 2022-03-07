//   Получаем рандомное целое число   //

function getRandomInteger(min, max) {
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  if (min >= 0 && max >= 0 && max > min) {
    return randomInteger;
  }
  throw new Error('Что-то пошло не так');
}

getRandomInteger(22, 99);


//   Получаем рандомное число с плавающей точкой   //

function getRandomFractional(min, max) {
  const randomFractional = (Math.random() * (max + 1 - min) + min).toFixed(1);
  if (min >= 0 && max >= 0 && max > min) {
    return randomFractional;
  }
  throw new Error('Что-то пошло не так');
}

getRandomFractional(4, 73);
