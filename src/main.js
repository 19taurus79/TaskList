import { onDOMContentLoaded, onSubmit } from './js/handlers';
import { refs } from './js/refs';
import { onDeleteTask } from './js/render-tasks';
import { onThemeBtnClick } from './js/theme-switcher';

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
refs.headerForm.addEventListener('submit', onSubmit);
refs.themeBtn.addEventListener('click', onThemeBtnClick);
refs.tasksList.addEventListener('click', onDeleteTask);
