// Utilidad: forzar reflujo para reiniciar animaciones CSS
function restartAnimation(node) {
  // elimina y vuelve a añadir la clase en body
  document.body.classList.remove('play');
  // fuerza reflow
  void node.offsetWidth;
  // vuelve a reproducir
  document.body.classList.add('play');
}

const input = document.getElementById('letra');
const btn = document.getElementById('play');
const letter = document.getElementById('letter');
const intro = document.getElementById('intro');

// normaliza letras con Ñ/ñ y acentos: tomamos el primer carácter visible
function sanitizeChar(str) {
  if (!str) return 'N';
  const c = [...str.trim()][0]; // soporta unicode
  return c || 'N';
}

// al cargar: reproducir una vez
window.addEventListener('load', () => {
  restartAnimation(intro);
});

// clic en “Reproducir”
btn.addEventListener('click', () => {
  const c = sanitizeChar(input.value || 'N');
  letter.textContent = c.toUpperCase();
  restartAnimation(intro);
});

// también al presionar Enter dentro del input
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    btn.click();
  }
});

// limita a un solo carácter visible (unicode) en el input
input.addEventListener('input', () => {
  const chars = [...input.value];
  if (chars.length > 1) {
    input.value = chars[0];
  }
});
