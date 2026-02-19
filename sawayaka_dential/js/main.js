// firstviewのスライドショーを実装するために、Swiper.jsを使用

//  let wd = 1 + (window.innerWidth - 1200) / 1200; // 表示する枚数計算
//         console.log(wd);
//         const swiper = new Swiper('.swiper', {
//             // Optional parameters
//             loop: true,
//             centeredSlides: true,
//             autoplay: {
//                 delay: 2000,
//                 disableOnInteraction: false,
//             },

//             slidesPerView: 1, // 一度に表示する枚数
//             centeredSlides: true,

//             speed: 1000, // スライドのスピード

//             // If we need pagination
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },

//             // Navigation arrows
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },

//             // And if we need scrollbar
//             scrollbar: {
//                 el: '.swiper-scrollbar',
//             },

//             breakpoints: {
//                 // when window width is >= 640px
//                 640: {
//                     slidesPerView: wd,
//                 }
//             }
//         });



document.addEventListener("DOMContentLoaded", function () {
  let wd = 1 + (window.innerWidth - 1200) / 1200;

  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 1500,
    effect: 'fade', // フェード効果を追加
  });

  const gallerySwiper = new Swiper('.gallery-slider', {
    loop: true,
    slidesPerView: 'auto',
    speed: 2500, /* Adjust speed as needed */
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    allowTouchMove: false, /* Keep it functioning as a pure ticker */
  });
});
