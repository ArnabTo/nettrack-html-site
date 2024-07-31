const menuToggler = document.getElementsByClassName('menu-toggler')[0];
const mobileMenu = document.getElementsByClassName('hamburger-menu')[0];

menuToggler.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})