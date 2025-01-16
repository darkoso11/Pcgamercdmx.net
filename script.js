/* // Seleccionar elementos
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Evento click en el botón hamburguesa
hamburger.addEventListener('click', () => {
  // Alternar clase 'responsive' para mostrar u ocultar el menú
  navLinks.classList.toggle('responsive');
}); */

let currentIndex = 0;
let isTransitioning = false;


function changeSlide(direction) {
  if (isTransitioning) return; // Bloquear clics múltiples durante la transición

  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  isTransitioning = true;

  const currentSlide = slides[currentIndex];
  const nextIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const nextSlide = slides[nextIndex];

  // Configurar las posiciones iniciales para la transición
  nextSlide.style.transition = "none"; // Evitar transiciones abruptas al mover la posición inicial
  nextSlide.style.left = direction === 1 ? "100vw" : "-100vw"; // Usar `vw` para asegurar desplazamiento completo

  // Forzar reflujo para garantizar que se aplique el nuevo `left` antes de animar
  nextSlide.offsetHeight;

  // Activar transiciones para ambas diapositivas
  currentSlide.style.transition = "left 0.5s ease";
  nextSlide.style.transition = "left 0.5s ease";

  // Mover las diapositivas
  currentSlide.style.left = direction === 1 ? "-100vw" : "100vw"; // Asegurar que salga completamente de la pantalla
  nextSlide.style.left = "0";

  // Esperar a que termine la transición
  setTimeout(() => {
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    currentIndex = nextIndex;
    isTransitioning = false;
  }, 500); // Duración de la transición CSS
}

function readMore() {
  alert("Funcionalidad de 'Leer más' aún en desarrollo. ¡Gracias por visitar!");
}

// Inserta el menú
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
  });

// Inserta el footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });
//Slide de categorias
fetch('slidecategorias.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('slidercat-container').innerHTML = data;
  });

  /* Slide de marcas */
  fetch('slidecategorias.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('slidercat-container').innerHTML = data;
  });

  function loadBrandsComponent() {
    const container = document.getElementById('brands-container');
  
    // Usamos fetch para cargar el HTML del componente
    fetch('./components/marcas/slidebrands.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al cargar el componente: ${response.statusText}`);
        }
        return response.text(); // Convertimos la respuesta en texto
      })
      .then(html => {
        container.innerHTML = html; // Insertamos el HTML cargado en el contenedor
        initializeBrands(); // Inicializamos el JS del componente
      })
      .catch(error => {
        console.error('Error cargando el componente:', error);
      });
  }
  
  // Llamar a la función cuando cargue la página
  document.addEventListener('DOMContentLoaded', loadBrandsComponent);

  function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }
  
  // Llamar a la función al cargar el componente
  loadCSS('./components/marcas/slidebrands.css');
  