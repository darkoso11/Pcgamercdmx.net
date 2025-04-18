export function initializeHeroSlide() {
    const swiper2 = new Swiper('.mySwiper2', {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },
      });
}