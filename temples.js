// Dynamic year and last modified footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // Toggle the "show" class
  hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰'; // Update icon
});
