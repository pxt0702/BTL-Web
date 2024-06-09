
let navbar = document.querySelector('.navbar');


let searchIcon = document.querySelector('#search-icon');
let searchBox = document.querySelector('.search-box');
searchIcon.onclick = () => {
    searchBox.classList.toggle('active');
}
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    searchBox.classList.remove('active');
}
const imgs = document.querySelectorAll('.main-slider img');
const dots = document.querySelectorAll('.dot');
let currentImg = 0;
const interval = 5000;
let timer = setInterval(changeSlide, interval);
