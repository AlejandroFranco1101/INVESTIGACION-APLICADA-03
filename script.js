// Utilidad: forzar reflujo para reiniciar animaciones CSS
function restartAnimation(node) {
  document.body.classList.remove('play');
  void node.offsetWidth;
  document.body.classList.add('play');
}

const input = document.getElementById('letra');
const btn = document.getElementById('play');
const letter = document.getElementById('letter');
const intro = document.getElementById('intro');
const colorLines = document.querySelector('.color-lines');

// Crear las líneas de colores en el DOM
function createColorLines() {
  colorLines.innerHTML = ''; // Limpiar líneas previas
  for (let i = 0; i < 12; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    colorLines.appendChild(line);
  }
}

// Sanear y extraer la letra
function sanitizeChar(str) {
  if (!str) return 'N';
  const c = [...str.trim()][0]; // Soporta caracteres Unicode
  return c || 'N';
}

// Cargar la animación cuando la página se cargue
window.addEventListener('load', () => {
  createColorLines();
  restartAnimation(intro);
});

// Al hacer clic en “Reproducir”
btn.addEventListener('click', () => {
  const c = sanitizeChar(input.value || 'N');
  letter.textContent = c.toUpperCase();
  createColorLines(); // Crear las líneas para cada nueva reproducción
  restartAnimation(intro);
});

// Cuando se presiona la tecla Enter dentro del input
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    btn.click();
  }
});

// Limitar a un solo carácter visible (Unicode)
input.addEventListener('input', () => {
  const chars = [...input.value];
  if (chars.length > 1) {
    input.value = chars[0];
  }
});