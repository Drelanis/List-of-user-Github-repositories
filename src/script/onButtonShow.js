import { onError } from './onError.js';
import { getSomeInfoUser } from './getSomeUserInfo.js';
import { onRequest } from './onRequest.js';

const inputElement = document.querySelector('.name-form__input');
const repoListElement = document.querySelector('.repo-list');
const spinnerLoadElement = document.querySelector('.spinner');

export const onButtonShow = async () => {
  const inputValue = inputElement.value;
  repoListElement.textContent = '';
  spinnerLoadElement.classList.remove('spinner_hidden');
  try {
    const response = await onRequest(inputValue);
    getSomeInfoUser(response);
  } catch (error) {
    onError();
  } finally {
    spinnerLoadElement.classList.add('spinner_hidden');
  }
};
