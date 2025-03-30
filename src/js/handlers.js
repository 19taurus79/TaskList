import { STORAGE_KEYS } from './constants';
import { getTasks } from './data';
import { saveToLocalStorage } from './local-storage-api';
import { renderTasksList } from './render-tasks';

export function onSubmit(event) {
  event.preventDefault();

  const { taskName, taskDescription } = event.target.elements;

  const titleValue = taskName.value.trim();
  const descriptionValue = taskDescription.value.trim();

  if (!titleValue || !descriptionValue) {
    alert('Error');
    return;
  }

  const task = {
    taskName: titleValue,
    taskDescription: descriptionValue,
    id: crypto.randomUUID(),
  };
  const tasks = getTasks();
console.log('task', task);
  console.log('tasks', tasks);
  tasks.push(task);

  saveToLocalStorage(STORAGE_KEYS.TASKS, tasks);
  renderTasksList(tasks);
  event.target.reset();
}

export function onDOMContentLoaded() {
  const tasks = getTasks();
  renderTasksList(tasks);
}
