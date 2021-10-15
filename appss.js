const hamBuger = document.querySelector('.hamBuger');
const leftNavHome = document.querySelector('.left-nav');
const rightNavHome = document.querySelector('.right-nav-home');
const centerNavHome = document.querySelector('.center-nav-home');
const navbar = document.querySelector('.navbar');
hamBuger.addEventListener('click', () => {
    leftNavHome.classList.toggle('v-visi');
    rightNavHome.classList.toggle('v-visi');
    centerNavHome.classList.toggle('v-visi');
    navbar.classList.toggle('h-height');
})