export function initializeHeroSlide() {
    // Verifica si el contenedor del slider existe antes de inicializar
    const heroSlideContainer = document.querySelector('.swiper');
    if (!heroSlideContainer) {
        console.error('El contenedor del Swiper no se encontró.');
        return;
    }

    // Inicializar Swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal', // Cambiar a horizontal
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            860: {
                slidesPerView: 3,
            },
            1224: {
                slidesPerView: 4,
            },
        },
    });

    /* console.log('Swiper inicializado:', swiper); */
}
