const formulario = document.getElementById("formulario");
const numeroInput = document.getElementById("numero");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const numero = parseInt(numeroInput.value);

  if (isNaN(numero)) {
    alert("Insira um número válido.");
  } else {
    const tipo = numero % 2 === 0 ? "par" : "ímpar";
    resultado.textContent = `O número ${numero} é ${tipo}.`;
  }

  numeroInput.value = "";
});
