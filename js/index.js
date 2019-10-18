var navbar = document.getElementById("navbar");

window.onscroll = function() {
  var minScroll = window.innerHeight * 0.75;

  if (window.innerWidth <= 720) {
    minScroll = window.innerHeight * 0.25;
  }

  if (
    window.scrollY >= minScroll &&
    window.innerHeight + window.scrollY < document.body.offsetHeight
  ) {
    if (window.innerWidth <= 1280) {
      navbar.classList.add("navbar__colored");
    } else {
      navbar.classList.add("navbar__hide");
    }
  } else {
    if (window.innerWidth <= 1280) {
      navbar.classList.remove("navbar__colored");
    } else {
      navbar.classList.remove("navbar__hide");
    }
  }
};
