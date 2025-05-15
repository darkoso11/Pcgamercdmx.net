export function initializeHeroSlide() {
    const carruselProducts = [
        {
            id: 1,
            title: 'Puma Gamer',
            powerCertificate: "../../Img/pcgamercdmx.net/80_Plus_Bronze.svg.png",
            image: "../../Img/Gabinetes/HBJNKHG+NM.png",
            graphicsCardIMG: "../../Img/marcas/nvidia_tag.svg",
            processorIMG: "../../Img/marcas/ryzen_tag.svg",
            caseIMG: "../../Img/marcas/ocelot-512x512-1-300x300.png",
            watts: 750,
            price: 18400.50,
            processor: "AMD Ryzen 7 5700",
            graphicsCard: "Zotac RTX 4060 8GB",
            ram: "16GB DDR5",
            storage: "M2 1TB WESTERN DIGITAL",
            motherboard: "Gigabyte B550M DS3H AC",
            coolant: "Liquido de 240mm",
        },
        {
            id: 2,
            title: 'Puma Gamer',
            powerCertificate: "../../Img/pcgamercdmx.net/80_Plus_Bronze.svg.png",
            image: "../../Img/Gabinetes/BR-938686_1.png",
            graphicsCardIMG: "../../Img/marcas/nvidia_tag.svg",
            processorIMG: "../../Img/marcas/ryzen_tag.svg",
            caseIMG: "../../Img/marcas/balamrush.png",
            watts: 750,
            price: 18400.50,
            processor: "AMD Ryzen 7 5700",
            graphicsCard: "Zotac RTX 4060 8GB",
            ram: "16GB DDR5",
            storage: "M2 1TB WESTERN DIGITAL",
            motherboard: "Gigabyte B550M DS3H AC",
            coolant: "Liquido de 240mm",
        },
        {
            id: 3,
            title: 'Puma Gamer',
            powerCertificate: "../../Img/pcgamercdmx.net/80_Plus_Bronze.svg.png",
            image: "../../Img/Gabinetes/HBJNKHG+NM.png",
            graphicsCardIMG: "../../Img/marcas/nvidia_tag.svg",
            processorIMG: "../../Img/marcas/ryzen_tag.svg",
            caseIMG: "../../Img/marcas/ocelot-512x512-1-300x300.png",
            watts: 850,
            price: 18400.50,
            processor: "AMD Ryzen 7 5700",
            graphicsCard: "Zotac RTX 4060 8GB",
            ram: "16GB DDR5",
            storage: "M2 1TB WESTERN DIGITAL",
            motherboard: "Gigabyte B550M DS3H AC",
            coolant: "Liquido de 240mm",
        },
        {
            id: 4,
            title: 'Puma Gamer',
            powerCertificate: "../../Img/pcgamercdmx.net/80_Plus_Bronze.svg.png",
            image: "../../Img/Gabinetes/BR-938686_1.png",
            graphicsCardIMG: "../../Img/marcas/nvidia_tag.svg",
            processorIMG: "../../Img/marcas/ryzen_tag.svg",
            caseIMG: "../../Img/marcas/balamrush.png",
            watts: 750,
            price: 18400.50,
            processor: "AMD Ryzen 7 5700",
            graphicsCard: "Zotac RTX 4060 8GB",
            ram: "16GB DDR5",
            storage: "M2 1TB WESTERN DIGITAL",
            motherboard: "Gigabyte B550M DS3H AC",
            coolant: "Liquido de 240mm",
        },
        {
            id: 5,
            title: 'Puma Gamer',
            powerCertificate: "../../Img/pcgamercdmx.net/80_Plus_Bronze.svg.png",
            image: "../../Img/Gabinetes/HBJNKHG+NM.png",
            graphicsCardIMG: "../../Img/marcas/nvidia_tag.svg",
            processorIMG: "../../Img/marcas/ryzen_tag.svg",
            caseIMG: "../../Img/marcas/ocelot-512x512-1-300x300.png",
            watts: 750,
            price: 18400.50,
            processor: "AMD Ryzen 7 5700",
            graphicsCard: "Zotac RTX 4060 8GB",
            ram: "16GB DDR5",
            storage: "M2 1TB WESTERN DIGITAL",
            motherboard: "Gigabyte B550M DS3H AC",
            coolant: "Liquido de 240mm",
        },
        {
            id: 6,
            title: 'Puma Gamer',
            powerCertificate: "../../Img/pcgamercdmx.net/80_Plus_Bronze.svg.png",
            image: "../../Img/Gabinetes/BR-938686_1.png",
            graphicsCardIMG: "../../Img/marcas/nvidia_tag.svg",
            processorIMG: "../../Img/marcas/ryzen_tag.svg",
            caseIMG: "../../Img/marcas/balamrush.png",
            watts: 750,
            price: 18400.50,
            processor: "AMD Ryzen 7 5700",
            graphicsCard: "Zotac RTX 4060 8GB",
            ram: "16GB DDR5",
            storage: "M2 1TB WESTERN DIGITAL",
            motherboard: "Gigabyte B550M DS3H AC",
            coolant: "Liquido de 240mm",
        },
    ];
    
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

    document.getElementById('promos-arigato').innerHTML = carruselProducts.map((product) => `
        <div class="swiper-slide">
            <div class="card-item">
                <div class="graphic-card"><img src="${product.graphicsCardIMG}"
                    alt=""></div>
                <div class="certificate"><img src="${product.powerCertificate}"
                        alt=""></div>
                <div class="procesadores"><img src="${product.processorIMG}"
                        alt=""></div>
                <div class="case"><img src="${product.caseIMG}" alt=""></div>
                <img src="${product.image}" alt="Pc Gamer 1">
                <div class="offer">Oferta</div>
                <div class="watts"> ${product.watts} <br> watts</div>
                <div class="name">${product.title}</div>
                <div class="price"> $${product.price}</div>
                <div class="specs">
                    <div class="peace">
                        <i class="bi bi-cpu"></i>
                        <div class="spec-content">
                            <div class="spec-title">Procesador:</div>
                            <div class="spec-value">${product.processor}</div>
                        </div>
                    </div>
                    <div class="peace">
                        <i class="bi bi-gpu-card"></i>
                        <div class="spec-content">
                            <div class="spec-title">Tarjeta de video:</div>
                            <div class="spec-value">${product.graphicsCard}</div>
                        </div>
                    </div>
                    <div class="peace">
                        <i class="bi bi-memory"></i>
                        <div class="spec-content">
                            <div class="spec-title"><b>RAM</b>:</div>
                            <div class="spec-value">${product.ram}</div>
                        </div>
                    </div>
                    <div class="peace">
                        <i class="bi bi-sd-card"></i>
                        <div class="spec-content">
                            <div class="spec-title">Almacenamiento:</div>
                            <div class="spec-value">${product.storage}</div>
                        </div>
                    </div>
                    <div class="peace">
                        <i class="bi bi-motherboard"></i>
                        <div class="spec-content">
                            <div class="spec-title">Tarjeta Madre:</div>
                            <div class="spec-value">${product.motherboard}</div>
                        </div>
                    </div>
                    <div class="peace">
                        <i class="bi bi-hypnotize"></i>
                        <div class="spec-content">
                            <div class="spec-title">Enfriamiento:</div>
                            <div class="spec-value">${product.coolant}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    /* console.log('Swiper inicializado:', swiper); */
}
