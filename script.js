function elegirLetra() {
  const letra = prompt("Escribe una letra del abecedario:").toUpperCase();

  if (letra && /^[A-Z]$/.test(letra)) {
    const spanLetra = document.getElementById("netflix-letter");
    const lines = document.querySelectorAll(".line");

    // Cambiar la letra
    spanLetra.textContent = letra;

    // Reiniciar animaciones
    lines.forEach(line => {
      line.style.animation = 'none';
      void line.offsetWidth;
      line.style.animation = 'scan 2s ease-in-out forwards';
    });
  } else {
    alert("Por favor ingresa una única letra válida (A-Z).");
  }
}