export function initializeHeroSlide() {
  let currentIndex = 0;
  let isTransitioning = false;

  function changeSlide(direction) {
    if (isTransitioning) return;

    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    isTransitioning = true;

    const currentSlide = slides[currentIndex];
    const nextIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const nextSlide = slides[nextIndex];

    // Configurar transiciones
    nextSlide.style.transition = "none";
    nextSlide.style.left = direction === 1 ? "100vw" : "-100vw";

    // Forzar reflujo
    nextSlide.offsetHeight;

    currentSlide.style.transition = "left 0.5s ease";
    nextSlide.style.transition = "left 0.5s ease";

    currentSlide.style.left = direction === 1 ? "-100vw" : "100vw";
    nextSlide.style.left = "0";

    setTimeout(() => {
      currentSlide.classList.remove('active');
      nextSlide.classList.add('active');
      currentIndex = nextIndex;
      isTransitioning = false;
    }, 500);
  }

  // Asociar eventos a los botones
  document.getElementById('prev').addEventListener('click', () => changeSlide(-1));
  document.getElementById('next').addEventListener('click', () => changeSlide(1));
}
