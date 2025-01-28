import { loadComponent } from './components/components.js';

document.addEventListener('DOMContentLoaded', () => {
    loadComponent(
        'menu-container',
        './components/menu/menu.html',
        './components/menu/menu.css',
        () => import('./components/menu/menu.js')
      );

    // Cargar el componente 'heroslide'
    loadComponent(
        'heroslide-container',
        './components/heroslide/heroslide.html',
        './components/heroslide/heroslide.css',
        () => import('./components/heroslide/heroslide.js')
    );

    loadComponent(
        'carruselproducts-container',
        './components/carruselproducts/carruselproducts.html',
        './components/carruselproducts/carruselproducts.css',
        () => import('./components/carruselproducts/carruselproducts.js')
      );

      loadComponent(
        'slidecategorias-container',
        './components/slidcategorias/slidecategorias.html',
        './components/slidcategorias/slidecategorias.css',
        () => import('./components/slidcategorias/slidecategorias.js')
      );

      loadComponent(
        'brands-container',
        './components/marcas/slidebrands.html',
        './components/marcas/slidebrands.css',
        () => import('./components/marcas/slidebrands.js')
      );

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});

export function readMore() {
    alert("Funcionalidad de 'Leer más' aún en desarrollo. ¡Gracias por visitar!");
}

const API_KEY = 'TU_API_KEY_DE_GOOGLE';
const PLACE_ID = 'ID_DEL_LUGAR';

async function fetchGoogleReviews() {
    const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const reviewsContainer = document.getElementById('reviews-container');
        data.result.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <div class="review-author">${review.author_name}</div>
                <div class="review-rating">⭐ ${review.rating}/5</div>
                <div class="review-text">${review.text}</div>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

fetchGoogleReviews();