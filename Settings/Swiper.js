const HomePlaylist =
{
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 3,//'auto',
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
    },
    breakpoints: {
   // when window width is <= 320px
   240: {
     slidesPerView: 1,
     spaceBetween: 5
   },
   // when window width is <= 480px
   360: {
     slidesPerView: 1,
     spaceBetween: 7
   },
   // when window width is <= 640px
   480: {
     slidesPerView: 1,
     spaceBetween: 10
   },
   800: {
     slidesPerView: 1,
     spaceBetween: 15
   }
 }
};

export {
  HomePlaylist
};
