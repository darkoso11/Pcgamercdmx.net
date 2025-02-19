export async function loadGlobalComponents() {
    try {
      // Cargar el menú
      await loadComponent(
        'menu-container',
        '../components/menu/menu.html',
        '../components/menu/menu.css',
        () => import('../components/menu/menu.js')
      );
      
      // Cargar el footer
      await fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
          const footerContainer = document.getElementById('footer-container');
          if (footerContainer) {
            footerContainer.innerHTML = data;
          } else {
            console.error('Footer container not found');
          }
        });
        
      console.log('Componentes globales cargados correctamente');
    } catch (error) {
      console.error('Error al cargar componentes globales:', error);
    }
  }