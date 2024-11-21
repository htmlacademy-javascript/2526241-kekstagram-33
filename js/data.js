import { getRandomArrayElement } from './util';
import { getRandomInteger } from './util';
import { createId } from './create-id.js';
import { createUrlId } from './create-id.js';
import { NAME } from './name';
import { MESSAGE } from './message';
import { createCommentAndAvatarId } from './comment-avatar-id.js';

const createComment = () => ({id:createCommentAndAvatarId(1,30),
  avatar:`img/avatar-${createCommentAndAvatarId(1,6)}.svg`,
  message:getRandomArrayElement(MESSAGE),
  name:getRandomArrayElement(NAME)
});


const profilePhoto = () => ({id:createId() ,
  url: `photos/${createUrlId()}.jpg` ,
  description:'Прекрасный летний вечер',
  likes:getRandomInteger(15,200),
  comments:Array.from({length:getRandomInteger(5,60)},createComment)
});

const profilePhotosMassive = () => Array.from({length:25},profilePhoto);
const similarPictures = profilePhotosMassive(); //нейминг

export {profilePhotosMassive};
export {createComment};
export {similarPictures};
