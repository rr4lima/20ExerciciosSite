document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-gerador");
    const inputTamanho = document.getElementById("tamanho");
    const campoSenha = document.getElementById("senha");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tamanho = parseInt(inputTamanho.value);

        if (isNaN(tamanho) || tamanho < 4) {
            alert("Escolha um tamanho válido. (mínimo 4).");
            return;
        }

        const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
        const numeros = "0123456789";
        const simbolos = "!@#$%&*?";

        const todos = letrasMaiusculas + letrasMinusculas + numeros + simbolos;

        let senha = "";
        for (let i = 0; i < tamanho; i++) {
            const randomChar = todos.charAt(Math.floor(Math.random() * todos.length));
            senha += randomChar;
        }

        campoSenha.textContent = senha;
    });
});
