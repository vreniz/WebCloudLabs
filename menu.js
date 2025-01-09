const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  if (menuToggle.textContent.trim() === '☰') {
    menuToggle.textContent = '✖'; // Cambiar a "X"
  } else {
    menuToggle.textContent = '☰'; // Cambiar a hamburguesa
  }
});
