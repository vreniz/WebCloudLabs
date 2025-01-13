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
// Código para resaltar el enlace activo (incluye .ihouse)
const menuLinks = document.querySelectorAll('#nav-menu a, .ihouse');

// Agregar evento de clic a cada enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Elimina la clase "active" de todos los enlaces
    menuLinks.forEach(item => item.classList.remove('active'));

    // Agrega la clase "active" al enlace o a la casita clicada
    link.classList.add('active');
  });
});