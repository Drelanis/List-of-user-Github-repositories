const buttonShowElement = document.querySelector('.btn');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const inputElement = document.querySelector('.name-form__input');
const repoListElement = document.querySelector('.repo-list');
const spinnerLoadElement = document.querySelector('.spinner');
const userIcon = document.querySelector('.user__avatar');
const defaultUserAvatarUrl = 'https://avatars3.githubusercontent.com/u10001';
const baseUrl = 'https://api.github.com/users';

export const getDefaultUserIcon = () =>
  userIcon.setAttribute('src', defaultUserAvatarUrl);

export const onError = () => alert('Failed to load data');

export const onRequest = (userName) => {
  return fetch(`${baseUrl}/${userName}`)
    .then((response) => response.json())
    .catch(() => onError);
};

export const createRepoList = (data) => {
  data.map((element) => {
    const repoListItemElement = document.createElement('li');
    repoListItemElement.classList.add('repo-list__item');
    repoListItemElement.textContent = element.name;
    return repoListElement.append(repoListItemElement);
  });
};

export const getRepoList = async (url) => {
  try {
    const response = await fetch(url);
    const userData = await response.json();
    createRepoList(userData);
  } catch (error) {
    onError();
  }
};

export const getSomeInfoUser = (userObject) => {
  const { avatar_url, name, location, repos_url } = userObject;
  userIcon.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ? `from ${location}` : '';
  getRepoList(repos_url);
};

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

// window.addEventListener('load', getDefaultUserIcon);
getDefaultUserIcon();
buttonShowElement.addEventListener('click', onButtonShow);
