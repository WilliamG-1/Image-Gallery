import './style.css'

const hamburgerMenu = document.querySelector('.hamburger');
const mainDisplay = document.querySelector('#mainDisplay');
const sideMenu = document.querySelector('#sidebar');
const sliderContainer = document.querySelector('#sliderContainer');



hamburgerMenu.addEventListener('click', ()=>{
    sideMenu.classList.toggle('visible');
    mainDisplay.classList.toggle('menuIsHere');
    sliderContainer.classList.toString('sidebarToggled');
    console.log('Hello there');
});