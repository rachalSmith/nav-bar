// DOM Elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navLinks');
const navLinks = document.querySelectorAll('.navLinks li');
const nav3 = document.querySelector('.nav3');
const sect3 = document.querySelector('.section3');


// Adds and removes navActive property
function navSlide() {
  nav.classList.toggle('navActive');
}

// Animate links with time delay
function animateLinks() {
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.25}s`;
    }
  })
};

// Transforms burger into cross
function animateBurger() {
  burger.classList.toggle('toggle');
}

// Scroll to section 3
function scrollPlease() {
  sect3.scrollIntoView(false);
}

// Event listeners
burger.addEventListener('click', navSlide);
burger.addEventListener('click', animateLinks);
burger.addEventListener('click', animateBurger);
nav3.addEventListener('click', scrollPlease);


// Run
navSlide()
animateLinks()
animateBurger()
scrollPlease()
