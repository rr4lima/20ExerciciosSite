document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value) || 0; 

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Insira pelo menos três notas válidas.");
        return;
    }

   
    const media = (nota1 + nota2 + nota3 + nota4) / (nota4 ? 4 : 3);


    const resultado = document.getElementById('resultado');

    if (media >= 7) {
        resultado.textContent = `Média: ${media.toFixed(2)}. Você foi aprovado.`;
    } else if (media >= 4) {
        resultado.textContent = `Média: ${media.toFixed(2)}. Você está de ecuperação.`;
    } else {
        resultado.textContent = `Média: ${media.toFixed(2)}. Você foi reprovado..`;
    }
});
