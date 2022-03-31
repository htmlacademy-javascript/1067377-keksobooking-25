//   Получаем рандомное целое число   //

function getRandomInteger(min, max) {
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  if (min >= 0 && max >= 0 && max > min) {
    return randomInteger;
  }
  throw new Error('Что-то пошло не так');
}

//   Получаем рандомное число с плавающей точкой   //

function getRandomFractional(min, max) {
  const randomFractional = (Math.random() * (max + 1 - min) + min).toFixed(5);
  if (min >= 0 && max >= 0 && max > min) {
    return randomFractional;
  }
  throw new Error('Что-то пошло не так');
}

//   Генерация данных   //
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomLengthArray = (array) => {
  const maxLength = array.length;
  const arrayLength = getRandomInteger(1, maxLength);
  const newArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const copyOfArray = array[i].slice();
    newArray.push(copyOfArray);
  }

  return newArray;
};

const getAvatarUrl = (index) => {
  if (index < 10) {
    return `img/avatars/user0${ index }.png`;
  }

  return `img/avatars/user${ index }.png`;
};

const TITLES = [
  'Арендовать жильё в Токио',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const DESCRIPTIONS = [
  'Уютные апартаменты в центре Токио со всеми удобствами'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createAdverts = () => {
  const adverts = [];
  for (let i = 1; i <= 10; i++) {
    const author = {
      avatar: getAvatarUrl(i)
    };

    const location = {
      lat: getRandomFractional(35.65000, 35.70000),
      lng: getRandomFractional(139.70000, 139.80000)
    };

    const offer = {
      title: TITLES[0],
      address: `${location.lat  }, ${  location.lng}`,
      price: getRandomInteger(0, 4000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 12),
      quests: getRandomInteger(1, 99),
      checkin: getRandomArrayElement(CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(CHECKIN_CHECKOUT),
      features: getRandomLengthArray(FEATURES),
      description: DESCRIPTIONS[0],
      photos: getRandomLengthArray(PHOTOS),
    };

    const advert = {
      author: author,
      offer: offer,
      location: location
    };

    adverts.push(advert);
  }

  return adverts;
};

const ads = createAdverts();

ads();
