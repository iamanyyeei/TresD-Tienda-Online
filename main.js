const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Mostrar funcion y quitar*/
navEmail.addEventListener('click',toogleDesktopMenu);

function toogleDesktopMenu(){
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}

console.log('Funcional');