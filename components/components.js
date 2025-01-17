import { loadComponent } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
  loadComponent(
    'heroslide-container', // Contenedor donde irá el slider
    './components/heroslide/heroslide.html', // Archivo HTML del slider
    './components/heroslide/heroslide.css', // Archivo CSS del slider
    () => import('./components/heroslide/heroslide.js').then(module => {
      module.initializeHeroSlide(); // Inicializar el slider dinámicamente
    })
  );
});
