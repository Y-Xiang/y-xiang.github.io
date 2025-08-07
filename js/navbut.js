const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', function (e) {
  e.preventDefault();
  nav.classList.toggle('active');

  // Toggle between hamburger (☰) and close (✖) icons
  navToggle.textContent = nav.classList.contains('active') ? '✖' : '☰';
  navToggle.setAttribute('aria-expanded', nav.classList.contains('active') ? 'true' : 'false');
});

