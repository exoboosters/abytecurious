/*Nav-bar Responsive*/
var mobileMenu = document.getElementById("mobile-menu");
var navLinks = document.getElementById("nav-links");
var isOpen;

mobileMenu.onclick = function () {
  if (isOpen) {
    close();
  } else {
    Open();
  }
};

function Open () {
  navLinks.style.display = "inline-block";
  isOpen = true;
}

function close () {
  navLinks.style.display = "none";
  isOpen = false;
}

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 767.98px)").matches) {
    navLinks.style.display = "inline-block";
  } else {
    navLinks.style.display = "none";
  }
});