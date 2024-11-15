const miniature = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('img');
const picturesLikesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.social__comment-total-count');
const socialDesc = document.querySelector('.social__caption');

miniature.forEach((element) => { // задание цикла для списка миниатюр
  element.addEventListener('click',(evt) =>{ //добавление события на контретный элемент в списке
    bigPicture.classList.remove('hidden');
    const currentPhoto = evt.currentTarget.querySelector('.picture__img');//наложение evt.target конкретно на картинку из миниатюры
    bigPictureImg.src = currentPhoto.src;
    const currentLikes = evt.currentTarget.querySelector('.picture__likes'); //наложение evt.target на класс с лайками
    picturesLikesCount.textContent = currentLikes.textContent;
    const currentComments = evt.currentTarget.querySelector('.picture__comments'); //наложение evt.target на класс с комментами
    commentsCount.textContent = currentComments.textContent;
    socialDesc.textContent = currentPhoto.alt; // задание описания из массива similarPictures
  });
});

buttonClose.addEventListener('click',() => { //Добавить закрытие по нажатию Esc
  bigPicture.classList.add('hidden');
});

