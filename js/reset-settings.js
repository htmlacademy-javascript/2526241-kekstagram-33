import { validator } from './validation';
import { uploadFormElement } from './validation';
import { imgUploadPreview } from './scale-photo';
import { effectLevel } from './photo-filters';
import { original } from './photo-filters';
import { scaleValues } from './scale-photo';
import { updateImageScale } from './scale-photo';

export const resetSettings = () => {
  validator.reset();
  uploadFormElement.reset();
  updateImageScale(scaleValues.MAX_VALUE);
  imgUploadPreview.style.transform = 'scale(1)';
  imgUploadPreview.style.filter = 'none';
  effectLevel.classList.add('hidden');
  original.checked = true;
};
