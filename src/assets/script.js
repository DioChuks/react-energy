const menuBtn = document.querySelector('.fs-m-btn');
const nav = document.querySelector('.fs-nav-m-links');
const preloader = document.querySelector('.preloader');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

window.addEventListener('load', () => {
    preloader.style.display = 'none';
});

