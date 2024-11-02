const NAME = ['Антон',
  'Иван',
  'Андрей',
  'Алина',
  'Юлия',
  'Екатерина',
  'Денис',
  'Владислав',
  'Ольга',
  'Алиса',
  'Анастасия'
];

const MESSAGE = ['В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Всё отлично!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdGen = () => {
  let currentId = 1;
  return () => currentId++;
};
const createId = createIdGen();

const createUrlIdGen = () => {
  let currentId = 1;
  return () => currentId++;
};
const createUrlId = createUrlIdGen();

const createCommentAndAvatarId = function (a,b) {
  const previousId = [];
  return function () {
    let currentId = getRandomInteger(a,b);
    while (previousId.includes(currentId)) {
      currentId = getRandomInteger(a,b);
    }
    previousId.push(currentId);
    return currentId;
  };
};

const createRandomCommentId = createCommentAndAvatarId(1,1000);
const createRandomAvatarId = createCommentAndAvatarId(1,6);

const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0,elements.length - 1)];
};

const PROFILE_PHOTO = function () {
  return {id:createId() ,
    url: `photos/${createUrlId()}.jpg` ,
    description:'Прекрасный летний вечер',
    likes:getRandomInteger(15,200),
    comments:{id:createRandomCommentId(),
      avatar:`img/avatar- ${createRandomAvatarId()}.svg`,
      message:getRandomArrayElement(MESSAGE),
      name:getRandomArrayElement(NAME)
    }
  };
};

const profilePhotosMassive = () => Array.from({length:4},PROFILE_PHOTO);
profilePhotosMassive();
