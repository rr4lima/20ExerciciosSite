const formulario = document.getElementById("imc");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const valorIMC = document.getElementById("valorIMC");
const mensagemIMC = document.getElementById("mensagemIMC");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Insira valores válidos.");
    return;
  }

  const imc = peso / (altura * altura); 

  valorIMC.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

  if (imc < 18.5) {
    mensagemIMC.textContent = "Você está abaixo do peso.";
  } else if (imc >= 18.5 && imc < 24.9) {
    mensagemIMC.textContent = "Você está com o peso normal.";
  } else if (imc >= 25 && imc < 29.9) {
    mensagemIMC.textContent = "Você está sobrepeso.";
  } else {
    mensagemIMC.textContent = "Você está com obesidade.";
  }
});
