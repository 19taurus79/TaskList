import { STORAGE_KEYS } from './constants';
import { renderTasksList } from './render-tasks';

export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocalStorage(key) {
  const saved = localStorage.getItem(key);
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.log(error);
    return saved;
  }
}

export function removeFromLocalStorage(id) {
  console.log('in func', id);
  const arr = loadFromLocalStorage(STORAGE_KEYS.TASKS);
  console.log('arr', arr);
  const index = arr.findIndex(item => item.id === id);
  arr.splice(index, 1);
  console.log('index', index);
  console.log('arr', arr);
  saveToLocalStorage(STORAGE_KEYS.TASKS, arr);
  renderTasksList(arr);
}
