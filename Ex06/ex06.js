const numeroInput = document.getElementById("numero");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");



botao.addEventListener("click", function () {
    event.preventDefault();
    const numero = parseInt(numeroInput.value);
    
    if (isNaN(numero) || numero <= 0) {
        alert("Insira um carácter válido.");
        return;
    }

    let tabuada = ""; 

    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}<br>`; 
    }

    resultado.innerHTML = tabuada; 
});
