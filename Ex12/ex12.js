let minutos = 0;
let segundos = 0;
let centisegundos = 0;
let cronometroAtivo = false;
let intervalo;

const iniciarBtn = document.getElementById("iniciar");
const pausarBtn = document.getElementById("pausar");
const zerarBtn = document.getElementById("zerar");

const minutosDisplay = document.getElementById("minutos");
const segundosDisplay = document.getElementById("segundos");
const centisegundosDisplay = document.getElementById("centisegundos");

function atualizarDisplay() {
    minutosDisplay.textContent = minutos < 10 ? "0" + minutos : minutos;
    segundosDisplay.textContent = segundos < 10 ? "0" + segundos : segundos;
    centisegundosDisplay.textContent = centisegundos < 10 ? "0" + centisegundos : centisegundos;
}

function iniciarCronometro() {
    cronometroAtivo = true;
    iniciarBtn.disabled = true;
    pausarBtn.disabled = false;

    intervalo = setInterval(() => {
        centisegundos++;
        if (centisegundos >= 100) {
            centisegundos = 0;
            segundos++;
        }

        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }

        atualizarDisplay();
    }, 10); 
}

function pausarCronometro() {
    cronometroAtivo = false;
    iniciarBtn.disabled = false;
    pausarBtn.disabled = true;
    clearInterval(intervalo); 
}

function zerarCronometro() {
    minutos = 0;
    segundos = 0;
    centisegundos = 0;
    atualizarDisplay();

    if (cronometroAtivo) {
        clearInterval(intervalo); 
        cronometroAtivo = false;
        iniciarBtn.disabled = false;
        pausarBtn.disabled = true;
    }
}

iniciarBtn.addEventListener("click", iniciarCronometro);
pausarBtn.addEventListener("click", pausarCronometro);
zerarBtn.addEventListener("click", zerarCronometro);
