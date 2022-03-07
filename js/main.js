//   Получаем рандомное целое число   //

function getRandomInteger(min, max) {
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  if (min >= 0 && max >= 0 && max > min) {
    return randomInteger;
  }
    console.log('Что-то пошло не так');
}

console.log(getRandomInteger(22, 99));


//   Получаем рандомное число с плавающей точкой   //

function getRandomFractional(min, max) {
  const randomFractional = (Math.random() * (max + 1 - min) + min).toFixed(1);
  if (min >= 0 && max >= 0 && max > min) {
    return randomFractional;
  }
    console.log('Что-то пошло не так');
}

console.log(getRandomFractional(4, 73));
