const form = document.getElementById("form");
const textoInput = document.getElementById("texto");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const texto = textoInput.value;
  if (texto.trim() === "") {
    alert("Caracteres inválidos.");
    return;
  }


  let textoLimpo = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      textoLimpo += texto[i];
    }
  }

  
  let ehPalindromo = true;
  for (let i = 0; i < textoLimpo.length / 2; i++) {
    if (textoLimpo[i] !== textoLimpo[textoLimpo.length - 1 - i]) {
      ehPalindromo = false;
      break;
    }
  }

  if (ehPalindromo) {
    resultado.textContent = `"${texto}" é um palíndromo.`;
  } else {
    resultado.textContent = `"${texto}" não é um palíndromo.`;
  }
});
