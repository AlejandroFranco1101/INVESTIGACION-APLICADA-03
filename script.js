window.onload = function() {
    const logo = document.querySelector('.netflix-logo');
    const letterSelector = document.getElementById('letterSelector'); // Obtener el selector de letras
    const playButton = document.getElementById('playButton'); // Obtener el botón de reproducir
    const linesContainer = document.querySelector('.lines-container');

    const numberOfLines = 150; // Número de líneas

    // Definir patrón cíclico de colores, siempre terminando en negro
    const baseColors = ['#ff0000', '#e6e7dfff', '#5817eeff', '#ff0000', '#b22222', '#0e060aff', '#dc143c', '#5817eeff', '#b22222', '#ffffff', '#dd7a0aff', '#ffffff', '#a11a8bff', '#117aaaff']; // Colores base
    const colors = []; // Array final que incluirá el patrón con el último color como negro

    // Llenar el arreglo de colores cíclicos, siempre asegurando que termine en negro
    for (let i = 0; i < numberOfLines; i++) {
        colors.push(baseColors[i % baseColors.length]);
        if (i === numberOfLines - 1) {
            colors[i] = '#000000'; // El último color siempre será negro
        }
    }

    // Función para crear las líneas
    function createLines() {
        for (let i = 0; i < numberOfLines; i++) {
            const line = document.createElement('div');
            line.classList.add('line');

            // Asignar el color cíclico de la lista
            line.style.backgroundColor = colors[i];

            const delay = Math.random() * 2; // Retraso aleatorio para cada línea
            line.style.animationDelay = `${delay}s`;

            // Posicionar las líneas de forma equidistante a lo largo de la pantalla
            const positionX = (100 / numberOfLines) * i; // Dividir la pantalla para tener posiciones de líneas equidistantes
            line.style.left = `${positionX}%`;

            linesContainer.appendChild(line);
        }
    }

    // Función para iniciar la animación de desintegración del logo
    function startLogoAnimation() {
        setTimeout(() => {
            logo.style.opacity = "0"; // Hacer desaparecer el logo
        }, 4000); // Después de 4 segundos, el logo empieza a desaparecer (el doble de tiempo)
    }

    // Funcionalidad del botón "Reproducir"
    playButton.addEventListener('click', function() {
        const selectedLetter = letterSelector.value; // Obtener la letra seleccionada
        logo.textContent = selectedLetter; // Cambiar el contenido del logo por la letra seleccionada

        // Reiniciar la animación
        logo.style.opacity = 1; // Asegurarse de que el logo sea visible al hacer clic
        logo.style.animation = 'none'; // Detener cualquier animación anterior
        logo.offsetHeight; // Forzar el reflow para reiniciar la animación
        logo.style.animation = 'logoDisintegrate 3s forwards'; // Iniciar la animación de desintegración nuevamente

        // Reproducir las líneas y animación
        linesContainer.innerHTML = ''; // Limpiar las líneas previas
        createLines(); // Crear nuevas líneas
        startLogoAnimation(); // Iniciar animación del logo
    });
}