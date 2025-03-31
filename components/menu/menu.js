export function initializeMenu() {
    console.log('initializeMenu ejecutado');
    let menu = null;
    let success = false;
    let trys = 0;
    const intervalId = setInterval(() => {
        trys++;
        menu = document.getElementById('menu'); // Verifica que el ID es correcto
        console.log('Elemento del menú:', menu);
        console.log('Intentos:', trys);
        if (menu !== null && success === false) {
            success = true;
            clearInterval(intervalId);
            const hamburger = document.getElementById("hamburger");
            const menuMovil = document.querySelector(".menu-movil");
            console.log('se encontro el menu movil', menuMovil)
            if (!hamburger || !menuMovil) {
                console.error("No se encontraron los elementos del menú");
                console.error('No se consiguio', menuMovil)
                return;
            }
            // Alternar clases para mostrar u ocultar el menú
            hamburger.addEventListener("click", function () {
                console.log('Hamburguesa clickeada');
                menuMovil.classList.toggle("active");
            });
            console.log('Menú inicializado. 1/2');

            // Cerrar menú cuando se hace clic en un enlace
            document.querySelectorAll(".menu-movil").forEach(link => {
                link.addEventListener("click", function () {
                    menuMovil.classList.remove("active");

                });
            });
            console.log('Menú inicializado. 2/2');
        }
        if (trys >= 10) {
            clearInterval(intervalId);
            console.error('No se encontró el menú');
        }
    }, trys === 0 ? 0 : 1000 * (trys + 1));
}
