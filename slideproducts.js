const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Cambiar a horizontal
    loop: true,
    slidesPerView: 4, // Número de slides visibles
    spaceBetween: 10, // Espaciado entre slides
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
            slidesPerView: 3, 
        },
    },
});

// Seleccionar elementos
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Evento click en el botón hamburguesa
hamburger.addEventListener('click', () => {
// Alternar clase 'responsive' para mostrar u ocultar el menú
navLinks.classList.toggle('responsive');
});
