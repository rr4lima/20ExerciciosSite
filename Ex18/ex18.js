document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagemErro = document.getElementById('mensagem-erro');


    mensagemErro.textContent = '';

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos");
        return;
    }


    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        mensagemErro.textContent = 'E-mail inválido.';
        return;
    }

    // Se passou nas validações, exibir sucesso
    mensagemErro.textContent = 'Cadastro realizado com sucesso!';
    mensagemErro.style.color = 'green';
});
