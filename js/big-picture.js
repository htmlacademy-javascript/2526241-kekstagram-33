import { similarPictures } from './data.js';
import { createSocialComment } from './create-social-comment.js';

const COMMENTS_STEP = 5;
const miniature = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('img');
const picturesLikesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.social__comment-total-count');
const socialDesc = document.querySelector('.social__caption');
const socialCommentsList = document.querySelector('.social__comments');
const commentLoaderButton = document.querySelector('.comments-loader');

let commentLoaded = [];
let commentsCounter = COMMENTS_STEP;


const clearComments = () => {
  socialCommentsList.innerHTML = '';
};

const renderComments = (commentsList) => {
  commentLoaderButton.addEventListener('click',()=>{
    renderComments(commentsList);
  });

  clearComments();

  commentLoaded = commentsList.slice(0,commentsCounter);

  const commentListFragment = document.createDocumentFragment();
  commentLoaded.forEach((comment) => {
    commentListFragment.appendChild(createSocialComment(comment));
  });

  socialCommentsList.appendChild(commentListFragment);
  commentsCounter += COMMENTS_STEP;
};

miniature.forEach((element) => { // задание цикла для списка миниатюр
  element.addEventListener('click',(evt) =>{ //добавление события на контретный элемент в списке
    const clickedItemId = Number(evt.target.closest('.picture').dataset.id);
    const currentItem = similarPictures.find((item) => item.id === clickedItemId);
    renderComments(currentItem.comments);
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
  commentsCounter = [];
  commentsCounter = COMMENTS_STEP;
});

