import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm';
const menuToggler = document.getElementsByClassName('menu-toggler')[0];
const mobileMenu = document.getElementsByClassName('hamburger-menu')[0];

menuToggler.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})

window.addEventListener('scroll', () => {
    const navbar = document.getElementsByClassName('navbar')[0];
    const menueItem = document.getElementsByClassName('sticky-item');
    const navbarContainer = document.getElementsByClassName('navbar-container')[0];
    const hero = document.getElementById('hero');
    const svgPaths = document.getElementsByClassName('.menu-toggler > svg path');
    const heroHeight = hero.offsetHeight;


    if (window.scrollY > heroHeight) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.width = '100%';
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        navbar.style.zIndex = '50';
        for (let item of menueItem) {
            item.style.color = 'black';
        }

        for (let path of svgPaths) {
          path.setAttribute('stroke', 'black'); 
      }
    } else {
        navbar.style.position = '';
        navbar.style.top = '';
        navbar.style.left = '';
        navbar.style.width = '';
        navbar.style.backgroundColor = '';
        navbar.style.boxShadow = '';
        navbar.style.zIndex = '';
        for (let item of menueItem) {
            item.style.color = '';
        }
    }
    for (let path of svgPaths) {
      path.setAttribute('stroke', '#ffff'); 
  }

})


const keenSlider = new KeenSlider(
  '#keen-slider',
  {
    loop: true,
    slides: {
      origin: 'center',
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          origin: 'auto',
          perView: 2.5,
          spacing: 32,
        },
      },
    },
  },
  []
)

