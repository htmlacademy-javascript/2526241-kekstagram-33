import { getRandomArrayElement } from './util';
import { getRandomInteger } from './util';
import { createId } from './create-id.js/index.js';
import { createUrlId } from './create-id.js/index.js';
import { createRandomAvatarId } from './comment-avatar-id.js';
import { createRandomCommentId } from './comment-avatar-id.js';
import { NAME } from './name';
import { MESSAGE } from './message';

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

const profilePhotosMassive = () => Array.from({length:6},PROFILE_PHOTO);

export {profilePhotosMassive};
