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


const createRandomCommentId = createCommentAndAvatarId(1,1000);
const createRandomAvatarId = createCommentAndAvatarId(1,6);

console.log(createRandomAvatarId);

export {createRandomAvatarId};
export {createRandomCommentId};
