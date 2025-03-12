import { loadComponent } from './components/components.js';

document.addEventListener('DOMContentLoaded', () => {
  [
    {
      component: 'menu',
      reference: '../../',
      isAsync: true
    },
    {
      component: 'letrasCyberPunk',
      reference: './',
      isAsync: false
    },
    {
      component: 'heroslide',
      reference: './',
      isAsync: false
    },
    {
      component: 'carruselproducts',
      reference: './',
      isAsync: false
    },
    {
      component: 'slidecategorias',
      reference: './',
      isAsync: false
    },
    {
      component: 'brands',
      reference: './',
      isAsync: false
    },
    {
      component: 'footer',
      reference: '../../',
      isAsync: false
    }
  ].forEach(({ component, reference, isAsync }) => {
    loadComponent(
      `${component}-container`,
      `${reference}components/${component}/${component}.html`,
      `${reference}components/${component}/${component}.css`,
      isAsync ? async () => {
        const module = await import(`${reference}components/${component}/${component}.js`);
        console.log(`${component}.js cargado:`, module);
        const capitalizedComponent = component.charAt(0).toUpperCase() + component.slice(1);
        if (module && module['initialize' + capitalizedComponent]) {
          console.log(`Ejecutando initialize${capitalizedComponent}()`);
          module['initialize' + capitalizedComponent]();
        } else {
          console.warn(`initialize${capitalizedComponent} no existe en ${component}.js`);
        }
        return module;
      } : 
      () => import(`${reference}components/${component}/${component}.js`)
    );
  });

});


/* export function readMore() {
    alert("Funcionalidad de 'Leer más' aún en desarrollo. ¡Gracias por visitar!");
} */
