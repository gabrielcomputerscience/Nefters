let button = document.querySelector(".top__control");
button.addEventListener("click", togglePopup);

let navShell = document.querySelector(".nav-shell");
let logo = document.querySelector(".mobile-only");
let hero = document.querySelector(".hero__left");

// Function to control toggle
function togglePopup() {
  // Toggle button shape between hamburger and X
  button.firstElementChild.classList.toggle("fa-bars");
  button.firstElementChild.classList.toggle("fa-xmark");

  // Translate required elements on page
  navShell.classList.toggle("popup-active");
  logo.classList.toggle("popup-active");
  hero.classList.toggle("popup-active");
}
