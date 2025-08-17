// Toggle menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional: Gallery modal preview (you can expand later)
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on: ${img.alt}`);
  });
});
