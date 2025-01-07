const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
  // Alternar la visibilidad del menú lateral
  navMenu.classList.toggle('show');

  // Cambiar el contenido del ícono entre "☰" y "✖"
  if (menuToggle.textContent.trim() === '☰') {
    menuToggle.textContent = '✖'; // Cambiar a "X"
  } else {
    menuToggle.textContent = '☰'; // Cambiar a hamburguesa
  }
});
