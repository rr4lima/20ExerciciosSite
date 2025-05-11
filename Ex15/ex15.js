const form = document.getElementById("enquete-form");
const totalVotos = document.getElementById("total-votos");
const porcentagemMaca = document.getElementById("porcentagem-maca");
const porcentagemBanana = document.getElementById("porcentagem-banana");
const porcentagemLaranja = document.getElementById("porcentagem-laranja");

let votosMaca = 0;
let votosBanana = 0;
let votosLaranja = 0;
let totalDeVotos = 0;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const frutaSelecionada = document.querySelector('input[name="fruta"]:checked');

    if (!frutaSelecionada) {
        alert("Selecione uma opção para votar!");
        return;
    }

    const fruta = frutaSelecionada.value;

    if (fruta === "Maçã") {
        votosMaca++;
    } else if (fruta === "Banana") {
        votosBanana++;
    } else if (fruta === "Laranja") {
        votosLaranja++;
    }

    totalDeVotos++;

    const porcMaca = (votosMaca / totalDeVotos) * 100;
    const porcBanana = (votosBanana / totalDeVotos) * 100;
    const porcLaranja = (votosLaranja / totalDeVotos) * 100;

    totalVotos.textContent = `Total de Votos: ${totalDeVotos}`;
    porcentagemMaca.textContent = `Maçã: ${porcMaca.toFixed(2)}%`;
    porcentagemBanana.textContent = `Banana: ${porcBanana.toFixed(2)}%`;
    porcentagemLaranja.textContent = `Laranja: ${porcLaranja.toFixed(2)}%`;
});
