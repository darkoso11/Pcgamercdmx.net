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
