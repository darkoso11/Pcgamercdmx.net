document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const leftMenu = document.querySelector(".left-menu");
  const rightMenu = document.querySelector(".right-menu");

  // Alternar clases para mostrar u ocultar el menú
  hamburger.addEventListener("click", function () {
      leftMenu.classList.toggle("active");
      rightMenu.classList.toggle("active");
  });

  // Cerrar menú cuando se hace clic en un enlace
  document.querySelectorAll(".left-menu a, .right-menu a").forEach(link => {
      link.addEventListener("click", function () {
          leftMenu.classList.remove("active");
          rightMenu.classList.remove("active");
      });
  });
});
