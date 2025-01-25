export function initializeHeroSlide() {
    const categories = [
        { name: "Electrónica", image: "/api/placeholder/200/200", link: "#electronica" },
        { name: "Ropa", image: "/api/placeholder/200/200", link: "#ropa" },
        { name: "Hogar", image: "/api/placeholder/200/200", link: "#hogar" },
        { name: "Deportes", image: "/api/placeholder/200/200", link: "#deportes" },
        { name: "Libros", image: "/api/placeholder/200/200", link: "#libros" },
        { name: "Muebles", image: "/api/placeholder/200/200", link: "#muebles" },
        { name: "Cocina", image: "/api/placeholder/200/200", link: "#cocina" },
        { name: "Jardín", image: "/api/placeholder/200/200", link: "#jardin" },
        { name: "Tecnología", image: "/api/placeholder/200/200", link: "#tecnologia" },
        { name: "Belleza", image: "/api/placeholder/200/200", link: "#belleza" },
        { name: "Infantil", image: "/api/placeholder/200/200", link: "#infantil" },
        { name: "Música", image: "/api/placeholder/200/200", link: "#musica" },
        { name: "Automotriz", image: "/api/placeholder/200/200", link: "#automotriz" },
        { name: "Oficina", image: "/api/placeholder/200/200", link: "#oficina" },
        { name: "Viajes", image: "/api/placeholder/200/200", link: "#viajes" }
    ];

    const carousel = document.getElementById('categoryCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const paginationContainer = document.getElementById('paginationContainer');

    let currentSlide = 0;
    const cardsPerView = 5;

    function createCards() {
        categories.forEach((category, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
                <h3>${category.name}</h3>
            `;
            card.addEventListener('click', () => {
                window.location.href = category.link;
            });
            carousel.appendChild(card);
        });
    }

    function createPaginationDots() {
        const totalDots = categories.length - cardsPerView + 1;
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.className = `pagination-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => moveToSlide(i));
            paginationContainer.appendChild(dot);
        }
    }

    function moveToSlide(slideIndex) {
        currentSlide = slideIndex;
        carousel.style.transform = `translateX(-${currentSlide * 270}px)`;
        
        const dots = document.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    nextBtn.addEventListener('click', () => {
        const totalSlides = categories.length - cardsPerView + 1;
        currentSlide = (currentSlide + 1) % totalSlides;
        moveToSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        const totalSlides = categories.length - cardsPerView + 1;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        moveToSlide(currentSlide);
    });

    createCards();
    createPaginationDots();
}