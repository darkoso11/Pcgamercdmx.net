const letrasCyberPunk = document.getElementById('letrasCyberPunk');
console.log(letrasCyberPunk);
const textToDisplay = 'El futuro es ahora, viejo. Bienvenido a la ciudad de neones y sombras.';
let i = 0;
let probability = 0.1; // Probabilidad de equivocarse
let time = 50; // Tiempo entre cada letra
let interval = setInterval(() => {
    if (i < textToDisplay.length) {
        if (Math.random() < probability && i > 1) {
            // Añadir letra random
            letrasCyberPunk.textContent += String.fromCharCode(97 + Math.floor(Math.random() * 26));
            setTimeout(() => {
                // Borrar letra random
                letrasCyberPunk.textContent = letrasCyberPunk.textContent.slice(0, -1);
                // Añadir letra correcta
                letrasCyberPunk.textContent += textToDisplay[i];
                i++;
            }, time / 4 * 3);
        } else {
            // Añadir letra correcta
            letrasCyberPunk.textContent += textToDisplay[i];
            i++;
        }
        letrasCyberPunk.textContent += `|`;
        setTimeout(() => {
            // Borrar |
            letrasCyberPunk.textContent = letrasCyberPunk.textContent.replaceAll('|', '');
        }, time / 4 * 1);
    } else {
        clearInterval(interval);
    }
}, time);