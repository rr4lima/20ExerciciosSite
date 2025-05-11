document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const inputValor = document.getElementById("valor");
    const resultado = document.getElementById("notas");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valor = parseInt(inputValor.value);

        if (isNaN(valor) || valor <= 0) {
            alert("Insira um valor válido.");
            return;
        }

        let notas100 = Math.floor(valor / 100);
        valor %= 100;
        let notas50 = Math.floor(valor / 50);
        valor %= 50;
        let notas10 = Math.floor(valor / 10);
        valor %= 10;
        let notas1 = valor;

        let mensagem = "";

        if (notas100 > 0) mensagem += `R$100: ${notas100} nota(s)<br>`;
        if (notas50 > 0) mensagem += `R$50: ${notas50} nota(s)<br>`;
        if (notas10 > 0) mensagem += `R$10: ${notas10} nota(s)<br>`;
        if (notas1 > 0) mensagem += `R$1: ${notas1} nota(s)<br>`;

        if (mensagem === "") {
            mensagem = "Valor insuficiente para notas!";
        }

        resultado.innerHTML = mensagem;
    });
});
