const menuToggler = document.getElementsByClassName('menu-toggler')[0];
const mobileMenu = document.getElementsByClassName('hamburger-menu')[0];

menuToggler.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})

window.addEventListener('scroll', () => {
    const navbar = document.getElementsByClassName('navbar')[0];
    const navbarContainer = document.getElementsByClassName('navbar-container')[0];
    const hero = document.getElementById('hero');
     
    const heroHeight = hero.offsetHeight;
    console.log(window.scrollY)
    console.log(heroHeight)

    // if(this.window.scrollY > 240){
    //     navbar.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'bg-[#12141D]', 'shadow-lg', 'z-50');
    // }else{
    //     navbar.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'bg-[#12141D]', 'shadow-lg', 'z-50');
    // }
    if (window.scrollY > heroHeight) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.width = '100%';
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        navbar.style.zIndex = '50';
    } else {
        navbar.style.position = '';
        navbar.style.top = '';
        navbar.style.left = '';
        navbar.style.width = '';
        navbar.style.backgroundColor = '';
        navbar.style.boxShadow = '';
        navbar.style.zIndex = '';
    }

})