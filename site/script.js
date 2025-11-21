jQuery(function ($) {
            $('.hero').vegas({
                slides: [
                    { src:'images/slide2.jpg' },
                    { src:'images/slide3.jpg' },
                    { src:'images/slide1.jpg' },
                ],
                transition: 'fade',
                transitionDuration: 2000,
                delay: 10000,
                cover: true,
                animation: 'kenburns ease-out',
                animationDuration: 12000,
                timer: false,
                // 動画・画像下部のスクロールバーを有無を調整
                overlay: false,
                // overlayはtrue,false,cssファウルの中に含まれている画像の選択で調整可能
            });
        });