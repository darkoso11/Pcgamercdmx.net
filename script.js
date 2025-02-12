import { loadGlobalComponents, loadPageComponents } from './components/components.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Primero cargar los componentes globales (menú y footer)
        await loadGlobalComponents();
        
        // Definir los componentes específicos de esta página
        const pageComponents = [
            {
                containerId: 'heroslide-container',
                htmlPath: './components/heroslide/heroslide.html',
                cssPath: './components/heroslide/heroslide.css',
                jsPath: './components/heroslide/heroslide.js'
            },
            {
                containerId: 'carruselproducts-container',
                htmlPath: './components/carruselproducts/carruselproducts.html',
                cssPath: './components/carruselproducts/carruselproducts.css',
                jsPath: './components/carruselproducts/carruselproducts.js'
            },
            {
                containerId: 'slidecategorias-container',
                htmlPath: './components/slidcategorias/slidecategorias.html',
                cssPath: './components/slidcategorias/slidecategorias.css',
                jsPath: './components/slidcategorias/slidecategorias.js'
            },
            {
                containerId: 'brands-container',
                htmlPath: './components/marcas/slidebrands.html',
                cssPath: './components/marcas/slidebrands.css',
                jsPath: './components/marcas/slidebrands.js'
            }
        ];

        // Cargar los componentes específicos de la página
        await loadPageComponents(pageComponents);

    } catch (error) {
        console.error('Error al cargar los componentes:', error);
    }
});

// Funciones auxiliares
export function readMore() {
    alert("Funcionalidad de 'Leer más' aún en desarrollo. ¡Gracias por visitar!");
}
