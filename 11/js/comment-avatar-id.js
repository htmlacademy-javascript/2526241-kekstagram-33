import { getRandomInteger } from './util';

function createCommentAndAvatarId (a, b) {
  const usedIds = [];

  let currentId = getRandomInteger(a, b);
  while (usedIds.includes(currentId)) {
    currentId = getRandomInteger(a, b);
    if (usedIds.length >= (b - a + 1)) {
      return null;
    }
  }
  usedIds.push(currentId);
  return currentId;
}

export {createCommentAndAvatarId};
