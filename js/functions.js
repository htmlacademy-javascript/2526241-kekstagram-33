//Функция для проверки длины строки
// eslint-disable-next-line no-unused-vars
const checkLine = function (usedLine, maxLength) {
  if (usedLine.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

//Проверка на палиндром


// eslint-disable-next-line no-unused-vars
const checkPalyndrome = function (line) {
  const noBreakLine = line.replaceAll(' ', '');
  const newLine = noBreakLine.toUpperCase();
  let reverseLine = '';

  for (let i = newLine.length - 1;i >= 0; i--) { //Создание индекса, считывающего порядковые номера букв в словах
    reverseLine += newLine[i]; //Добавление очередного символа в строку
  }

  if (newLine === reverseLine) { //Сравнение символов у строчек
    return true; //Вывод сообщения
  } else {
    return false; //Вывод сообщения
  }
};
