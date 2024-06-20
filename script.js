// Получаем необходимые элементы
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');

// Добавляем обработчик клика на кнопку бургер-меню
burgerMenu.addEventListener('click', toggleMenu);

// Функция для переключения состояния меню
function toggleMenu() {
  burgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
}
