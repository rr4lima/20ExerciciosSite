function adicionarItem() {
    const input = document.getElementById('item');
    const itemTexto = input.value.trim();

    if (itemTexto === "") {
        alert("Insira um item.");
        return;
    }

    const lista = document.getElementById('listaCompras');

    const li = document.createElement('li');
    li.textContent = itemTexto;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerItem(li);

    li.appendChild(botaoRemover);
    lista.appendChild(li);

    input.value = "";
}

function removerItem(item) {
    const lista = document.getElementById('listaCompras');
    lista.removeChild(item);
}
