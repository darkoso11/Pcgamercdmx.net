export function initializeMenu() {
    console.log('initializeMenu ejecutado');
    const hamburger = document.getElementById("hamburger");
    const leftMenu = document.querySelector(".left-menu");
    const rightMenu = document.querySelector(".right-menu");
    const menu = document.getElementById('menu'); // Verifica que el ID es correcto
    console.log('Elemento del menú:', menu);

    if (!hamburger || !leftMenu || !rightMenu) {
        console.error("No se encontraron los elementos del menú");
        return;
    }

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
}
