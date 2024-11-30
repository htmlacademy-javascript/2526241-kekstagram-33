const pictureContainer = document.querySelector('.pictures'); // Поиск контейнера для изображений пользователей
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //Поиск шаблона для копирования
const similarPictureFragment = document.createDocumentFragment(); //заведение контейнера для вставки картинок


const renderPhotos = (photos) => {
  photos.forEach(({id,url,description,likes,comments}) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.dataset.id = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarPictureFragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(similarPictureFragment);
};

export {renderPhotos};
