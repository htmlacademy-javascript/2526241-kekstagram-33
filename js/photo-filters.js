import { imgUploadPreview } from './scale-photo';

const sliderField = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const effectChange = document.querySelectorAll('.effects__radio');

const effects = [ //задание параметров эффектов
  { filter: 'none' },
  { filter: 'grayscale', min: 0, max: 1, step: 0.1 },
  { filter: 'sepia', min: 0, max: 1, step: 0.1 },
  { filter: 'invert', min: 0, max: 100, step: 1, suffix: '%' },
  { filter: 'blur', min: 0, max: 3, step: 0.1, suffix: 'px' },
  { filter: 'brightness', min: 1, max: 3, step: 0.1 },
];


noUiSlider.create(sliderElement, { //создание слайдера с нужными значениями из noUiSlider
  range: { min: 0, max: 1 },
  start: 1,
  step: 0.1,
  connect: 'lower',
});


export const resetFilter = () => { //сброс фильтра
  sliderField.classList.add('hidden');
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = '';
};

const applyEffect = (effect) => {
  if (effect.filter === 'none') { //проверка на нажатие кнопки "Оригинал", где filter = none
    resetFilter();
    return;
  }

  sliderField.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({ //установка новых параметров для слайдера, исходя из выбранного эффекта при нажатии
    range: { min: effect.min, max: effect.max },
    step: effect.step,
    format: {
      to: (value) => (Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1)),
      from: (value) => parseFloat(value),
    }
  });
  sliderElement.noUiSlider.set(effect.max); //set указывает новое значение для слайдера

  sliderElement.noUiSlider.on('update', (values) => {
    const value = values[0];
    sliderValue.value = value;
    imgUploadPreview.style.filter = `${effect.filter}(${effect.suffix ? value + effect.suffix : value})`;
  });
};


const setFilter = () => {
  effectChange.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      imgUploadPreview.className = `effects__preview--${radio.value}`;
      applyEffect(effects[index]);
    });
  });
};

setFilter();


