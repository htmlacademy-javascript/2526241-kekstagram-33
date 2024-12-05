import './data.js';
import './functions.js';
import './creating-miniature.js';
import './big-picture.js';
import './validation.js';
import './scale-photo.js';
import './photo-filters.js';
import { getData } from './server.js';
import { renderPhotos } from './creating-miniature.js';
import { setupMiniatures } from './big-picture.js';
import { showError } from './modal-settings.js';
import { filterChange, imgFilters } from './img-filters.js';
import './upload-photo.js';

getData()
  .then((photos) => {
    filterChange(photos);
    renderPhotos(photos);
    setupMiniatures(photos);
    imgFilters.classList.remove('img-filters--inactive');
  })
  .catch(() => {
    showError();
  });
