const imgUploadPreviwButtonClose = document.querySelector('.img-upload__cancel');

export const openSuccefulMessage = () => {
  // Клонируем шаблон сообщения
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successTemplate.cloneNode(true);

  // Добавляем сообщение в DOM
  document.body.appendChild(successMessage);

  // Находим кнопку закрытия
  const successfulSendingButton = successMessage.querySelector('.success__button');
  if (!successfulSendingButton) {
    return;
  }

  // Функция закрытия сообщения
  const closeSuccessMessage = () => {
    successMessage.remove();
    document.removeEventListener('keydown', onEscClose); // Удаляем обработчик
  };

  // Закрытие сообщения по клику на кноку закрытия
  successfulSendingButton.addEventListener('click', closeSuccessMessage);

  // Закрытие сообщения по клавише Escape
  function onEscClose (evt) {
    if (evt.key === 'Escape') {
      closeSuccessMessage();
    }
  }
  document.addEventListener('keydown', onEscClose);
};

imgUploadPreviwButtonClose.addEventListener('click',() => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
  }
});

//Функция для показа ошибки при загрузке
export const showError = () => {
  const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const errorElement = errorTemplate.cloneNode(true);

  document.body.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, 5000);
};
