import { createRepoList } from './createRepoList.js';
import { onError } from './onError.js';

export const getRepoList = async url => {
  try {
    const response = await fetch(url);
    const userData = await response.json();
    console.log(userData);
    createRepoList(userData);
  } catch (error) {
    onError();
  }
};
