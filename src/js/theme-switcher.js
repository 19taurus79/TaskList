export function onThemeBtnClick() {
  const body = document.body;

  // Проверяем, есть ли класс 'theme-light'
  if (body.classList.contains('theme-light')) {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
  } else {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
  }
}
