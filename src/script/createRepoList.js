const repoListElement = document.querySelector('.repo-list');

export const createRepoList = data => {
  data.map(element => {
    const repoListItemElement = document.createElement('li');
    const repoLinkElement = document.createElement('a');

    repoListItemElement.classList.add('repo-list__item');
    repoLinkElement.classList.add('repo-list__item_link');
    repoLinkElement.setAttribute('href', element.clone_url);

    repoLinkElement.textContent = element.name;
    repoListItemElement.append(repoLinkElement);
    return repoListElement.append(repoListItemElement);
  });
};
