import { getRandomArrayElement } from './util';
import { getRandomInteger } from './util';
import { createId } from './create-id.js';
import { createUrlId } from './create-id.js';
import { createRandomAvatarId } from './comment-avatar-id.js';
import { createRandomCommentId } from './comment-avatar-id.js';
import { NAME } from './name';
import { MESSAGE } from './message';

/*const createComment = () => ({id:createRandomCommentId(),
  avatar:`img/avatar- ${createRandomAvatarId()}.svg`,
  message:getRandomArrayElement(MESSAGE),
  name:getRandomArrayElement(NAME)
});*/

const PROFILE_PHOTO = () => ({id:createId() ,
  url: `photos/${createUrlId()}.jpg` ,
  description:'Прекрасный летний вечер',
  likes:getRandomInteger(15,200),
  comments:{id:createRandomCommentId(),
    avatar:`img/avatar- ${createRandomAvatarId()}.svg`,
    message:getRandomArrayElement(MESSAGE),
    name:getRandomArrayElement(NAME)
  }
});

const profilePhotosMassive = () => Array.from({length:4},PROFILE_PHOTO);

export {profilePhotosMassive};
