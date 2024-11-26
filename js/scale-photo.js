const scaleValueControlSmaller = document.querySelector('.scale__control--smaller');
const scaleValueControlBigger = document.querySelector('.scale__control--bigger');
const scaleValueControl = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview > img');

const scaleValues = {
  MIN_VALUE: 25,
  MAX_VALUE: 100,
  STEP: 25
};

const updateImageScale = (scale) => {
  scaleValueControl.value = `${scale}%`;
  imgUploadPreview.style.transform = `scale(${scale / 100})`;
};

const handleScaleChange = (change) => {
  let scale = parseInt(scaleValueControl.value, 10) + change;

  if (scale > scaleValues.MAX_VALUE) {
    scale = scaleValues.MAX_VALUE;
  }

  if (scale < scaleValues.MIN_VALUE) {
    scale = scaleValues.MIN_VALUE;
  }

  updateImageScale(scale);
};

const setImageScale = () => {
  updateImageScale(scaleValues.MAX_VALUE);

  scaleValueControlBigger.addEventListener('click', () => handleScaleChange(scaleValues.STEP));
  scaleValueControlSmaller.addEventListener('click', () => handleScaleChange(-scaleValues.STEP));
};

setImageScale();
