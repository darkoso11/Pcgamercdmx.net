export function initializeMenu() {
    console.log('initializeMenu ejecutado');

    const hamburger = document.getElementById("hamburger");
    const menuMovil = document.querySelector(".menu-movil");

    if (!hamburger || !menuMovil) {
        console.error("No se encontraron los elementos del menú");
        return;
    }

    // Alternar clases para mostrar u ocultar el menú
    hamburger.addEventListener("click", function () {
        console.log('Hamburguesa clickeada');
        menuMovil.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Cerrar menú cuando se hace clic en un enlace
    document.querySelectorAll(".menu-movil a").forEach(link => {
        link.addEventListener("click", () => {
            menuMovil.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    console.log('Menú inicializado.');
}