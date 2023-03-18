import { onButtonShow } from './onButtonShow.js';

const buttonShowElement = document.querySelector('.btn');
const userIcon = document.querySelector('.user__avatar');
const defaultUserAvatarUrl = 'https://avatars3.githubusercontent.com/u10001';

export const getDefaultUserIcon = () => userIcon.setAttribute('src', defaultUserAvatarUrl);

window.addEventListener('load', getDefaultUserIcon);
buttonShowElement.addEventListener('click', onButtonShow);
