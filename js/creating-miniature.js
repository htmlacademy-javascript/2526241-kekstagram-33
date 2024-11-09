import { profilePhotosMassive } from './data.js'; //Импорт функции из data.js

const pictureContainer = document.querySelector('.pictures'); // Поиск контейнера для изображений пользователей
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //Поиск шаблона для копирования
const similarPictures = profilePhotosMassive(); // Заведение переменной для получения массива из функции

const similarPictureFragment = document.createDocumentFragment(); //заведение контейнера для вставки картинок

similarPictures.forEach(({url,description,likes,comments}) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarPictureFragment.appendChild(pictureElement); //Проход по массиву и добавление данных из profilePhotoMassive
});

pictureContainer.appendChild(similarPictureFragment);