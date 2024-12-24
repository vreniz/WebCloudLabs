const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');
const mainContent = document.querySelector('.main-content');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  mainContent.classList.toggle('shift'); // Agrega o quita la clase para desplazar el contenido

  // Cambiar el contenido del ícono entre "☰" y "✖"
  if (menuToggle.textContent === '☰') {
    menuToggle.textContent = '✖'; // Cambiar a "X"
  } else {
    menuToggle.textContent = '☰'; // Cambiar a hamburguesa
  }
});
