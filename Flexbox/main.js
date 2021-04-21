const tool = document.querySelector('.navbar__tool');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

tool.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});