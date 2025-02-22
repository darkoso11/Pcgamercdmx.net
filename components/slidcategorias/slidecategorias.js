export function initializeHeroSlide() {
    const categories = [
        { name: "PC gamer gama alta", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "PC gamer gama media", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "PC gamer gama baja", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "Pc gamer gama super alta", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "Pc para Inteligencia Artificial", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "PC Gamer para jugar GTA VI", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "PC Gamer para Fortnite", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "PC Gamer para Jugar OverWatch 2", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "Computadoras para Edición de Video", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "Computadora para Edición de Fotografía", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "Workstation para Modelado y Diseño 3D", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "Computadoras para Diseño gráfico", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "Computadoras para Programación", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "PC GAMER", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "PC Gamer para Streaming", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
        { name: "PC Gamer para Jugar Call of Duty Black Ops 6", image: "../../Img/pcgamercdmx.net/MHBJKJVCGVHBJNK.png", link: "#" },
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