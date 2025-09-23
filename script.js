function elegirLetra() {
  const letra = prompt("Escribe una letra del abecedario:").toUpperCase();

  if (letra && /^[A-Z]$/.test(letra)) {
    const spanLetra = document.getElementById("netflix-letter");
    const lightBars = document.querySelector(".light-bars");

    // Reiniciar animaciones
    spanLetra.style.animation = "none";
    lightBars.style.animation = "none";
    void spanLetra.offsetWidth; // Fuerza el reinicio de la animación
    void lightBars.offsetWidth;

    // Cambiar letra
    spanLetra.textContent = letra;

    // Reaplicar animaciones
    spanLetra.style.animation = "fadeIn 2s ease-in-out forwards";
    lightBars.style.animation = "lightAnimation 2s ease-in-out forwards";
  } else {
    alert("Por favor ingresa una única letra válida (A-Z).");
  }
}