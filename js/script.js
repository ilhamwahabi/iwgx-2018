const navbar = document.getElementById('navbar');

window.onscroll = function() {
  const scrollUntilFooter = window.innerHeight * 4;
  if (window.scrollY >= window.innerHeight * 0.75 && window.scrollY <= scrollUntilFooter) {
    navbar.classList.add('navbar__colored');
  } else {
    navbar.classList.remove('navbar__colored');
  }
}