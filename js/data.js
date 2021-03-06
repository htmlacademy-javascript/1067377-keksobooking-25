import {getRandomInteger} from './util.js';
import {getRandomFractional} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getRandomLengthArray} from './util.js';

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

export {ads};
