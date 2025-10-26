// Navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// // Contact form submission
// document.getElementById('contactForm').addEventListener('submit', (e) => {
//   e.preventDefault();
//   alert('Message sent successfully!');
//   e.target.reset();
// });