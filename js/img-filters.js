export const imgFilters = document.querySelector('.img-filters');
const imgFiltersButtons = imgFilters.querySelectorAll('.img-filters__button');


import { debounce } from './util';
import { sortComments } from './util';
import { shuffleArray } from './util';
import { renderPhotos } from './creating-miniature';

const RANDOM_SHOWN_PHOTOS = 10;
const RENDER_DELAY = 500;

const removeActiveClass = () => {
  const activeFilter = imgFilters.querySelector('.img-filters__button--active');
  if (activeFilter) {
    activeFilter.classList.remove('img-filters__button--active');
  }
};

const removePhotos = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};


const filters = {
  'filter-default': debounce((photos) => {
    removePhotos();
    renderPhotos(photos);
  }, RENDER_DELAY),
  'filter-random': debounce((photos) => {
    removePhotos();
    renderPhotos(shuffleArray(photos.slice()).slice(0, RANDOM_SHOWN_PHOTOS));
  }, RENDER_DELAY),
  'filter-discussed': debounce((photos) => {
    removePhotos();
    renderPhotos(sortComments(photos.slice()));
  }, RENDER_DELAY),
};

const filterChange = (photos) => {
  imgFiltersButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      removeActiveClass();
      evt.target.classList.add('img-filters__button--active');
      filters[evt.target.id](photos);
    });
  });
};

export { filterChange };
