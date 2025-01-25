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

  