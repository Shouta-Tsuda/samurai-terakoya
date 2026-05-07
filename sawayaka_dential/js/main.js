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


// ヒーローイメージ用コード
// jQuery(function ($) {
//   // スライドごとに表示させるテキストを配列で定義
//   var slideTexts = [
//     {
//       text1: '地下鉄南北線ひかりが丘駅から徒歩5分',
//       text2: '外から雰囲気がわかる、通いやすい歯医者です'
//     },
//     {
//       text1: '光が差し込む開放的な待合スペース',
//       text2: 'お子さま連れでも安心して通院できます'
//     },
//     {
//       text1: '必要以上の治療はしない',
//       text2: '今の状態と選択肢を丁寧にお伝えします'
//     }
//   ];

vegas('#hero-vegas', {
  slides: [
    { src: 'images/fv/slide1.png' },
    { src: 'images/fv/slide2.png' },
    { src: 'images/fv/slide3.png' }
  ],
  transition: 'fade', // 切り替えエフェクト
  transitionDuration: 2000, // 切り替えにかかる時間（ミリ秒）
  delay: 6000, // 画像が表示されている時間（ミリ秒）
  cover: true, // 画面いっぱいに画像を表示
  animation: 'none', // アニメーションなし
  animationDuration: 8000, // アニメーションにかかる時間（ミリ秒）
  timer: false, // 下部のプログレスバーを非表示
});



// Swiper用コード
// const swiper = new Swiper('.firstview.swiper', {
//   loop: true,
//   autoplay: {
//     delay: 2500,

//   },
//   effect: 'fade',
//   speed: 1500,
// });

const swiper = new Swiper('.gallery-slider.swiper', {
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 3000,
  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    // when window width is >= 640,1024px(ここのブレイクポイントをタブレット・スマホで設定)
    639: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }

  }
});

// ==============================
// ハンバーガーメニュー開閉
// ==============================
const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header__menu');

if (hamburger && headerMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    headerMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

// const hamburger = document.querySelector('.hamburger');
// const headerNav = document.querySelector('.header__nav');

// if (hamburger && headerNav) {
//   hamburger.addEventListener('click', () => {
//     const isOpen = hamburger.classList.toggle('is-open');
//     headerNav.classList.toggle('is-open', isOpen);
//     hamburger.setAttribute('aria-expanded', String(isOpen));
//   });
// }
