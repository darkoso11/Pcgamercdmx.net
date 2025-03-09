import { loadComponent } from './components/components.js';

document.addEventListener('DOMContentLoaded', () => {
  
  loadComponent(
    'menu-container',
    '../../components/menu/menu.html',
    '../../components/menu/menu.css',
    async () => {
        const module = await import('../../components/menu/menu.js');
        console.log('menu.js cargado:', module);

        if (module && module.initializeMenu) {
            console.log('Ejecutando initializeMenu()');
            module.initializeMenu();
        } else {
            console.warn('initializeMenu no existe en menu.js');
        }
        return module;
            }
        );

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

      loadComponent(
        'footer-container',
        '../../components/footer/footer.html',
        '../../components/footer/footer.css',
        () => import('../../components/footer/footer.js')
      )
      
    });


/* export function readMore() {
    alert("Funcionalidad de 'Leer más' aún en desarrollo. ¡Gracias por visitar!");
} */
