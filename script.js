import { loadComponent } from './components/components.js';

document.addEventListener('DOMContentLoaded', () => {
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

    // Cargar menú y footer
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});

export function readMore() {
    alert("Funcionalidad de 'Leer más' aún en desarrollo. ¡Gracias por visitar!");
}

  