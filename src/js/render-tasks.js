import { refs } from './refs';

export function renderTasksList(tasks) {
  const markup = tasks.map(({id, taskName, taskDescription}) => {
    return `<li class="task-list-item">
        <button class="task-list-item-btn" data-id="${id}">Delete</button>
        <h3>${taskName}</h3>
        <p>${taskDescription}</p>
      </li>`;
  }).join('');
  refs.tasksList.innerHTML = markup;
}

export function clearTasksList() {
  refs.tasksList.innerHTML = '';
}
