/*For Modal */

/* Element */

let openModal = document.querySelector("#mobile-nav-open");

let closeModal = document.querySelector(".close-mobile-nav");

let mobileNav = document.querySelector(".mobile-nav-container");

/* Event */

openModal.addEventListener("click", openMobileNav);

closeModal.addEventListener("click", closeMobileNav);

/* Execution */

function openMobileNav() {
  mobileNav.style.visibility = "visible";
}

function closeMobileNav() {
  mobileNav.style.visibility = "hidden";
}

// Superior Security

let openSuperior = document.querySelector(".openSuperior");
let superior = document.querySelector(".superior");

openSuperior.addEventListener("click", showSecurity);

function showSecurity() {
  superior.classList.toggle("superiorText");
}
