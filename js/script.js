const btnToggle = document.querySelector('.menu-toggle input');
const sideNav = document.querySelector('nav ul');

btnToggle.addEventListener('click', function(){
    sideNav.classList.toggle('slide');
});