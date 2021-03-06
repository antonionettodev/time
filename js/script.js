const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
navToggle &&
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  }),
  navClose &&
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  document.getElementById('nav-menu').classList.remove('show-menu');
}
function scrollHeader() {
  const e = document.getElementById('header');
  this.scrollY >= 50
    ? e.classList.add('scroll-header')
    : e.classList.remove('scroll-header');
}
navLink.forEach((e) => e.addEventListener('click', linkAction)),
  window.addEventListener('scroll', scrollHeader);
let testimonialSwiper = new Swiper('.testimonial-swiper', {
    spaceBetween: 30,
    loop: 'true',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }),
  newSwiper = new Swiper('.new-swiper', {
    spaceBetween: 24,
    loop: 'true',
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const e = window.pageYOffset;
  sections.forEach((t) => {
    const n = t.offsetHeight,
      s = t.offsetTop - 58,
      o = t.getAttribute('id');
    e > s && e <= s + n
      ? document
          .querySelector('.nav__menu a[href*=' + o + ']')
          .classList.add('active-link')
      : document
          .querySelector('.nav__menu a[href*=' + o + ']')
          .classList.remove('active-link');
  });
}
function scrollUp() {
  const e = document.getElementById('scroll-up');
  this.scrollY >= 350
    ? e.classList.add('show-scroll')
    : e.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollActive),
  window.addEventListener('scroll', scrollUp);
const cart = document.getElementById('cart'),
  cartShop = document.getElementById('cart-shop'),
  cartClose = document.getElementById('cart-close');
cartShop &&
  cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart');
  }),
  cartClose &&
    cartClose.addEventListener('click', () => {
      cart.classList.remove('show-cart');
    });
const themeButton = document.getElementById('theme-button'),
  darkTheme = 'dark-theme',
  iconTheme = 'bx-sun',
  selectedTheme = localStorage.getItem('selected-theme'),
  selectedIcon = localStorage.getItem('selected-icon'),
  getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light',
  getCurrentIcon = () =>
    themeButton.classList.contains('bx-sun') ? 'bx bx-moon' : 'bx bx-sun';
selectedTheme &&
  (document.body.classList['dark' === selectedTheme ? 'add' : 'remove'](
    darkTheme,
  ),
  themeButton.classList['bx bx-moon' === selectedIcon ? 'add' : 'remove'](
    'bx-sun',
  )),
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme),
      themeButton.classList.toggle('bx-sun'),
      localStorage.setItem('selected-theme', getCurrentTheme()),
      localStorage.setItem('selected-icon', getCurrentIcon());
  });
