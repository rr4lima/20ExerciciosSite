function converter(event) {
  event.preventDefault(); // Previne o envio do formulário (o comportamento padrão)

  const celsius = parseFloat(document.getElementById("celsius").value);
  const escala = document.getElementById("escala").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(celsius)) {
    alert("Digite uma temperatura válida.");
    return;
  }

  let valorConvertido = 0;

  if (escala === "fahrenheit") {
    valorConvertido = (celsius * 9/5) + 32;
    resultado.textContent = `Temperatura em Fahrenheit: ${valorConvertido.toFixed(2)}°F`;
  } else if (escala === "kelvin") {
    valorConvertido = celsius + 273.15;
    resultado.textContent = `Temperatura em Kelvin: ${valorConvertido.toFixed(2)}K`;
  } else {
    resultado.textContent = "Selecione uma escala válida.";
  }
}

// Captura o evento de submit do formulário
document.getElementById("formulario").addEventListener("submit", converter);
