import { loadComponent } from './components/components.js';
/* import {initializeHero} from './components/heroslide/heroslide.js';
import { initializeBrands } from './components/marcas/slidebrands.js';
import { initializeProducts } from './components/carouselProducts/slideproducts.js'; */

document.addEventListener('DOMContentLoaded', () => {
  // Cargar el componente 'heroslide'
  loadComponent(
    'heroslide-container',         // ID del contenedor
    './components/heroslide/heroslide.html', // Ruta al HTML
    './components/heroslide/heroslide.css',  // Ruta al CSS
    () => import('./components/heroslide/heroslide.js') // Inicialización opcional
  );
});

function readMore() {
  alert("Funcionalidad de 'Leer más' aún en desarrollo. ¡Gracias por visitar!");
}

// Inserta el menú
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
  });

// footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });
//Slide de categorias
/* fetch('slidecategorias.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('slidercat-container').innerHTML = data;
  }); */

  /* Slide de marcas */
/*   fetch('slidecategorias.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('slidercat-container').innerHTML = data;
  });
 */

  