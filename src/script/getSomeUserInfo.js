import { getRepoList } from './getRepoList.js';

const userIcon = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');

export const getSomeInfoUser = userObject => {
  const { avatar_url, name, location, repos_url, clone_url } = userObject;
  userIcon.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ? `from ${location}` : '';
  getRepoList(repos_url);
};
