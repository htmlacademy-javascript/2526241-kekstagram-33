//Функция для проверки длины строки
const checkLine = function (usedLine, maxLength) {
  if (usedLine.length <= maxLength) {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkLine('bokyuri95@gmail.com',20);
checkLine('LineWithMoreThanTwentySymbols',20);

//Проверка на палиндром
const line = 'Молебен о коне белом';
const noBreakLine = line.replaceAll(' ', ''); //Объявление строки без пробелов
console.log(noBreakLine);
const newLine = noBreakLine.toUpperCase(); //Объявление строки только с верхним регистром и без пробелов
console.log(newLine);
let reverseLine = '';

for (let i = newLine.length - 1;i >= 0; i--) { //Создание индекса, считывающего порядковые номера букв в словах
  reverseLine += newLine[i]; //Добавление очередного символа в строку
  console.log(reverseLine);
}

if (newLine === reverseLine) { //Сравнение символов у строчек
  console.log('Это палиндром'); //Вывод сообщения
} else {
  console.log('Это не палиндром'); //Вывод сообщения
}
