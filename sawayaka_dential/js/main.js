const swiper = new Swiper('.firstview.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,

  },
  effect: 'fade', // フェード効果を追加
  speed: 1500,
});

const swiper2 = new Swiper('.gallery-slider.swiper', {
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 3000,
  slidesPerView: 3,
  spaceBetween: 30,
});

// ==============================
// ハンバーガーメニュー開閉
// ==============================
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header__nav');

if (hamburger && headerNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    headerNav.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}
