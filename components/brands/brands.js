export function initializeBrands() {
    console.log('Componente de marcas inicializado');
  
    // Aquí puedes agregar cualquier lógica específica para este componente
    const slides = document.querySelectorAll('.brand-slide');
    slides.forEach(slide => {
      slide.addEventListener('click', () => {
        alert(`Marca seleccionada: ${slide.dataset.brand}`);
      });
    });
  }
  