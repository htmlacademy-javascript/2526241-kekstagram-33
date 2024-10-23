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
checkPalyndrome('Молебен о коне белом');

const searchFigure = function (figureLine) {
  let newFigureLine = '';
  if (typeof figureLine === 'number') {
    const trueFigureline = figureLine.toString();
    for (let i = 0; i < trueFigureline.length;i++) {
      const parsingTrueFigure = parseInt(trueFigureline[i],10);
      if (!Number.isNaN(parsingTrueFigure)) {
        newFigureLine += trueFigureline[i];
      }
    }
  }
  for (let i = 0; i < figureLine.length;i++) {
    const parsingFigure = parseInt(figureLine[i],10);
    if (!Number.isNaN(parsingFigure)) {
      newFigureLine += figureLine[i];
    }
  }
  if (newFigureLine.length === 0) {
    return NaN;
  }
  return Number(newFigureLine);
};

searchFigure(555);
