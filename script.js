 document.getElementById('showLetterButton').addEventListener('click', () => {
        const letra = document.getElementById('letterSelect').value;

        // Ocultar todas
        document.querySelectorAll('netflixintro').forEach(el => el.style.display = 'none');

        // Mostrar la seleccionada
        document.getElementById(letra).style.display = 'block';
        });
        document.getElementById('restartButton').addEventListener('click', () => {
        const visible = document.querySelector('netflixintro[style*="block"]');
        if (visible) {
            const id = visible.id;
            visible.style.display = 'none';
            setTimeout(() => {
            visible.style.display = 'block';
            }, 100); // se esconde un momento y vuelve a mostrar para reiniciar animación
        }
        });
        document.addEventListener('keydown', (e) => {
        const letra = e.key.toUpperCase();
        const selected = document.getElementById(letra);

        if (selected) {
            document.querySelectorAll('netflixintro').forEach(el => el.style.display = 'none');
            selected.style.display = 'block';
        }
        });


        // Oculta todas las intros al iniciar
        document.querySelectorAll('netflixintro').forEach(el => el.style.display = 'none');

        // Mostrar la letra N por defecto
        document.getElementById('N').style.display = 'block';

        // Botón para seleccionar letra
        document.getElementById('selectLetterButton').addEventListener('click', () => {
            const letra = prompt("Ingresa la letra que quieres ver (mayúscula)").toUpperCase();

            if (letra) {
                // Oculta todas las intros
                document.querySelectorAll('netflixintro').forEach(el => el.style.display = 'none');

                // Mostrar la intro seleccionada si existe
                const selected = document.getElementById(letra);
                if (selected) {
                    selected.style.display = 'block';
                } else {
                    alert("No hay intro disponible para la letra " + letra);
                }
            }
        });