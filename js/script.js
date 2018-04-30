const navbar = document.getElementById('navbar');

window.onscroll = function() {
  const scrollUntilFooter = window.innerHeight * 4;
  var minScroll = window.innerHeight * 0.75;

  if (window.innerWidth <= 720) {
    minScroll = window.innerHeight * 0.25;
  }

  var element = event.target;
  if (element.scrollHeight - element.scrollTop === element.clientHeight)
  {
      console.log('scrolled');
  }

  if (window.scrollY >= minScroll && window.scrollY <= scrollUntilFooter) {
    navbar.classList.add('navbar__colored');
  } else {
    navbar.classList.remove('navbar__colored');
  }
}