document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const texto = document.getElementById('texto').value.trim();

 
    if (texto === "") {
        alert("Preencha o campo de texto.");
        return;  
    }

    const palavras = texto.split(/\s+/).filter(p => p.length > 0); 
    const quantidadePalavras = palavras.length;

    const letras = texto.replace(/\s+/g, '').length;

    document.getElementById('quantidade-palavras').textContent = quantidadePalavras;
    document.getElementById('quantidade-letras').textContent = letras;
});
