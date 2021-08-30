const humbergar = document.querySelector('.humbergar');
const navbar = document.querySelector('.navbar>ul');

humbergar.addEventListener('click',()=>{
    navbar.classList.toggle('show_nav');
});