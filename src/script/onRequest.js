import { onError } from './onError.js';

const baseUrl = 'https://api.github.com/users';

export const onRequest = userName => {
  return fetch(`${baseUrl}/${userName}`)
    .then(response => response.json())
    .catch(() => onError);
};
