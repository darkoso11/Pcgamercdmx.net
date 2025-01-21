import { loadComponent } from './components/components.js';

document.addEventListener('DOMContentLoaded', () => {
    // Cargar el componente 'heroslide'
    loadComponent(
        'heroslide-container',
        './components/heroslide/heroslide.html',
        './components/heroslide/heroslide.css',
        () => import('./components/heroslide/heroslide.js')
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

  