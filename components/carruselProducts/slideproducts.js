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
        320: { 
            slidesPerView: 1, 
        },
        860: { 
            slidesPerView: 2, 
        },
        1224: { 
            slidesPerView: 4, 
        },
    },
});

