const commentsList = document.querySelector('.social__comments');
const commentItem = commentsList.querySelector('.social__comment');

const getSocialComment = (comment) => {
  const commentsCloned = commentItem.cloneNode(true);
  const commentAvatar = commentsCloned.querySelector('.social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentsCloned.querySelector('.social__text').textContent = comment.message;
  commentsList.appendChild(commentsCloned);
};


export {getSocialComment};


