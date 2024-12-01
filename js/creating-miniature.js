const pictureContainer = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPictureFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
  photos.forEach(({ id, url, description, likes, comments }) => {
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

export { renderPhotos };
