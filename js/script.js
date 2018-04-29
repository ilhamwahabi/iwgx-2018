const navbar = document.getElementById('navbar');

window.onscroll = function() {
  if (window.scrollY >= window.innerHeight * 0.75) {
    navbar.classList.add('navbar__colored');
  } else {
    navbar.classList.remove('navbar__colored');
  }
}