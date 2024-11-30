import './data.js';
import './functions.js';
import './creating-miniature.js';
import './big-picture.js';
import './validation.js';
import './scale-photo.js';
import './photo-filters.js';
import { getData } from './server.js';
import { renderPhotos } from './creating-miniature.js';

getData ()
  .then((photos) => {
    renderPhotos(photos);
  });
