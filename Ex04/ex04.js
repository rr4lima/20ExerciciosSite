const formulario = document.getElementById("calculadora");
const numero1Input = document.getElementById("numero1");
const numero2Input = document.getElementById("numero2");
const operacao = document.getElementById("operacao");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);
    const op = operacao.value;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Insira um número válido.");
        return;
    }

    let resultadoCalculado;

    if (op === "+") {
        resultadoCalculado = numero1 + numero2;
    } else if (op === "-") {
        resultadoCalculado = numero1 - numero2;
    } else if (op === "*") {
        resultadoCalculado = numero1 * numero2;
    } else if (op === "/") {
        
        if (numero2 === 0) {
            alert("Não é possivel dividir por zero.")
            return;
        }
        if (numero1.value.trim() === "" || numero2.value.trim() === "") {
            alert("Insira um valor válido.")
            return;
        }
            
    
        resultadoCalculado = numero1 / numero2;
    } else {
        resultado.textContent = "Operação inválida.";
        return;
    }

    resultado.textContent = `Resultado: ${resultadoCalculado}`;
});
