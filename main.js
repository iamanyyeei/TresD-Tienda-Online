const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenuWeb = document.querySelector('.mobileMenuWeb');

/*Mostrar funcion y quitar*/
navEmail.addEventListener('click',toogleDesktopMenu);
menuIcon.addEventListener('click',toogleMobileMenuWeb);

function toogleDesktopMenu(){
    console.log('click');
    desktopMenu.classList.toggle('inactive');
};

function toogleMobileMenuWeb(){
    console.log('click');
    mobileMenuWeb.classList.toggle('inactive');
};