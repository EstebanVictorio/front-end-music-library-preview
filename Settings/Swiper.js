const HomePlaylist =
{
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      slideChange: function () {
        console.log('slidechange: ' + this.activeIndex);
      }
    }
  };

export {
  HomePlaylist
};
