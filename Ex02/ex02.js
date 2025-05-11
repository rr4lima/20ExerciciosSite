const formulario = document.getElementById("formulario");
const inicioInput = document.getElementById("inicio");
const finalInput = document.getElementById("final");
const passoInput = document.getElementById("passo");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const inicio = parseInt(inicioInput.value); 
  const final = parseInt(finalInput.value); 
  const passo = parseInt(passoInput.value); 

  if (isNaN(inicio) || isNaN(final) || isNaN(passo) || passo <= 0) {
    alert("Número ou números inválidos.");
    return; 
  }

  let contagem = ""; 
  for (let i = inicio; i <= final; i += passo) {
    contagem += i + " "; 
  }
  resultado.textContent = `Contagem: ${contagem}`;
});
