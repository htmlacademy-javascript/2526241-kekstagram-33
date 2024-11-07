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

export {createId};
export {createUrlId};
