// components.js
export async function loadComponent(containerId, htmlPath, cssPath, initCallback) {
  try {
      // Cargar el HTML
      const htmlResponse = await fetch(htmlPath);
      const htmlContent = await htmlResponse.text();
      
      // Cargar el CSS
      const cssResponse = await fetch(cssPath);
      const cssContent = await cssResponse.text();
      
      // Insertar el CSS
      const styleElement = document.createElement('style');
      styleElement.textContent = cssContent;
      document.head.appendChild(styleElement);
      
      // Insertar el HTML
      const container = document.getElementById(containerId);
      if (container) {
          container.innerHTML = htmlContent;
          
          // Ejecutar el callback de inicialización si existe
          if (initCallback) {
              const module = await initCallback();
              if (module && module.initializeHeroSlide) {
                  module.initializeHeroSlide();
              }
          }
      } else {
          console.error(`Container with id ${containerId} not found`);
      }
  } catch (error) {
      console.error('Error loading component:', error);
  }
}