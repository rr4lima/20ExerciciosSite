document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');




    if (isNaN(numero) || numero < 1) {
        alert("Insira um número válido.");
        return;
    }

    let ehPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    resultado.textContent = ehPrimo
        ? `${numero} é um número primo.`
        : `${numero} não é um número primo.`;
});
