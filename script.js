function elegirLetra() {
  const letra = prompt("Escribe una letra del abecedario:").toUpperCase();

  if (letra && /^[A-Z]$/.test(letra)) {
    const spanLetra = document.getElementById("netflix-letter");
    const lightBars = document.querySelector(".light-bars");
    const lines = document.querySelectorAll(".line");

    // Reiniciar animaciones
    spanLetra.style.animation = "none";
    lightBars.style.animation = "none";
    lines.forEach(line => line.style.animation = "none");

    // Forzar reflow para reiniciar
    void spanLetra.offsetWidth;
    void lightBars.offsetWidth;
    lines.forEach(line => void line.offsetWidth);

    // Cambiar letra
    spanLetra.textContent = letra;

    // Reaplicar animaciones
    spanLetra.style.animation = "fadeIn 2s ease-in-out forwards";
    lightBars.style.animation = "lightAnimation 2s ease-in-out forwards";
    lines.forEach(line => {
      line.style.animation = `moveLine 2s ease-out forwards`;
    });
  } else {
    alert("Por favor ingresa una única letra válida (A-Z).");
  }
}