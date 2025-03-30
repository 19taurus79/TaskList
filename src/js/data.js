import { STORAGE_KEYS } from './constants';
import { loadFromLocalStorage } from './local-storage-api';

export function getTasks(){
    const tasks = loadFromLocalStorage(STORAGE_KEYS.TASKS) || []
    return tasks
};
