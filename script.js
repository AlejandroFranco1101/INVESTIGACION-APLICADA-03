const netflixLetter = document.getElementById("netflix-letter");

function cambiarLetra() {
  const letra = prompt("Escribe una letra del abecedario (solo una):");
  if (letra && letra.length === 1 && /^[a-zA-Z]$/.test(letra)) {
    netflixLetter.textContent = letra.toUpperCase();
  } else {
    alert("Por favor, ingresa solo una letra válida.");
  }
}

function cambiarNombre() {
  const nombre = prompt("Escribe un nombre:");
  if (nombre && nombre.trim().length > 0) {
    netflixLetter.textContent = nombre.trim().charAt(0).toUpperCase();
  } else {
    alert("Por favor, escribe un nombre válido.");
  }
}