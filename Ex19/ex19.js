const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const form = document.getElementById('form');
const resultado = document.getElementById('resultado');
const tentativas2 = document.getElementById('tentativas');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const palpite = document.getElementById('palpite').value;


    if (palpite.trim() === '') {
        alert("Insira um número.");
        return;
    }


    const palpiteNum = parseInt(palpite);


    tentativas++;


    tentativas2.textContent = `Tentativas: ${tentativas}`;


    if (palpiteNum < numeroAleatorio) {
        resultado.textContent = 'O número é maior. Tente novamente.';
    } else if (palpiteNum > numeroAleatorio) {
        resultado.textContent = 'O número é menor. Tente novamente.';
    } else {
        resultado.textContent = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
    }

    document.getElementById('palpite').value = '';
});
